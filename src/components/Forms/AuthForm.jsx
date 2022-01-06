import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth.jsx';
import { signInUser, signUpUser } from '../../services/users.js';

export default function AuthForm({isSigningUp=false}) {
    const history = useHistory();
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [error, setError] = useState('');
    const { setUser } = useAuth();

    async function handleSubmit(e){
        e.preventDefault();
        if (passwordInput.length < 8) setError('Password must be at least 8 characters long');

        try{
            if (isSigningUp) {
                const currentUser = await signUpUser(emailInput, passwordInput);
                setUser(currentUser);
                history.replace('/create-profile');
            } else {
                const currentUser= await signInUser(emailInput, passwordInput);
                setUser(currentUser);
                history.replace('/profile');
            }
        } catch(err) {
            console.log(err);
        }
    }

    return (
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
