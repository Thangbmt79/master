import { Fade, IconButton, Tooltip, TooltipProps } from '@mui/material';
import React, { ReactNode } from 'react';
import { styled } from '../../../theme/Tokens';

export type ToolTipProps = {
    icon: ReactNode;
    tooltipTitle?: ReactNode;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    placement?: TooltipProps['placement'];
};

export default function TooltipIconButton(props: ToolTipProps) {
    return (
        <Tooltip
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 400 }}
            title={props.tooltipTitle ?? 'label'}
            placement={props.placement ?? 'top'}
            onClick={props.onClick}
        >
            <IconButton
                sx={{
                    '&.MuiIconButton-root': {
                        background: styled.colors.neutral['02'],
                        boxShadow: `0 0 0 4px ${styled.colors.neutral['03']}`,
                    },
                    width: 26,
                    height: 26,
                }}
                size="small"
            >
                {props.icon}
            </IconButton>
        </Tooltip>
    );
}
