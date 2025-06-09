import { Box, Button, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useMedia from '../../hooks/useMedia';
import { styled as styledTokens } from '../../theme/Tokens';
import { BaseTextField } from '../base/BaseTextField';
import DetailInfoSection from '../base/detail-info-section/DetailInfoSection';
import TextAndBoxBorder from '../base/TextAndBoxBorder';
import { BasePage } from '../layout/BasePage';
import FormAddParkingFloor from './FormAddParkingFloor';

export const AddParking: React.FC = () => {
    const navigate = useNavigate();
    const { isMobileSM } = useMedia();
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [parkingType, setParkingType] = useState<number>(1);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    console.log('🚀 ~ selectedFile:', selectedFile);

    const [formData, setFormData] = useState({
        name: '',
        country: '',
        city: '',
        postCode: '',
        streetNumber: '',
    });

    const handleInputChange = (field: keyof typeof formData) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({
            ...prev,
            [field]: event.target.value,
        }));
    };

    const handleRadioChangeCameraType = (event: React.ChangeEvent<HTMLInputElement>) => {
        setParkingType(Number(event.target.value));
    };

    return (
        <BasePage
            pageId="parking"
            title={'Add Parking'}
            actionButtonText=""
            customBreadcrumbs={[
                {
                    title: (
                        <TextAndBoxBorder
                            title={'Packing Space'}
                            variant="h3"
                            showBorder={!isMobileSM}
                            styledTypography={{
                                fontSize: styledTokens.typography.body1.fontSize,
                                fontWeight: styledTokens.typography.body1.fontWeight,
                                color: styledTokens.colors.text.secondary,
                            }}
                        />
                    ),
                    path: '/',
                },
                { title: 'Add Parking' },
            ]}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <Box sx={{ flex: 1, overflow: 'auto' }}>
                    <Box
                        width={'100%'}
                        padding={2}
                        bgcolor={styledTokens.colors.primary.background}
                        borderRadius={styledTokens.borderRadius.sm}
                    >
                        <Box
                            display="flex"
                            alignItems={{ xs: 'left', md: 'center' }}
                            gap={{ xs: 1, md: 4 }}
                            flexDirection={{ xs: 'column', md: 'row' }}
                        >
                            <Typography sx={{ color: styledTokens.colors.text.primary }}>Select type add:</Typography>
                            <FormControl>
                                <RadioGroup row value={parkingType} onChange={handleRadioChangeCameraType}>
                                    <FormControlLabel
                                        sx={{
                                            '.MuiFormControlLabel-label': {
                                                mt: '3px !important',
                                            },
                                        }}
                                        control={<Radio value={1} />}
                                        label="Outdoor"
                                    />
                                    <FormControlLabel
                                        sx={{
                                            '.MuiFormControlLabel-label': {
                                                mt: '3px !important',
                                            },
                                        }}
                                        control={<Radio value={2} />}
                                        label="Indoor"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Box>
                    </Box>

                    <Grid container spacing={3} mt={1}>
                        <Grid item xs={12} lg={4}>
                            <DetailInfoSection
                                title={
                                    <TextAndBoxBorder
                                        title={'Information'}
                                        styledTypography={{ fontSize: styledTokens.typography.body1.fontSize }}
                                        styledBorder={{ height: 16 }}
                                    />
                                }
                                content={
                                    <Stack spacing={2} p={2}>
                                        <BaseTextField
                                            label="Parking name"
                                            value={formData.name}
                                            onChange={handleInputChange('name')}
                                            required
                                        />
                                        <BaseTextField
                                            label="Post code"
                                            value={formData.postCode}
                                            onChange={handleInputChange('postCode')}
                                            required
                                        />
                                        <BaseTextField
                                            label="Street number"
                                            value={formData.streetNumber}
                                            onChange={handleInputChange('streetNumber')}
                                            required
                                        />
                                    </Stack>
                                }
                            />
                        </Grid>
                        <Grid item xs={12} lg={8}>
                            <DetailInfoSection
                                title={
                                    <TextAndBoxBorder
                                        title={'Floor'}
                                        styledTypography={{ fontSize: styledTokens.typography.body1.fontSize }}
                                        styledBorder={{ height: 16 }}
                                    />
                                }
                                content={
                                    <FormAddParkingFloor
                                        name={name}
                                        description={description}
                                        onChangeName={setName}
                                        onChangeDescription={setDescription}
                                        onFileChange={setSelectedFile}
                                    />
                                }
                            />
                        </Grid>
                    </Grid>
                </Box>

                <Box bgcolor={styledTokens.colors.primary.main} pt={1} width={'100%'}>
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Button
                            sx={{ minWidth: '140px' }}
                            variant="contained"
                            color="cancel"
                            onClick={() => navigate(-1)}
                        >
                            Cancel
                        </Button>
                        <Button
                            sx={{ minWidth: '140px' }}
                            variant="contained"
                            onClick={() => {
                                console.log(formData);
                            }}
                        >
                            Save
                        </Button>
                    </Stack>
                </Box>
            </Box>
        </BasePage>
    );
};
