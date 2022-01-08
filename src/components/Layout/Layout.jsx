import React from 'react'
import { useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth.jsx';
import styles from '../../App.css';

export default function Layout({ children }) {
    const history = useHistory();
    
    const { user, signOut } = useAuth();
    
    async function handleLogout() {
        await signOut();
    }

    return (
        <>
            <header className={styles.header}>
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
