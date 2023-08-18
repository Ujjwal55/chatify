"use client"
import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'

const links = [
    {
        id: 1,
        title: "Home",
        path: "/"
    },
    {
        id: 2,
        title: "Chat",
        path: "/chat"
    }
]

const Navbar = () => {
  return (
    <div className={styles.container}>
        <Link href="/" className={styles.logo}>Chatify</Link>
        <div className={styles.link}>
            {links.map((link) => (
                <Link href={link.path} key={link.id}>
                    {link.title}
                </Link>
            ))}
            <button type="button" className={styles.logout} onClick={() => {}}>logout</button>
        </div>
    </div>
  )
}

export default Navbar