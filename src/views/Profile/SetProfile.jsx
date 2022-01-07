import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import ProfileForm from '../../components/Forms/ProfileForm.jsx';
import useAuth from '../../hooks/useAuth.jsx'
import { createProfile, getProfile, updateProfile } from '../../services/profile.js';

export default function SetProfile({isEdit=false}) {
    const history = useHistory();
    const {user} = useAuth();
    const [nameInput, setNameInput] = useState('');
    const [birthdayInput, setBirthdayInput] = useState('');
    const [bioInput, setBioInput] = useState('');

    useEffect(() => {
        async function effectHandler() {
            if(isEdit){
                try{
                    // consider abstracting this out into a hook/context
                    const {name, birthday, bio} = await getProfile();
                    setNameInput(name);
                    setBirthdayInput(birthday);
                    setBioInput(bio);
                } catch(err) {
                    if(err.message === "JSON object requested, multiple (or no) rows returned") return history.push('/create-profile');
                }
            }
        }

        effectHandler();
    }, []);

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
            <ProfileForm 
                user={user}
                nameInput={nameInput}
                setNameInput={setNameInput}
                birthdayInput={birthdayInput}
                setBirthdayInput={setBirthdayInput}
                bioInput={bioInput}
                setBioInput={setBioInput}
                handleSubmit={handleSubmit}
            />
        </fieldset>
    )
}
