import React, {  } from 'react';
import { useRownd } from "@rownd/react";

const Status = () => {
   
    const { logout, is_authenticated } = useRownd();
    return <div>
        {is_authenticated ? (<button onClick={logout}>logout</button>): "Please login"}
    </div>
};

export default Status;