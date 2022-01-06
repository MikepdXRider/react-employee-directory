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
