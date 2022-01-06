import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth.jsx';


export default function Auth({isSigningUp=false}) {
    const history = useHistory();
    const location = useLocation();
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [error, setError] = useState('');
    const { signIn, signUp } = useAuth();

    const { from } = location.state || { from: '/profile' };

    async function handleSubmit(e){
        e.preventDefault();
        if (passwordInput.length < 8) return setError('Password must be at least 8 characters long');

        try{
            if (isSigningUp) {
                await signUp(emailInput, passwordInput);
                history.replace('/create-profile');
            } else {
                await signIn(emailInput, passwordInput);
                history.replace(from);
            }
        } catch(err) {
            console.log(err);
        }
    }

    return (
        // This could be an abstracted into presentational component, but isn't being reused so it's not necessary.
        <fieldset>
            <legend>{isSigningUp ? 'Sign-Up' : 'Sign-In'}</legend>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} required/>

                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} required/>

                <input aria-label='submit form button' type="submit" />
                
                {
                    error && <p>{error}</p>
                }
            </form>
        </fieldset>

    )
}
