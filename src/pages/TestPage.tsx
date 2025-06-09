import {
    Autocomplete,
    Box,
    Button,
    Pagination as MuiPagination,
    Stack,
    Tab,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tabs,
    Typography,
} from '@mui/material';
import React from 'react';
import { BaseTextField } from '../components/base/BaseTextField';
import { BasePage } from '../components/layout/BasePage';
import { styled } from '../theme/Tokens';
import { BaseAutoComplete, mockFetchProducts, BaseAutoCompleteOption } from '../components/base/BaseAutoComplete';

export enum CaptureInfoPostType {
    MQTT,
    HTTP,
}

const postTypeOptions = [
    { id: 1, label: 'MQTT' },
    { id: 2, label: 'HTTP' },
];

export const TestPage = () => {
    const [tabValue, setTabValue] = React.useState(0);
    const [postType, setPostType] = React.useState<{ id: number; label: string } | null>(postTypeOptions[0]);

    // Demo state for BaseAutoComplete
    const [apiValue, setApiValue] = React.useState<BaseAutoCompleteOption | null>(null);
    console.log('🚀 ~ ParkingSpacePage ~ apiValue:', apiValue);
    const [staticValue, setStaticValue] = React.useState<BaseAutoCompleteOption | null>(null);
    const staticOptions = [
        { id: 1, name: 'Option One' },
        { id: 2, name: 'Option Two' },
        { id: 3, name: 'Option Three' },
    ];

    return (
        <BasePage pageId="test" title="Test" actionButtonText="Add Test">
            <Box style={{ padding: '20px', color: styled.colors.white }}>
                Content area - Add your test management components here
            </Box>

            <Stack direction="row" spacing={2} mb={2} justifyContent="space-between" width={'100%'}>
                <Box>
                    <Tabs
                        value={tabValue}
                        onChange={(_, newValue) => setTabValue(newValue)}
                        aria-label="test tabs"
                        variant="fullWidth"
                    >
                        <Tab label="Tab 1" />
                        <Tab label="Tab 2" />
                        <Tab label="Tab 3" />
                    </Tabs>
                </Box>

                <Stack direction="row" spacing={1} justifyContent="center">
                    <Button variant="contained">Contained</Button>

                    <Button variant="outlined">Outlined</Button>

                    <Button variant="text">Text</Button>

                    <Button variant="contained" color="cancel">
                        Cancel
                    </Button>
                </Stack>
            </Stack>

            <Stack direction="column" spacing={2} justifyContent="center" alignItems="center">
                <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" width={'100%'}>
                    <BaseTextField
                        required
                        sx={{ width: '100%' }}
                        label="Format"
                        placeholder="Format"
                        InputLabelProps={{ shrink: true }}
                    />
                    <Autocomplete
                        options={postTypeOptions}
                        getOptionLabel={(option) => option.label}
                        renderInput={(params) => (
                            <BaseTextField {...params} required label="Post type" placeholder="Select post type" />
                        )}
                        value={postType}
                        onChange={(_, newValue) => {
                            setPostType(newValue);
                            console.log(newValue);
                        }}
                        clearIcon={true}
                        sx={{ width: '100%' }}
                    />
                </Stack>

                <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" width={'100%'}>
                    {/* --- BaseAutoComplete API demo --- */}
                    <Box width={'100%'}>
                        <BaseAutoComplete
                            value={apiValue}
                            onChange={setApiValue}
                            fetchOptions={mockFetchProducts}
                            label="Product (API)"
                            placeholder="Type to search products..."
                            required
                            pageSize={10}
                        />
                        <Typography variant="caption" color="text.secondary">
                            Selected: {apiValue ? apiValue.name : 'None'}
                        </Typography>
                    </Box>
                    {/* --- BaseAutoComplete static demo --- */}
                    <Box width={'100%'}>
                        <BaseAutoComplete
                            value={staticValue}
                            onChange={setStaticValue}
                            options={staticOptions}
                            label="Static Options"
                            placeholder="Type to filter..."
                            required
                        />
                        <Typography variant="caption" color="text.secondary">
                            Selected: {staticValue ? staticValue.name : 'None'}
                        </Typography>
                    </Box>
                </Stack>

                <TableContainer component={Box}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Parking Space</TableCell>
                                <TableCell>Parking Space</TableCell>
                                <TableCell>Parking Space</TableCell>
                                <TableCell>Parking Space</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>Parking Space</TableCell>
                                <TableCell>Parking Space</TableCell>
                                <TableCell>Parking Space</TableCell>
                                <TableCell>Parking Space</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

                <MuiPagination
                    count={10}
                    page={9}
                    onChange={(_, page) => console.log(page)}
                    variant="outlined"
                    shape="rounded"
                />
            </Stack>

            <Stack direction="row" spacing={2} mb={2} justifyContent="space-between" width={'100%'}>
                <Box>
                    <Tabs
                        value={tabValue}
                        onChange={(_, newValue) => setTabValue(newValue)}
                        aria-label="test tabs"
                        variant="fullWidth"
                    >
                        <Tab label="Tab 1" />
                        <Tab label="Tab 2" />
                        <Tab label="Tab 3" />
                    </Tabs>
                </Box>

                <Stack direction="row" spacing={1} justifyContent="center">
                    <Button variant="contained">Contained</Button>

                    <Button variant="outlined">Outlined</Button>

                    <Button variant="text">Text</Button>

                    <Button variant="contained" color="cancel">
                        Cancel
                    </Button>
                </Stack>
            </Stack>

            <Stack direction="column" spacing={2} justifyContent="center" alignItems="center">
                <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" width={'100%'}>
                    <BaseTextField
                        required
                        sx={{ width: '100%' }}
                        label="Format"
                        variant="outlined"
                        placeholder="Format"
                        InputLabelProps={{ shrink: true }}
                    />
                    <Autocomplete
                        options={postTypeOptions}
                        getOptionLabel={(option) => option.label}
                        renderInput={(params) => (
                            <BaseTextField {...params} required label="Post type" placeholder="Select post type" />
                        )}
                        value={postType}
                        onChange={(_, newValue) => {
                            setPostType(newValue);
                            console.log(newValue);
                        }}
                        clearIcon={true}
                        sx={{ width: '100%' }}
                    />
                </Stack>

                <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" width={'100%'}>
                    {/* --- BaseAutoComplete API demo --- */}
                    <Box width={'100%'}>
                        <BaseAutoComplete
                            value={apiValue}
                            onChange={setApiValue}
                            fetchOptions={mockFetchProducts}
                            label="Product (API)"
                            placeholder="Type to search products..."
                            required
                            pageSize={10}
                        />
                        <Typography variant="caption" color="text.secondary">
                            Selected: {apiValue ? apiValue.name : 'None'}
                        </Typography>
                    </Box>
                    {/* --- BaseAutoComplete static demo --- */}
                    <Box width={'100%'}>
                        <BaseAutoComplete
                            value={staticValue}
                            onChange={setStaticValue}
                            options={staticOptions}
                            label="Static Options"
                            placeholder="Type to filter..."
                            required
                        />
                        <Typography variant="caption" color="text.secondary">
                            Selected: {staticValue ? staticValue.name : 'None'}
                        </Typography>
                    </Box>
                </Stack>

                <TableContainer component={Box}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Parking Space</TableCell>
                                <TableCell>Parking Space</TableCell>
                                <TableCell>Parking Space</TableCell>
                                <TableCell>Parking Space</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>Parking Space</TableCell>
                                <TableCell>Parking Space</TableCell>
                                <TableCell>Parking Space</TableCell>
                                <TableCell>Parking Space</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

                <MuiPagination
                    count={10}
                    page={9}
                    onChange={(_, page) => console.log(page)}
                    variant="outlined"
                    shape="rounded"
                />
            </Stack>
        </BasePage>
    );
};
