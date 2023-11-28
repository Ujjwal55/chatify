"use client"
import React from 'react'
import styles from "./messageForm.module.css"
import {AiOutlineSend} from "react-icons/ai"
import { useSelector } from 'react-redux'

const MessageForm = () => {
  const user = useSelector(state => state.user);
  const handleSubmit = (e) => {
  }
  if(!user){
    return <div className={styles.loginMessage}>Please Login to send messages</div>
  }
  return (
    <>
    <div className={styles.chatContainer}></div>
    <div className={styles.messageOutput}>
        <input type="text" placeholder="Your Message" className={styles.input}/>
        <button type="submit"  className={styles.sendIcon} onClick={handleSubmit}>
          <AiOutlineSend />
        </button>
    </div>
    <div className={styles.chatContainer}></div>
    <div className={styles.messageOutput}>
        <input type="text" placeholder="Your Message" className={styles.input}/>
        <button type="submit"  className={styles.sendIcon} onClick={handleSubmit}>
          <AiOutlineSend />
        </button>
    </div>
    </>
  )
}

export default MessageForm