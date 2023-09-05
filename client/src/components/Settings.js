import React, { useState, useContext, useEffect } from 'react';
import { AccountContext } from './Account';

const Settings = () => {

    const { getSession } = useContext(AccountContext);
    
    const [loggedIn, setLoggedIn] = useState(false);
    const [userData, setUserData] = useState({});

    useEffect(() => {
        getSession().then(async (session) => {
            setLoggedIn(true);
            const attributes = await new Promise((resolve, reject) => {
                session.user.getUserAttributes((err, attributes) => {
                    if(err){
                        reject(err);
                    }else{
                        const results = {};
                        for(let attribute of attributes){
                            const { Name, Value } = attribute;
                            results[Name] = Value;
                        }
                        resolve(results);
                    }
                });
            });
            setUserData(attributes);
        }).catch((err) => {
            console.log('Failed to get session', err);
        });
    }, []);

    

    return (
            <div>{ loggedIn ? (<><p>Settings</p></>
            ): ""}</div>
    
    );
};

export default Settings;