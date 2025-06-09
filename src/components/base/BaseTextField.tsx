import React from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

export type BaseTextFieldProps = TextFieldProps;

const RedAsterisk = styled('span')(({ theme }) => ({
    color: theme.palette.error.main,
    marginLeft: 2,
}));

export const BaseTextField: React.FC<BaseTextFieldProps> = ({ required = false, label, ...rest }) => (
    <TextField
        {...rest}
        required={false}
        variant={'filled'}
        label={
            required && label ? (
                <>
                    {label}
                    <RedAsterisk>*</RedAsterisk>
                </>
            ) : (
                label
            )
        }
    />
);
