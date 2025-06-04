import { BasePage } from '../components/layout/BasePage';

export const ParkingSpacePage = () => {
    return (
        <BasePage
            pageId="parking"
            title="Parking Space"
            actionButtonText="Add Parking"
        >
            <div style={{ padding: '20px', color: '#fff' }}>
                Content area - Add your parking space management components here
            </div>
        </BasePage>
    );
};
