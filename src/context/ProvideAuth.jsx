import { createContext, useState } from "react";
import { getUser } from "../services/users.js";

const authContext = createContext();

function ProvideAuth({children}) {
    const currentUser = getUser();
    const [user, setUser] = useState(
        currentUser ? {email: currentUser.email} : {}
    );

    return (
        <authContext.Provider value={{user, setUser}} >
            {children}
        </authContext.Provider>
    )
}

export { authContext, ProvideAuth}
