import { BasePage } from '../components/layout/BasePage';

export const CarCheckPage = () => {
    return (
        <BasePage
            pageId="car-check"
            title="Car Check In/Out"
            actionButtonText="New Check In/Out"
        >
            <div style={{ padding: '20px', color: '#fff' }}>
                Content area - Add your car check in/out management components here
            </div>
        </BasePage>
    );
}; 