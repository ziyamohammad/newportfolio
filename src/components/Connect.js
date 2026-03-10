import React, { useState } from 'react'
import styles from "../CSS/Openforhire.module.css";

const Connect = () => {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[text,setText]=useState("")
  return (
    <div className={styles.openforhire}>
        <div className={styles.form}>
           <h1>CONNECT WITH ME</h1>
           <span className={styles.subhead}>wanna chat? Or just share something cool?</span>
           <form>
            <div className={styles.name}>
                <label>HOW SHOULD I CALL YOU</label>
                <input type="text" placeholder="YOUR NAME" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            </div>
            <div className={styles.name}>
                <label>SENDING FROM</label>
                <input type="text" placeholder="YOUR EMAIL" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div className={styles.name}>
                <label>TRANSMITTED DATA</label>
                <textarea type="text" placeholder="HI,I WRITE TO YOU ABOUT" value={text} onChange={(e)=>{setText(e.target.value)}}/>
            </div>
           </form>
           <div className ={styles.button}>
            <button className={styles.but1}>SEND MESSAGE [ENTER]</button>
            <button className={styles.but2}>DISCARD [ESC]</button>
           </div>
        </div>
        <div className={styles.image}>
            <img src = "/formimage.png" alt="/" height="100%" width="100%"/>
        </div>
      
    </div>
  )
}

export default Connect
