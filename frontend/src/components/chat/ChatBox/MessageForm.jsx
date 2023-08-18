"use client"
import React from 'react'
import styles from "./messageForm.module.css"
import {AiOutlineSend} from "react-icons/ai"

const MessageForm = () => {
  const handleSubmit = (e) => {
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
    </>
  )
}

export default MessageForm