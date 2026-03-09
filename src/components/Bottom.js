import React, { useState } from 'react'
import styles from "../CSS/Bottom.module.css";

const Bottom = () => {
  const[active,setActive]=useState('beginning')
  return (
    
    <div className={styles.bottomTabs}>
        <div className={styles.box}  style={{ borderLeftColor: active === "beginning" ? "rgba(232, 74, 74, 1)" : "rgba(36, 36, 37, 1)" }} onClick={()=>{setActive('beginning')}}>
          <button className={active==='beginning'?styles.active:styles.normal}>BEGINNING</button>
          <span className={styles.boxp}>Where curiosity sparked my journey into development.</span>
        </div>
        <div className={styles.box} style={{ borderLeftColor: active === "logs" ? "rgba(232, 74, 74, 1)" : "rgba(36, 36, 37, 1)" }} onClick={()=>{setActive('logs')}}>
          <button className={active==='logs'?styles.active:styles.normal}>LOGS</button>
          <span className={styles.boxp}>Tracking experiments, progress, and lessons learned.</span>
        </div>
        <div className={styles.box} style={{ borderLeftColor: active === "achievements" ? "rgba(232, 74, 74, 1)" : "rgba(36, 36, 37, 1)" }} onClick={()=>{setActive('achievements')}}>
          <button className={active==='achievements'?styles.active:styles.normal}>ACHIEVEMENTS</button>
          <span className={styles.boxp}>Milestones earned through dedication, innovation, and persistence.</span>
        </div>
        <div className={styles.box}  style={{ borderLeftColor: active === "creations" ? "rgba(232, 74, 74, 1)" : "rgba(36, 36, 37, 1)" }} onClick={()=>{setActive('creations')}}>
          <button className={active==='creations'?styles.active:styles.normal}>CREATIONS</button>
          <span className={styles.boxp}>Projects crafted through creativity, logic, and technology.</span>
        </div>
        <div className={styles.box} style={{ borderLeftColor: active === "games" ? "rgba(232, 74, 74, 1)" : "rgba(36, 36, 37, 1)" }} onClick={()=>{setActive('games')}}>
          <button className={active==='games'?styles.active:styles.normal}>GAMES</button>
          <span className={styles.boxp}>Interactive experiments blending creativity, logic, and fun.</span>
        </div>
      </div>
  )
}

export default Bottom
