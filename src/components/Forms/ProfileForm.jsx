import React from 'react'

export default function ProfileForm({user, nameInput, setNameInput, birthdayInput, setBirthdayInput, bioInput, setBioInput, handleSubmit}) {
    
    return (
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
    )
}
