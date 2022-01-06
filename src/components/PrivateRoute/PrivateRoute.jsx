// 
// PrivateRoute Component
// Needs access to user/auth context
// Import usehistory hook
// This functional component takes in children and ...rest
// It returns a route
//      - said route has a render attribute which will render children or redirect user to auth route depending on user/auth state.
//          - send the current location to the redirect.
// 


import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../hooks/useAuth.jsx'

export default function PrivateRoute({children, ...rest}) {
    const {user} = useAuth();

    return (
        <Route 
            {...rest}
            render={({location}) => {
                return user.email
                ? children
                : <Redirect 
                    to={{
                        pathname: '/login',
                        state: {
                            from: location
                        }
                    }}
                />
            }}
        />
    )
}
