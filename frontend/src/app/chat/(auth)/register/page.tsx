"use client"
import Link from "next/link";
import React, { use } from "react"
import styles from "../register/register.module.css"
import { useSignupUserMutation } from "../../../services/appApi";
import { useRouter } from "next/navigation";

const Register = () => {
    const router = useRouter();
    const [userName, setUserName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const [signUpUser, {isLoading, error}] = useSignupUserMutation();
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const resp = await signUpUser({username: userName, email, password});
        if(resp){
            router.push("/chat");
        }
    }
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <input type="text" placeholder="username" className={styles.input} required value={userName} onChange={(e) => setUserName(e.target.value)}/>
                <input type="email" placeholder="email" className={styles.input} required value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="password" className={styles.input} required value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="button" className={styles.button} onClick={handleSubmit}>Register</button>
            </form>
            <Link href="/chat/login">Login with an existing account</Link> 
        </div>
    )
}

export default Register;