// 
// Layout View Component
// Needs access to auth/user context
// Contains header
//  - Header contains:
//      - Acme Inc. name
//      - A “Sign In” button if the user is signed out
//      - A “You are signed in as ${email}”` message with a “Sign Out” button if the user is signed in
// 


import React from 'react'
import { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

export default function Layout({ children }) {
    const history = useHistory();
    
    // destructure user from useAuth hook
    
    // Temporary Mock
    let mockUser = {
        name: 'bobby',
        birthday: new Date(),
        bio: 'brief bio',
        email: 'bobby@acme.com'
    }
    // Temporary Mock
    const [user, setUser] = useState(mockUser);

    function handleLogout() {
        setUser({});
    }

    return (
        <>
            <header>
                <h1>Acme Inc</h1>
                {/* “Sign In” button or “You are signed in as ${email}” message with a “Sign Out” button */}
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
