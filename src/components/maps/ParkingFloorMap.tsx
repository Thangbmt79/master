import { Marker, Polygon } from '@react-google-maps/api';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { GoogleMapWrapper } from './GoogleMapWrapper';
import { defaultDrawingManagerOptions, ParkingFloorMapProps, ParkingSpot } from './configs';

export const createMarkerIcon = (google: typeof window.google) =>
    ({
        url: '/assets/marker/markerSelected.svg',
        scaledSize: new google.maps.Size(30, 47),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(15, 47),
    } as google.maps.Icon);

export const ParkingFloorMap: React.FC<ParkingFloorMapProps> = ({
    center,
    parkingSpots,
    onSpotClick,
    polygon,
    onPolygonComplete,
    drawingMode = false,
}) => {
    const [selectedSpot, setSelectedSpot] = useState<ParkingSpot | null>(null);
    console.log('🚀 ~ selectedSpot:', selectedSpot);
    const [markerIcon, setMarkerIcon] = useState<google.maps.Icon>();
    const polygonRef = useRef<{ [key: string]: google.maps.Polygon }>({});
    const listenersRef = useRef<{ [key: string]: google.maps.MapsEventListener[] }>({});

    const handleSpotClick = useCallback(
        (spot: ParkingSpot) => {
            setSelectedSpot(spot);
            onSpotClick?.(spot);
        },
        [onSpotClick]
    );

    const handleMapLoad = useCallback((map: google.maps.Map) => {
        if (map) {
            setMarkerIcon(createMarkerIcon(window.google));
        }
    }, []);

    const handleOnLoadPolygon = useCallback((polygon: google.maps.Polygon) => {
        const polygonId = uuidv4();
        polygonRef.current[polygonId] = polygon;

        listenersRef.current[polygonId] = [
            polygon.getPath().addListener('set_at', () => handleEditPolygon(polygonId)),
            polygon.getPath().addListener('insert_at', () => handleEditPolygon(polygonId)),
            polygon.getPath().addListener('remove_at', () => handleEditPolygon(polygonId)),
        ];
    }, []);

    const handleEditPolygon = useCallback(
        (polygonId: string) => {
            if (!polygonRef.current[polygonId]) return;

            onPolygonComplete?.(polygonRef.current[polygonId]);
        },
        [onPolygonComplete]
    );

    useEffect(() => {
        return () => {
            Object.values(listenersRef.current).forEach((listeners) => {
                listeners.forEach((listener) => {
                    google.maps.event.removeListener(listener);
                });
            });
        };
    }, []);

    return (
        <GoogleMapWrapper
            center={center}
            zoom={15}
            options={{
                mapTypeId: 'roadmap',
                mapTypeControl: true,
            }}
            onLoad={handleMapLoad}
            onPolygonComplete={onPolygonComplete}
            drawingMode={drawingMode}
        >
            <Marker
                key={parkingSpots.id}
                position={parkingSpots.position}
                onClick={() => handleSpotClick(parkingSpots)}
                icon={markerIcon}
            />
            {polygon && (
                <Polygon
                    key={polygon.map((k) => JSON.stringify(k._fakeId)).join(',')}
                    paths={polygon}
                    options={{ ...defaultDrawingManagerOptions.polygonOptions }}
                    onLoad={handleOnLoadPolygon}
                />
            )}
        </GoogleMapWrapper>
    );
};
