// 
// useUser Hook
// import context from provideauth.jsx & something else(?)
// declare hook, passing context into useContext
// don't forget the context undefined handler
// return context
// export new hook
// 


import { authContext } from '../context/ProvideAuth.jsx';
import { useContext } from 'react';

export default function useAuth() {
    const context = useContext(authContext);

    if (context === undefined) throw new Error('useAuth hook is only accessible within an appropriate provider');

    return context;
}
