import React, { useEffect, useState } from 'react';
import { BasePopup } from '../base/BasePopup';
import FormAddParkingFloor from './FormAddParkingFloor';
import { ModeUpsertFloor } from './ParkingFloorDetail';
import { ParkingSpotResponse } from '../../services/parkingApi';

interface UpsertFloorPopupProps {
    parkingSpaceItem?: ParkingSpotResponse | null;
    open: boolean;
    modeUpsertFloor: ModeUpsertFloor | null;
    onClose: () => void;
    onSubmit: (data: { name: string; buildingId: string | number; description: string }) => void;
}

export const UpsertFloorPopup: React.FC<UpsertFloorPopupProps> = ({
    open,
    onClose,
    onSubmit,
    parkingSpaceItem,
    modeUpsertFloor,
}) => {
    console.log('🚀 ~ modeUpsertFloor:', modeUpsertFloor);
    console.log('🚀 ~ item:', parkingSpaceItem);
    const [name, setName] = useState<string>('');
    console.log('🚀 ~ name - UpsertFloorPopup:', name);
    const [description, setDescription] = useState<string>('');
    console.log('🚀 ~ description - UpsertFloorPopup:', description);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    console.log('🚀 ~ selectedFilePopup:', selectedFile);

    const handleConfirm = () => {
        onSubmit({
            name,
            buildingId: 1,
            description,
        });
    };

    useEffect(() => {
        if (!modeUpsertFloor) return;
        setName(parkingSpaceItem?.name || '');
        setDescription(parkingSpaceItem?.desc || '');
    }, [open, parkingSpaceItem]);

    return (
        <BasePopup
            open={open}
            onClose={() => {
                onClose();
                setName('');
                setDescription('');
            }}
            title={modeUpsertFloor === ModeUpsertFloor.ADD ? 'Add Floor' : 'Edit Floor'}
            onConfirm={handleConfirm}
            maxWidth="md"
            confirmLabel="Save"
        >
            <FormAddParkingFloor
                isCheckPopup
                name={name}
                description={description}
                onChangeName={setName}
                onChangeDescription={setDescription}
                onFileChange={setSelectedFile}
            />
        </BasePopup>
    );
};
