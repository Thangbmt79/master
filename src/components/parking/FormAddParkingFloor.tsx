import { Box, Button, Stack, Typography } from '@mui/material';
import { styled } from '../../theme/Tokens';
import { BaseTextField } from '../base/BaseTextField';
import DetailInfoSection from '../base/detail-info-section/DetailInfoSection';
import FloorOutDoor from './FloorOutDoor';
import { useRef, useState } from 'react';

export default function FormAddParkingFloor({
    isCheckPopup = false,
    name,
    description,
    onChangeName,
    onChangeDescription,
    onFileChange,
}: {
    isCheckPopup?: boolean;
    name: string;
    description: string;
    onChangeName: (name: string) => void;
    onChangeDescription: (description: string) => void;
    onFileChange: (file: File) => void;
}) {
    console.log('name', name);
    console.log('description', description);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        const validTypes = ['image/svg+xml', 'image/png', 'image/jpeg', 'image/gif'];
        if (!validTypes.includes(file.type)) {
            alert('Please upload a valid image file (SVG, PNG, JPG, or GIF)');
            return;
        }

        if (file.size > 10 * 1024 * 1024) {
            alert('File size must be less than 10MB');
            return;
        }

        onFileChange(file);
        const imageUrl = URL.createObjectURL(file);
        setSelectedImage(imageUrl);
    };

    const handleUploadClick = () => {
        fileInputRef.current?.click();
    };
    console.log('🚀 ~ handleUploadClick ~ fileInputRef:', fileInputRef);

    return (
        <Stack spacing={2} p={2}>
            <BaseTextField
                label="Floor Name"
                required
                value={name}
                onChange={(e) => onChangeName(e.target.value)}
                placeholder="Enter floor name"
                sx={
                    isCheckPopup
                        ? {
                              '& .MuiInputBase-input': {
                                  paddingLeft: '30px',
                              },
                          }
                        : {}
                }
            />

            <BaseTextField
                label="Description"
                required
                value={description}
                onChange={(e) => onChangeDescription(e.target.value)}
                placeholder="Enter floor description"
                multiline
                rows={3}
                variant="filled"
                sx={
                    !isCheckPopup
                        ? {
                              '& .MuiInputBase-input': {
                                  paddingLeft: 0,
                              },
                          }
                        : {}
                }
            />

            <DetailInfoSection
                title={
                    <Box>
                        <Stack spacing={'2px'}>
                            <Typography variant="body1" color={styled.colors.text.primary}>
                                Import drawing
                            </Typography>
                            <Typography variant="body2" color={styled.colors.text.secondary}>
                                SVG, PNG, JPG, GIF | 10MB max.
                            </Typography>
                        </Stack>
                    </Box>
                }
                buttonAction={
                    <>
                        <input
                            type="file"
                            accept=".svg,.png,.jpg,.jpeg,.gif"
                            style={{ display: 'none' }}
                            ref={fileInputRef}
                            onChange={handleFileUpload}
                        />
                        <Button size="small" variant="outlined" onClick={handleUploadClick}>
                            Upload
                        </Button>
                    </>
                }
                content={
                    <Box p={2}>
                        {selectedImage ? (
                            <FloorOutDoor imageUrl={selectedImage || ''} />
                        ) : (
                            <Typography
                                variant="body2"
                                justifyContent={'center'}
                                alignContent={'center'}
                                textAlign={'center'}
                                color={styled.colors.text.secondary}
                            >
                                No image selected
                            </Typography>
                        )}
                    </Box>
                }
            />
        </Stack>
    );
}
