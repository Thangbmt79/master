import { Divider, Stack, Typography } from '@mui/material';
import { ReactNode } from 'react';
import { styled } from '../../../theme/Tokens';

export default function DetailInfoSection(props: {
    icon?: JSX.Element;
    title: ReactNode;
    content: ReactNode;
    action?: ReactNode;
}) {
    return (
        <Stack
            direction={'column'}
            width={'100%'}
            border={`1px solid ${styled.colors.neutral['02']}`}
            borderRadius={'4px'}
        >
            <Stack
                direction={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                gap={1}
                sx={{
                    borderRadius: '4px 4px 0px 0px',
                    padding: '12px 16px',
                    position: 'relative',
                }}
            >
                <Stack direction={'row'} spacing={2} alignItems={'center'}>
                    {props.icon && props.icon}
                    <Typography variant="h5" mt={'2px'}>
                        {props.title}
                    </Typography>
                </Stack>
                {props.action && props.action}
            </Stack>

            <Divider
                orientation="horizontal"
                sx={{
                    borderBottomWidth: 1,
                    borderColor: styled.colors.neutral['02'],
                    mx: 2,
                }}
            />

            {props.content}
        </Stack>
    );
}
