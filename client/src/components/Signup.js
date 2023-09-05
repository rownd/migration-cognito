import React, { useState } from 'react';
import UserPool from '../UserPool';
import { CognitoUser } from 'amazon-cognito-identity-js';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);
    const [verificationCode, setVerificationCode] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        setIsRegistering(true);
        UserPool.signUp(email, password, [], null, (err,data) => {
            if (err) {
                console.error(err);
            }
            console.log(data);
        });
    };

    const confirm = (event) => {
        event.preventDefault();
        const user = new CognitoUser({
         Username: email,
         Pool: UserPool
        });
       
        return new Promise((resolve, reject) => {
         const callback = (err, result) => {
          if (err) {
           reject();
          }
          resolve(result);
          setIsRegistering(false);
         };
       
         user.confirmRegistration(verificationCode, true, callback);
        });
    }

    return (
        <div >
            <form onSubmit={onSubmit}>
                <label htmlFor='email'>Email </label>
                <input value = {email} onChange= {(event) => setEmail(event.target.value)} />
                <label htmlFor='password'>Password </label>
                <input value = {password} onChange = {(event) => setPassword(event.target.value)} />
                <button type="submit">Sign Up </button>
            </form>
            <div>
                {isRegistering ? (
            <form onSubmit={confirm}>
                <label htmlFor='verification'>verification </label>
                <input value = {verificationCode} onChange= {(event) => setVerificationCode(event.target.value)} />
                <button type='submit'>Verify </button>
            </form>

                ): ""}
            </div>
        </div>
    );
};

export default SignUp;