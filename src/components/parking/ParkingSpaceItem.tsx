import { Box, Stack, Typography } from '@mui/material';
import DeleteIcon from '../../assets/layout-icon/DeleteIcon';
import EditIcon from '../../assets/layout-icon/EditIcon';
import { styled } from '../../theme/Tokens';
import TooltipDangerIconButton from '../base/tooltip/TooltipDangerIconButton';
import TooltipIconButton from '../base/tooltip/TooltipIconButton';
import { Link } from 'react-router-dom';
import useMedia from '../../hooks/useMedia';

export interface ParkingSpaceItemProps {
    item: any;
    onEdit?: () => void;
    onDelete?: () => void;
}

export const ParkingSpaceItem: React.FC<ParkingSpaceItemProps> = ({ item, onEdit, onDelete }) => {
    const { isMobileSM } = useMedia();

    return (
        <Box
            sx={{
                bgcolor: styled.colors.background.paper,
                border: '1px solid',
                borderColor: onEdit || onDelete ? styled.colors.neutral['03'] : styled.colors.white,
                borderRadius: styled.borderRadius.md,
                p: isMobileSM ? 1 : 2,
                mb: isMobileSM ? 1 : 2,
            }}
        >
            <Box width={'100%'}>
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <Link to={`/parking/${item.id}`} style={{ textDecoration: 'none' }}>
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
