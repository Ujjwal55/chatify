import Image from 'next/image'
import axios from 'axios'
import Logo from "../../public/images/logo.png"
import styles from "./page.module.css"

export default function Home() {
  axios.defaults.baseURL = 'http://localhost:5000';
  axios.defaults.withCredentials = true;
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.text}>
        Connect to the World
        </div>
        <button type="button" className={styles.button}>Let's Chat</button>
      </div>
      <div className={styles.item}>
      <Image src={Logo} width={300} height={300} alt='chatify' className={styles.logo}/>
      </div>
    </div> 
  )
}
