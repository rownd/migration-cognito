import React, { useState, useContext, useEffect } from 'react';
import { AccountContext } from './Account';
import { useRownd } from "@rownd/react";

const Status = () => {
    // const [status, setStatus] = useState(false);

    // const { getSession, logout } = useContext(AccountContext);

    const { is_authenticated, signOut } = useRownd();

    // useEffect(() => {
    //     getSession()
    //     .then((session) => {
    //         console.log('Session: ', session);
    //         setStatus(true);
    //     })
    //     .catch((err) => {
    //         console.log('Failed to get session', err);
    //     });
    // }, []);

    return <div>
        {is_authenticated ? (<button onClick={signOut}>logout</button>): "Please login"}
    </div>
};

export default Status;