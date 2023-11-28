import React from 'react'
import styles from "./sidebar.module.css"
import { useSelector } from 'react-redux';

function Sidebar() {
    const Rooms = ['first room', 'second room', 'second room'];
    const user = useSelector(state => state.user);
    if(!user){
        return <div className={styles.loginMessage}>Please Login to see members</div>
    }
  return (
    <div>
        <h2>Available Rooms</h2>
        <div className={styles["rooms-container"]}>
        {Rooms.map(room => {
            return <div className={styles.room}>{room}</div>
        }
        )}
        </div>
        <h2>Members</h2>
        <h2>Members</h2>
    </div>
  )
}

export default Sidebar