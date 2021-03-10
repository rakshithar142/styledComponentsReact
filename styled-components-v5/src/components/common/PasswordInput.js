import React, { useState } from 'react';
import styled from 'styled-components';
import { Input } from './Input';


const PasswordInputWrapper = styled.div`
    display: flex;
    ~div{
        margin-bottom: 8px;
        text-align: center;
        margin: 4px 0;
    }
`;

const ToggleButton = styled.div`
    height: 25px;
    border: 2px solid #ccc;
    box-sizing: border-box;
    font-size: 0.7em;
    display: flex;
    padding: 4px;
    border-left: 0;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background: white;
    font-weight: bolder;
    cursor: pointer;
    user-select: none;
`;

const PasswordInputStyled = styled(Input).attrs(() => ({
    type: 'password',
    placeholder: 'Password',
}))`
    border-top-right-radius:0;
    border-bottom-right-radius: 0;
    font-size: 0.7em;
`;

export function PasswordInput(props) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <PasswordInputWrapper>
                <PasswordInputStyled {...props} />
                <ToggleButton onClick={() => setShowPassword(s => !s)}>
                    {showPassword ? 'Hide' : 'Show'}
                </ToggleButton>
            </PasswordInputWrapper>
            <div>
                {showPassword ? props.value : ''}
            </div>
        </>
    )
}