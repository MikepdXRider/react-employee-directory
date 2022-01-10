import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../App.css'

export default function Home() {
    return (
        <section className={styles.glass}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus a perferendis modi nesciunt enim temporibus, et veritatis ea quos incidunt ab vero quam laudantium voluptates nisi tempore recusandae fugit? Et?</p>
            <div className={styles.horizontalSeperator}></div>
            <div className={styles.linkContainer}>
                <Link to='/login'>Sign-In</Link>
                <Link to='/register'>Register</Link>
            </div>
        </section>
    )
}
