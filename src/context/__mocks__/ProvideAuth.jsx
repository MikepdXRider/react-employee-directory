import { createContext, useState } from "react";

const authContext = createContext();

function ProvideAuth({mockUser, children}) {
    // on app load...
    // getUser checks the 'session' in localstorage for a current token and a refresh token. If the token is current, it looks for a user in the session. If the token is not current and a refresh token is present, it refreshes the token and retrieves a new user.
    const [user, setUser] = useState(
        mockUser ? {email: mockUser.email} : {}
    );

    return (
        <authContext.Provider value={{user}} >
            {children}
        </authContext.Provider>
    )
}

export { authContext, ProvideAuth}