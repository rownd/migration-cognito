import React from 'react';
import { useRownd } from "@rownd/react";
const Login = () => {

    const { requestSignIn } = useRownd();

    const onSubmit = (event) => {
        event.preventDefault();
        requestSignIn({auto_sign_in: true});
    
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <button type="submit">Sign in or sign up </button>
            </form>     
        </div>
    );
};

export default Login;