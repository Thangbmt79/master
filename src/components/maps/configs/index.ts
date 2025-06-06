import { GoogleMapProps, Libraries } from '@react-google-maps/api';

const GOOGLE_MAPS_API_KEY = 'AIzaSyDmQOiN-hvxO8DaF_GKuXXZvrJCUNVzeAI';

const libraries: Libraries = ['places', 'geometry', 'drawing', 'visualization', 'marker'];
interface MapState {
    center: google.maps.LatLngLiteral;
    zoom: number;
}

interface GoogleMapWrapperProps extends Omit<GoogleMapProps, 'mapContainerStyle'> {
    height?: string | number;
    onPolygonComplete?: (polygon: google.maps.Polygon) => void;
    drawingMode?: boolean;
    onMapChange?: (state: MapState) => void;
    preserveViewport?: boolean;
}

interface ParkingSpot {
    id: string;
    position: google.maps.LatLngLiteral;
    isOccupied: boolean;
    label?: string;
}

interface PolygonPoint extends google.maps.LatLngLiteral {
    _fakeId: string;
}

interface ParkingFloorMapProps {
    drawingMode: boolean;
    parkingSpots: ParkingSpot;
    center: google.maps.LatLngLiteral;
    polygon?: PolygonPoint[];
    onSpotClick?: (spot: ParkingSpot) => void;
    onPolygonDelete?: () => void;
    onPolygonComplete: (polygon: google.maps.Polygon) => void;
}

const defaultDrawingManagerOptions: google.maps.drawing.DrawingManagerOptions = {
    drawingControl: false,
    polygonOptions: {
        fillColor: 'rgba(76, 175, 80, 0.5)',
        strokeColor: '#4CAF50',
        fillOpacity: 0.5,
        strokeWeight: 2,
        clickable: true,
        editable: true,
        zIndex: 1100,
    },
};

export {
    GOOGLE_MAPS_API_KEY,
    libraries,
    defaultDrawingManagerOptions,
    type GoogleMapWrapperProps,
    type ParkingSpot,
    type PolygonPoint,
    type ParkingFloorMapProps,
    type MapState,
};
