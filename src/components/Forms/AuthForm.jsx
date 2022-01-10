import React from 'react'
import styles from '../../App.css'

export default function AuthForm({emailInput, setEmailInput, passwordInput, setPasswordInput, error, handleSubmit}) {
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} required/>

            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} required/>

            {/* <input aria-label='submit form button' type="submit" /> */}
            <button className={styles.formButton}>Submit</button>
            
            {
                error && <p>{error}</p>
            }
        </form>
    )
}
