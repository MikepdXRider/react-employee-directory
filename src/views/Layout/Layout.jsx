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

export default function Layout({ children }) {
    return (
        <>
            <header>
                <h1>Acme Inc</h1>
                {/* “Sign In” button or “You are signed in as ${email}” message with a “Sign Out” button */}
            </header>
            <main>
                {children}
            </main>
        </>
    )
}
