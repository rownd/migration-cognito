import React, {  } from 'react';
import { useRownd } from "@rownd/react";

const Status = () => {
    const { is_authenticated, signOut } = useRownd();

    return <div>
        {is_authenticated ? (<button onClick={signOut}>logout</button>): "Please login"}
    </div>
};

export default Status;