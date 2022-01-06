import { createContext, useState } from "react";
import { getUser } from "../services/users.js";

const authContext = createContext();

function ProvideAuth({children}) {
    // on app load...
    // getUser checks the 'session' in localstorage for a current token and a refresh token. If the token is current, it looks for a user in the session. If the token is not current and a refresh token is present, it refreshes the token and retrieves a new user.
    const currentUser = getUser();

    const [user, setUser] = useState(
        currentUser ? {email: currentUser.email} : {}
    );

    //  a fn that's passed to provider children, that called backend/service fn.

    return (
        <authContext.Provider value={{user, setUser}} >
            {children}
        </authContext.Provider>
    )
}

export { authContext, ProvideAuth}
