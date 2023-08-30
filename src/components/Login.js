import React, { useState } from 'react';
import { useRownd } from "@rownd/react";
const Login = () => {
    const [email, setEmail] = useState('');
    const { requestSignIn } = useRownd();

    const onSubmit = (event) => {
        event.preventDefault();
        requestSignIn({auto_sign_in: true, identifier: email});
    
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor='email'>Email </label>
                <input value = {email} onChange= {(event) => setEmail(event.target.value)} />
                <button type="submit">Login </button>
            </form>     
        </div>
    );
};

export default Login;