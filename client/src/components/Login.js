import React, { useState, useContext, useEffect } from 'react';
import { AccountContext } from './Account';
import { useRownd } from "@rownd/react";

const Login = () => {
  
    const [accessToken, setAccessToken] = useState(null);
    const { verifyAccessToken } = useContext(AccountContext);
    const { requestSignIn, getAccessToken } = useRownd();

    useEffect(() => {
        if(!accessToken) return;
        const token = getAccessToken();
        if(verifyAccessToken(token)){
            setAccessToken(token);
        };
    }, [accessToken, getAccessToken, verifyAccessToken]);

    return (
        <div>
            <button onClick={() => requestSignIn()}>Login or Sign Up</button>
        </div>
    );
};

export default Login;