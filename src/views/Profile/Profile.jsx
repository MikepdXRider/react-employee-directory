import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
// consider abstracting this out into a hook/context
import { getProfile } from '../../services/profile.js';

export default function Profile() {
    const [profile, setProfile] = useState({});
    
    useEffect(async () => {
        try{
            // consider abstracting this out into a hook/context
            const currentProfile = await getProfile();
            setProfile(currentProfile);
        } catch(err) {
            console.log(err)
        }
    })

    return (
        <article>
            <h1>{profile.name}</h1>
            <p>{profile.email}</p>
            <p>Birthday: {profile.birthday}</p>
            <h5>{profile.bio}</h5>
            <Link to='/edit-profile'>Edit</Link>
        </article>
    )
}
