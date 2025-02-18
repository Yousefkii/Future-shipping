import styles from './Header.module.css'
import logo from '../assets/logo.png'
import React, {useState} from 'react'

function Header(){
  const nav_links = ["Home","packages","support",<a target= '_blank' href='http://localhost:5173/Login'>log in/sign up</a>]

    const [slider,setslidder] = useState({}) 

  window.addEventListener('load',()=>{

  })
  return(
    <div className={styles.countainer}>
        <div className={styles.nav_links}>
          {nav_links.map((nav)=>(
            <div key={nav} className={styles.link} >
              {nav}
            </div>
          ))}
        </div>
      <div >
        <img className={styles.logopic} src={logo} ></img>
      </div>
      
    </div>
  )
}

export default Header