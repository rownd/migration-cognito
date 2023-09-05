import React, { useState, useContext, useEffect } from 'react';
import { AccountContext } from './Account';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [accessToken, setAccessToken] = useState(null);
    const { authenticate, verifyAccessToken } = useContext(AccountContext);

    const onSubmit = (event) => {
        event.preventDefault();

        authenticate(email, password)
        .then((data) => {
            console.log('Logged in!', data);
            setAccessToken(data.accessToken);
        })
        .catch((err) => {
            console.error('Failed to login!', err);
        });
    };

    useEffect(() => {
        if(!accessToken) return;
        verifyAccessToken(accessToken.jwtToken);
    }, [accessToken, verifyAccessToken]);

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor='email'>Email </label>
                <input value = {email} onChange= {(event) => setEmail(event.target.value)} />
                <label htmlFor='password'>Password </label>
                <input value = {password} onChange = {(event) => setPassword(event.target.value)} />
                <button type="submit">Login </button>
            </form>     
        </div>
    );
};

export default Login;