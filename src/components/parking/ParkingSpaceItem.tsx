import { Box, Stack, Typography } from '@mui/material';
import DeleteIcon from '../../assets/layout-icon/DeleteIcon';
import EditIcon from '../../assets/layout-icon/EditIcon';
import { styled } from '../../theme/Tokens';
import TooltipDangerIconButton from '../base/tooltip/TooltipDangerIconButton';
import TooltipIconButton from '../base/tooltip/TooltipIconButton';
import { Link } from 'react-router-dom';

export interface ParkingSpaceItemProps {
    item?: any;
    onEdit?: () => void;
    onDelete?: () => void;
}

export const ParkingSpaceItem: React.FC<ParkingSpaceItemProps> = ({ item, onEdit, onDelete }) => (
    <Box
        sx={{
            bgcolor: styled.colors.background.paper,
            border: '1px solid',
            borderColor: onEdit || onDelete ? styled.colors.neutral['03'] : styled.colors.white,
            borderRadius: styled.borderRadius.md,
            p: 2,
            mb: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
        }}
    >
        {onEdit || onDelete ? (
            <>
                <Box>
                    <Link to={`/parking/${item.id}`} style={{ textDecoration: 'none' }}>
                        <Typography variant="h4" sx={{ color: styled.colors.text.primary, mb: 1 }}>
                            {item.name}
                        </Typography>
                    </Link>

                    <Typography variant="body2" sx={{ color: styled.colors.text.secondary }}>
                        Location: {item.location}
                    </Typography>
                    <Typography variant="body2" sx={{ color: styled.colors.text.secondary }}>
                        Type: {item.type}
                        {item.floor && <> &nbsp; | &nbsp; Floor: {item.floor}</>}
                    </Typography>
                </Box>
                <Stack direction="row" spacing={3}>
                    <TooltipIconButton icon={<EditIcon />} tooltipTitle="Edit" onClick={onEdit} />
                    <TooltipDangerIconButton icon={<DeleteIcon />} tooltipTitle="Delete" onClick={onDelete} />
                </Stack>
            </>
        ) : (
            <Box>
                <Link to={`/parking/${item.id}`} style={{ textDecoration: 'none' }}>
                    <Typography variant="h4" sx={{ color: styled.colors.text.primary, mb: 1 }}>
                        {item.name}
                    </Typography>
                </Link>

                <Typography variant="body2" sx={{ color: styled.colors.text.secondary }}>
                    {item.desc}
                </Typography>
            </Box>
        )}
    </Box>
);
