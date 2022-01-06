// 
// Auth View Component
// Needs access to the auth context/state setter.
// Contains login/signup form depending on users state selection
//  - Both fields are required
//  - The password should be 8+ characters long
//  - STRETCH: If a field is empty or the password isn’t long enough, an error message should be displayed to the user
// 

import React from 'react'
import AuthForm from '../../components/Forms/AuthForm.jsx'

export default function Register() {
    return (
        <section>
            <AuthForm isSigningUp={true}/>
        </section>
    )
}
