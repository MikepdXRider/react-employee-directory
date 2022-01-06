import React, { useState } from 'react'
import useAuth from '../../hooks/useAuth.jsx';

export default function AuthForm({isSigningUp=false}) {
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        console.log('password: ', passwordInput);
        console.log('email: ', emailInput);
    }

    return (
        <fieldset>
            <legend>{isSigningUp ? 'Sign-Up' : 'Sign-In'}</legend>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={emailInput} onChange={(e) => setEmailInput(e.target.value)}/>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)}/>
                <input aria-label='submit form button' type="submit" />
            </form>
        </fieldset>
    )
}
