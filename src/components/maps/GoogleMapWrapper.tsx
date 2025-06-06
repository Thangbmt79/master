import { Box } from '@mui/material';
import { DrawingManager, GoogleMap, useLoadScript } from '@react-google-maps/api';
import React, { useCallback, useMemo, useRef } from 'react';
import { styled as styledTokens } from '../../theme/Tokens';
import { defaultDrawingManagerOptions, GOOGLE_MAPS_API_KEY, GoogleMapWrapperProps, libraries } from './configs';

export const GoogleMapWrapper: React.FC<GoogleMapWrapperProps> = ({
    children,
    height = '400px',
    center,
    zoom = 15,
    drawingMode = false,
    preserveViewport = true,
    onLoad,
    onPolygonComplete,
    onMapChange,
    ...props
}) => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: GOOGLE_MAPS_API_KEY,
        libraries: libraries,
        language: 'en',
    });

    const mapRef = useRef<google.maps.Map | null>(null);
    const lastValidCenter = useRef(center);
    const lastValidZoom = useRef(zoom);

    const mapContainerStyle = useMemo(
        () => ({
            width: '100%',
            height,
        }),
        [height]
    );

    const handleLoad = useCallback(
        (map: google.maps.Map) => {
            mapRef.current = map;
            const centerToUse = preserveViewport ? lastValidCenter.current : center;
            map.setCenter(centerToUse || { lat: 0, lng: 0 });
            map.setZoom(preserveViewport ? lastValidZoom.current : zoom);
            onLoad?.(map);
        },
        [center, zoom, onLoad, preserveViewport]
    );

    if (loadError) {
        return (
            <Box
                sx={{
                    width: '100%',
                    height: '400px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: styledTokens.colors.background.default,
                    color: styledTokens.colors.text.primary,
                    borderRadius: '8px',
                }}
            >
                Error loading maps
            </Box>
        );
    }

    if (!isLoaded) {
        return (
            <Box
                sx={{
                    width: '100%',
                    height: '400px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: styledTokens.colors.background.default,
                    color: styledTokens.colors.text.primary,
                    borderRadius: '8px',
                }}
            >
                Loading maps...
            </Box>
        );
    }

    return (
        <Box
            sx={{
                width: '100%',
                height,
                borderRadius: '8px',
                overflow: 'hidden',
            }}
        >
            <GoogleMap
                center={preserveViewport ? lastValidCenter.current : center}
                zoom={preserveViewport ? lastValidZoom.current : zoom}
                mapContainerStyle={mapContainerStyle}
                onLoad={handleLoad}
                options={{
                    zoomControl: true,
                    streetViewControl: false,
                    mapTypeControl: true,
                    styles: [
                        {
                            featureType: 'all',
                            elementType: 'labels.text.fill',
                            stylers: [{ color: styledTokens.colors.text.primary }],
                        },
                        {
                            featureType: 'all',
                            elementType: 'geometry',
                            stylers: [{ color: styledTokens.colors.background.default }],
                        },
                    ],
                }}
                {...props}
            >
                {children}
                {drawingMode && (
                    <DrawingManager
                        options={{
                            ...defaultDrawingManagerOptions,
                            drawingMode: google.maps.drawing.OverlayType.POLYGON,
                        }}
                        onPolygonComplete={onPolygonComplete}
                    />
                )}
            </GoogleMap>
        </Box>
    );
};
