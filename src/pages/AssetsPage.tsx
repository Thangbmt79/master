import { BasePage } from '../components/layout/BasePage';

export const AssetsPage = () => {
    return (
        <BasePage
            pageId="assets"
            title="Assets"
            actionButtonText="Add Asset"
        >
            <div style={{ padding: '20px', color: '#fff' }}>
                Content area - Add your assets management components here
            </div>
        </BasePage>
    );
}; 