// 
// Home/Landing Page View Component
// Nested in layout component
// Homepage with some intro content (you can use filler text) and links to “Sign In” and “Create an Account” (which should navigate to the /login and /register paths, respectively)
// 

import React from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'

export default function Home() {
    return (
        <section>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus a perferendis modi nesciunt enim temporibus, et veritatis ea quos incidunt ab vero quam laudantium voluptates nisi tempore recusandae fugit? Et?</p>
            <Link to='/login'>Sign-In</Link>
            <Link to='/register'>Make account</Link>
        </section>
    )
}
