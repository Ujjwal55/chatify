"use client"
import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
import { useSelector } from 'react-redux';
import { useRouter } from "next/navigation";

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
    const router = useRouter();
    const user = useSelector((state) => state.user);
  return (
    <div className={styles.container}>
        <Link href="/" className={styles.logo}>Chatify</Link>
        <div className={styles.link}>
            {links.map((link) => (
                <Link href={link.path} key={link.id}>
                    {link.title}
                </Link>
            ))}
            {user && (
                <button type="button" className={styles.logout} onClick={() => {}}>logout</button>
            )}
            {!user && (
                <>
                <button type="button" className={styles.logout} onClick={() => router.push("/chat/register")}>register</button>
                <button type="button" className={styles.logout} onClick={() => router.push("/chat/login")}>login</button>
                </>
            )}
        </div>
    </div>
  )
}

export default Navbar