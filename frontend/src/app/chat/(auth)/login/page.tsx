"use client"
import React from "react"
import styles from "./login.module.css";
import { useLoginUserMutation } from "../../../services/appApi"
import { useRouter } from "next/navigation";

const Login = () => {
    const router = useRouter();
    const [userName, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [loginUser, {isLoading, error}] = useLoginUserMutation();
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const resp = await loginUser({username: userName, password});
        if(resp){
            router.push("/chat");
        }
    }
    return (
        <div>
    <form className={styles.form}>
                <input type="text" placeholder="username" className={styles.input} required value={userName} onChange={(e) => setUserName(e.target.value)}/>
                <input type="password" placeholder="password" className={styles.input} required value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="button" className={styles.button} onClick={handleSubmit}>Login</button>
            </form>
            <button type="button">Don't have an account? Register</button>
        </div>

    )
}

export default Login;