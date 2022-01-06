// 
// Profiles have the following fields: name, email, birthday, and bio
//  - These are the keys you’ll use when sending those values to the server for creating/updating profiles
// 

import React from 'react'
import ProfileForm from '../../components/Forms/ProfileForm.jsx'

export default function CreateProfile() {
    return (
        <section>
            <ProfileForm/>
        </section>
    )
}
