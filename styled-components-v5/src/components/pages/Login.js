import React, { useState, useEfect, useEffect } from 'react';
import { PageLayout, Input, PasswordInput, Button, Spinner } from 'components/common';
import styled from 'styled-components';

const form = styled.form`
    width: 100%;
    max-width: 400px !important;
    background: white;
    border: 1px solid #eee;
    padding: 16px;
    box-sizing: border-box;
    color: white;
    border-radius: 4px;
`;

const LoginPage = styled(PageLayout)`
    max-width: 400px;
`;

let timeOut;

export default function Login() {
    const [formFields, setFormFields] = useState({ username: '', password: '' });
    const [loading, setLoading] = useState(false);


    function handleInputChange(e) {
        e.persist();
        setFormFields(s => ({
            ...s,
            [e.target.name]: e.target.value
        }));
    }


    function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        timeOut = setTimeout(() => {
            setLoading(false)
        }, 2000);
    }

    useEffect(() => {
        return () => {
            if (timeOut) {
                clearTimeout(timeOut);
            }
        }
    }, []);

    return (
        <LoginPage>
            <h1>
                Login
           </h1>
            <form onSubmit={handleSubmit}>
                {loading ? <Spinner /> :
                    <>
                        <Input
                            value={formFields.username}
                            onChange={handleInputChange}
                            name="username"
                            type="text"
                            placeholder="Username"
                        />
                        <PasswordInput
                            value={formFields.password}
                            onChange={handleInputChange}
                            name="password"
                        />
                    </>
                }
                <Button type="submit" disabled={loading}>
                    {loading ? 'Loading...' : 'Login'}
                </Button>
                {!loading &&
                    <>
                        <div className="alt-text">
                            or
                </div>
                        <Button secondary type="button">
                            Register
                </Button>
                    </>
                }
            </form>
        </LoginPage>
    )
}