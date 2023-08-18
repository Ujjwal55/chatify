import React from 'react'
import styles from "./page.module.css"
import Sidebar from "@/components/chat/sidebar/Sidebar"
import MessageForm from "@/components/chat/ChatBox/MessageForm"
const page = () => {
  return (
    <div className={styles["chat-container"]}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.message}>
        <MessageForm/>
      </div>
    </div>
  )
}

export default page