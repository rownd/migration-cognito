import React, { createContext } from 'react';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import Pool from '../UserPool';

const AccountContext = createContext();

const Account = (props) => {

    const getSession = async () => {
        return await new Promise((resolve, reject) => {
            const user = Pool.getCurrentUser();
            
            if (user) {
                user.getSession( async (err, session) => {
                    if (err) {
                        reject();
                    } else {
                        resolve(session);
                    }
                });

            } else {
                reject();
            }
        });
    };

    const authenticate = async (Username, Password) => {

        return await new Promise((resolve, reject) => {
             
            const user = new CognitoUser({ Username, Pool });
        
            const authDetails = new AuthenticationDetails({
                Username, 
                Password,
            });

            user.authenticateUser(authDetails, {
                onSuccess: (data) => {
                    console.log('onSuccess: ', data);
                    resolve(data);
                },
                onFailure: (err) => {
                    console.error('onFailure: ', err);
                    reject();
                },
                newPasswordRequired: (data) => {
                    console.log('newPasswordRequired: ', data);
                    resolve(data); 
                }
            });
        });
        
    }

    const logout = () => {
        const user = Pool.getCurrentUser();
        if (user) {
            user.signOut();
        }
    };

    return ( <div className="App-header">
            <AccountContext.Provider value={{ authenticate, getSession, logout}}>
            {props.children}
            </AccountContext.Provider>
        </div>
        )
};

export {Account, AccountContext};