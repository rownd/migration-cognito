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

    const verifyAccessToken = async (token) => {

        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token }),
          };
          
          fetch('/api/verify-token', options)
          .then((response) => response.json())  
          .then((data) => {
              if (data.valid) {
                console.log("Token is valid");
              } else {
                console.log("Token is not valid");
              }
            })
            .catch((error) => console.log(error));
      
    };

    const logout = () => {
        const user = Pool.getCurrentUser();
        if (user) {
            user.signOut();
        }
    };

    return ( <div className="App-header">
            <AccountContext.Provider value={{ authenticate, getSession, verifyAccessToken, logout}}>
            {props.children}
            </AccountContext.Provider>
        </div>
        )
};

export {Account, AccountContext};