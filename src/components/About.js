import React from 'react'
import styles from "../CSS/About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
            <span className={styles.abouthead}>WHO IS MOHAMMAD ZIYA</span>
            <div className={styles.maincontent}>
              <div className={styles.allquestion}>
                  <div className={styles.quesans}>
              <span className={styles.question}>
                The short introduction of my life
              </span>
              <span className={styles.ans}>
               I’m a developer driven by curiosity and the desire to build things that matter.<br/>
What started as interest in how websites work quickly turned into a passion for creating digital products.<br/>
I enjoy transforming ideas into scalable web applications.<br/>
For me, coding is not just writing logic — it’s solving real problems.<br/>
I constantly explore new technologies and better ways to build.<br/>
My focus is on creating systems that are efficient, reliable, and user-friendly.<br/>
Every project I build is another step in improving my craft.
              </span>
            </div>
            <div className={styles.quesans}>
              <span className={styles.question}>
                Career and development
              </span>
              <span className={styles.ans}>
               My journey in development revolves around building modern full-stack applications.<br/>
I primarily work with technologies like React, JavaScript, Node.js, and databases.<br/>
I enjoy designing both intuitive interfaces and robust backend systems.<br/>
Learning new tools and frameworks is part of my daily workflow.<br/>
I believe strong developers never stop experimenting and improving.<br/>
Each project teaches me something new about performance, architecture, and design.<br/>
My goal is to continuously evolve as an engineer.
              </span>
            </div>
            <div className={styles.quesans}>
              <span className={styles.question}>
                More can be added in the left side for summary
              </span>
              <span className={styles.ans}>
               As a developer, my priority is building reliable and scalable systems.<br/>
I believe great software comes from clear thinking and strong fundamentals.<br/>
I enjoy collaborating with teams and solving complex technical challenges.<br/>
Writing clean, maintainable code is something I take seriously.<br/>
Technology moves fast, and staying adaptable is essential.<br/>
Every challenge is an opportunity to grow and improve.<br/>
My mission is simple — build meaningful technology that creates real impact.
              </span>
            </div>  
              </div>
             
              <div className={styles.aboutimage}>
               <img src="/aboutimage1.jpeg" alt="/" width="100%" height="100%"/>
          <span className={`${styles.corner} ${styles.topLeft}`}></span>
          <span className={`${styles.corner} ${styles.topRight}`}></span>
          <span className={`${styles.corner} ${styles.bottomLeft}`}></span>
          <span className={`${styles.corner} ${styles.bottomRight}`}></span>
            </div>
            </div>
            
            
           
            

          </div>
  )
}

export default About
