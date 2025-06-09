import { Box, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import DeleteIcon from '../../assets/layout-icon/DeleteIcon';
import EditIcon from '../../assets/layout-icon/EditIcon';
import useMedia from '../../hooks/useMedia';
import { ParkingSpotResponse } from '../../services/parkingApi';
import { styled } from '../../theme/Tokens';
import TooltipDangerIconButton from '../base/tooltip/TooltipDangerIconButton';
import TooltipIconButton from '../base/tooltip/TooltipIconButton';

export interface ParkingSpaceItemProps {
    item: any;
    onEdit?: () => void;
    onDelete?: () => void;
    onSelect?: (item: ParkingSpotResponse | null) => void;
    selectedParkingSpace?: ParkingSpotResponse | null;
}

export const ParkingSpaceItem: React.FC<ParkingSpaceItemProps> = ({
    item,
    selectedParkingSpace,
    onEdit,
    onDelete,
    onSelect,
}) => {
    const { isMobileSM } = useMedia();

    const handleClickItem = () => {
        onSelect?.(item);
    };

    return (
        <Box
            sx={{
                bgcolor: styled.colors.background.paper,
                border: '1px solid',
                borderColor: item.id === selectedParkingSpace?.id ? styled.colors.success : styled.colors.neutral['03'],
                borderRadius: styled.borderRadius.md,
                p: isMobileSM ? 1 : 2,
                mb: isMobileSM ? 1 : 2,
                cursor: 'pointer',
            }}
            onClick={() => {
                if (selectedParkingSpace) handleClickItem();
            }}
        >
            <Box width={'100%'}>
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <Link
                        to={`/parking/${item.id}`}
                        style={{ textDecoration: 'none' }}
                        onClick={(e) => {
                            if (selectedParkingSpace) e.preventDefault();
                        }}
                    >
                        <Typography variant="h4" sx={{ color: styled.colors.text.primary, mb: 1, mr: '4px' }}>
                            {item.name}
                        </Typography>
                    </Link>
                    <Stack direction={'row'} spacing={isMobileSM ? '12px' : 3}>
                        <TooltipIconButton icon={<EditIcon />} tooltipTitle="Edit" onClick={onEdit} />
                        <TooltipDangerIconButton icon={<DeleteIcon />} tooltipTitle="Delete" onClick={onDelete} />
                    </Stack>
                </Stack>

                {item.desc && (
                    <Typography variant="body2" sx={{ color: styled.colors.text.secondary }}>
                        {item.desc}
                    </Typography>
                )}

                {!item.desc && (
                    <>
                        <Typography variant="body2" sx={{ color: styled.colors.text.secondary }}>
                            Location: {item.location}
                        </Typography>
                        {isMobileSM ? (
                            <Stack direction={'column'} spacing={item.floor ? 0 : 1}>
                                <Typography variant="body2" sx={{ color: styled.colors.text.secondary }}>
                                    Type: {item.type}
                                </Typography>
                                {item.floor && (
                                    <Typography variant="body2" sx={{ color: styled.colors.text.secondary }}>
                                        Floor: {item.floor}
                                    </Typography>
                                )}
                            </Stack>
                        ) : (
                            <Typography variant="body2" sx={{ color: styled.colors.text.secondary }}>
                                Type: {item.type}
                                {item.floor && <> &nbsp; | &nbsp; Floor: {item.floor}</>}
                            </Typography>
                        )}
                    </>
                )}
            </Box>
        </Box>
    );
};
