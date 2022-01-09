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
                <h1>Acme Inc.</h1>
                <div className={styles.loginStatus}>
                    {
                        user.email
                        ? <>
                            <span>Signed in as <b>{user.email}</b></span>
                            <div className={styles.seperator}></div>
                            <button onClick={() => handleLogout()}>Sign Out</button> 
                        </> : <>
                        <span>No account detected</span>
                        <div className={styles.seperator}></div>
                        <button onClick={() => history.push('/login')}>Sign In</button>
                        </>
                    }
                </div>
            </header>
            <main>
                {children}
            </main>
        </>
    )
}
