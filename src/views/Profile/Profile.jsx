import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { Link, Redirect } from 'react-router-dom';
import useAuth from '../../hooks/useAuth.jsx';
// consider abstracting this out into a hook/context
import { getProfile } from '../../services/profile.js';
import styles from '../../App.css'

export default function Profile() {
    const history = useHistory();
    const [profile, setProfile] = useState({});
    const {user} = useAuth();
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        async function effectHandler(){
            try{
                // consider abstracting this out into a hook/context
                const currentProfile = await getProfile();
                setProfile(currentProfile);
                setIsLoading(false);
            } catch(err) {
                console.log(err);
                if(err.message === "JSON object requested, multiple (or no) rows returned") return history.push('/create-profile');
            }
        }

        effectHandler();
    }, []);

    return (
        <>
            {
                isLoading 
                ? <h1>Loading</h1>
                : <article className={styles.glass}>
                    <h3>{profile.name}</h3>
                    <div className={styles.flexRow}>
                        <div className={styles.divFifty}>
                            <p><b>Email:</b> {user.email}</p>
                            <p><b>Birthday:</b> {profile.birthday}</p>
                        </div>
                        <div className={styles.divFifty}>
                            <p><b>Bio:</b> {profile.bio}</p>
                        </div>
                    </div>    
                        <Link to='/edit-profile'>Edit</Link>
                </article>
            }
        </>
    )
}
