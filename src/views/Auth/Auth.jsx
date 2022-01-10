import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth.jsx';
import AuthForm from '../../components/Forms/AuthForm.jsx';
import styles from '../../App.css'

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
        <fieldset className={`${styles.glass} ${styles.profileFieldset}`}>
            <legend>{isSigningUp ? 'Sign-Up' : 'Sign-In'}</legend>
            <AuthForm 
                emailInput={emailInput}    
                setEmailInput={setEmailInput}    
                passwordInput={passwordInput}    
                setPasswordInput={setPasswordInput}    
                error={error}    
                handleSubmit={handleSubmit}    
            />
        </fieldset>
    )
}
