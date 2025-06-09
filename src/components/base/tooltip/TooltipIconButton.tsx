import { Fade, IconButton, Tooltip, TooltipProps } from '@mui/material';
import React, { ReactNode } from 'react';
import { styled } from '../../../theme/Tokens';
import useMedia from '../../../hooks/useMedia';

export type ToolTipProps = {
    icon: ReactNode;
    tooltipTitle?: ReactNode;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    placement?: TooltipProps['placement'];
};

export default function TooltipIconButton(props: ToolTipProps) {
    const { isMobileSM } = useMedia();

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
                    width: isMobileSM ? 24 : 26,
                    height: isMobileSM ? 24 : 26,
                }}
                size="small"
            >
                {props.icon}
            </IconButton>
        </Tooltip>
    );
}
