import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import ProfileForm from '../../components/Forms/ProfileForm.jsx';
import useAuth from '../../hooks/useAuth.jsx'
import { createProfile, getProfile, updateProfile } from '../../services/profile.js';
import styles from '../../App.css'
import profileStyles from './Profile.css'

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
                    console.log(err);
                    if(err.message === "JSON object requested, multiple (or no) rows returned") return history.push('/create-profile');
                }
            }
        }

        effectHandler();
    }, []);

    async function handleSubmit(e){
        e.preventDefault();
        
        const newProfile = {
            name: nameInput,
            email: user.email,
            bio: bioInput,
            birthday: birthdayInput
        }

        try {
            if(isEdit){
                // consider abstracting this out into a hook/context
                await updateProfile(newProfile);
            } else {
                // consider abstracting this out into a hook/context
                await createProfile(newProfile);
            }
        } catch(err){
            console.log(err);
        }

        history.push('/profile');
    }

    return (
        <fieldset className={styles.glass}>
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
