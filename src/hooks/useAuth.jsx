import { authContext } from '../context/ProvideAuth.jsx';
import { useContext } from 'react';

export default function useAuth() {
    const context = useContext(authContext);

    if (context === undefined) throw new Error('useAuth hook is only accessible within an appropriate provider');

    return context;
}
