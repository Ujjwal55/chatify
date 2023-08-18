import React from 'react'
import styles from "./sidebar.module.css"

function Sidebar() {
    const rooms = ['first room', 'second room', 'second room'];
  return (
    <div>
        <h2>Available Rooms</h2>
        <div className={styles["rooms-container"]}>
        {rooms.map(room => {
            return <div className={styles.room}>{room}</div>
        }
        )}
        </div>
        <h2>Members</h2>
    </div>
  )
}

export default Sidebar