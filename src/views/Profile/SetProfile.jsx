import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth.jsx'
import { createProfile, getProfile, updateProfile } from '../../services/profile.js';

export default function SetProfile({isEdit=false}) {
    const history = useHistory();
    const {user} = useAuth();
    const [nameInput, setNameInput] = useState('');
    const [birthdayInput, setBirthdayInput] = useState('');
    const [bioInput, setBioInput] = useState('');

    useEffect(async () => {
        if(isEdit){
            // consider abstracting this out into a hook/context
            const {name, birthday, bio} = await getProfile();
            setNameInput(name);
            setBirthdayInput(birthday);
            setBioInput(bio);
        }
    })

    async function handleSubmit(e){
        e.preventDefault();
        
        try {
            if(isEdit){
                // consider abstracting this out into a hook/context
                await updateProfile(nameInput, user.email, bioInput, birthdayInput);
            } else {
                // consider abstracting this out into a hook/context
                await createProfile(nameInput, user.email, bioInput, birthdayInput);
            }
        } catch(err){
            console.log(err);
        }

        history.push('/profile');
    }

    return (
        <fieldset>
            <legend>{isEdit ? 'Edit Profile' : 'Create Profile'}</legend>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id='name' value={nameInput} onChange={(e) => setNameInput(e.target.value)} />

                <label htmlFor="email">Email</label>
                <input type="text" id='email' value={user.email} disabled />

                <label htmlFor="birthday">Birthday</label>
                <input type="date" id='birthday' value={birthdayInput} onChange={(e) => setBirthdayInput(e.target.value)} />

                <label htmlFor="bio">Tell us about yourself</label>
                <textarea id='bio' value={bioInput} onChange={(e) => setBioInput(e.target.value)} />

                <input aria-label='submit form button' type="submit" />
            </form>
        </fieldset>
    )
}
