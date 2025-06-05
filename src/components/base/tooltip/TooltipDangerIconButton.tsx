import { Fade, IconButton, styled, Tooltip, tooltipClasses, TooltipProps } from '@mui/material';
import { styled as colors } from '../../../theme/Tokens';
import { ToolTipProps } from './TooltipIconButton';

export default function TooltipDangerIconButton(props: ToolTipProps) {
    return (
        <DangerTooltip title={props.tooltipTitle ?? 'label'} placement="top" onClick={props.onClick}>
            <IconButton
                sx={{
                    '&.MuiIconButton-root': {
                        background: colors.colors.neutral['02'],
                        boxShadow: `0 0 0 4px ${colors.colors.neutral['03']}`,
                    },
                    width: 26,
                    height: 26,
                }}
                size="small"
            >
                {props.icon}
            </IconButton>
        </DangerTooltip>
    );
}

export const DangerTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 400 }} {...props} classes={{ popper: className }} />
))(({}) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: colors.colors.danger,
        color: colors.colors.white,
    },
}));
