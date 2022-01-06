import React from 'react'
import { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth.jsx';
import { signOutUser } from '../../services/users.js';

export default function Layout({ children }) {
    const history = useHistory();
    
    const { user, setUser } = useAuth();
    
    async function handleLogout() {
        await signOutUser();
        setUser({});
    }

    return (
        <>
            <header>
                <h1>Acme Inc</h1>
                {
                    user.email
                    ? <>
                        <span>You are signed in as {user.email}</span>
                        <button onClick={() => handleLogout()}>Sign Out</button> 
                    </> : <button onClick={() => history.push('/login')}>Sign In</button>
                }
            </header>
            <main>
                {children}
            </main>
        </>
    )
}
