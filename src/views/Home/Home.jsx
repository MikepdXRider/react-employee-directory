import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <section>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus a perferendis modi nesciunt enim temporibus, et veritatis ea quos incidunt ab vero quam laudantium voluptates nisi tempore recusandae fugit? Et?</p>
            <Link to='/login'>Sign-In</Link>
            <Link to='/register'>Make account</Link>
        </section>
    )
}
