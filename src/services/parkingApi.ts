import axios from 'axios';

export const API_KEY = '1ab1cd0d0ba3412b98e7aae1d53e3ffd';
export const BASE_URL = 'https://api.opencagedata.com/geocode/v1';

export interface ParkingSpotResponse {
    id: string;
    position: {
        lat: number;
        lng: number;
    };
    label: string;
    name: string;
    desc: string;
}

export interface ParkingApiResponse {
    data: ParkingSpotResponse[];
    totalPages: number;
    hasMore: boolean;
}

export async function fetchParkingSpots({
    search,
    page,
    pageSize,
}: {
    search: string;
    page: number;
    pageSize: number;
}): Promise<{
    data: ParkingSpotResponse[];
    hasMore: boolean;
}> {
    const url = `${BASE_URL}/json`;
    const res = await axios.get(url, {
        params: {
            q: search || 'hotel',
            key: API_KEY,
            limit: pageSize,
            offset: (page - 1) * pageSize,
            pretty: 1,
        },
    });

    const data = res.data;
    const items = (data.results || []).map((result: any, index: number) => ({
        id: `${result.annotations.geohash}`,
        position: {
            lat: result.geometry.lat,
            lng: result.geometry.lng,
        },
        label: `P${index + 1}`,
        name: result.formatted,
        desc: result.formatted,
    }));

    return {
        data: items,
        hasMore: (data.total_results || 0) > page * pageSize,
    };
}
