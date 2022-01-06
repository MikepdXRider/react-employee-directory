import React from 'react'
import ProfileForm from '../../components/Forms/ProfileForm.jsx'

export default function EditProfile() {
    return (
        <section>
            <ProfileForm isEdit={true}/>
        </section>
    )
}