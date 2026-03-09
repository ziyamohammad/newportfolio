import { Bluetooth, Check, Plus, X } from "lucide-react";
import styles from "../CSS/Landing.module.css";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";

export default function Landing() {
      const [soundOn, setSoundOn] = useState(true);
  const [musicOn, setMusicOn] = useState(false);
  const navigate = useNavigate()
  

  const musicRef = useRef(null);

  useEffect(() => {
    if (!musicRef.current) return;

    if (musicOn) {
      musicRef.current.volume = 0.3;
      musicRef.current.play();
    } else {
      musicRef.current.pause();
    }
  }, [musicOn]);

  const playClick = () => {
    if (!soundOn) return;

    const audio = new Audio("/click.mp3");
    audio.volume = 0.4;
    audio.play();
  };

 

  return (
    <div className={styles.container}>

      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.levelandplus}>
          <div className={styles.level}>48 <span>LEVEL</span></div>
          <span className={styles.icon}><Plus color="red" size={16}/></span>
        </div>
        <div className={styles.level}>1425 <span>COINS AWARDED</span></div>
      </div>

      <div className={styles.main}>

        {/* Left Panel */}
        <div className={styles.leftPanel}>
          <div className={styles.avatar}>
  <img src="/Landingimg1.png" alt="" />

  <span className={`${styles.corner} ${styles.topLeft}`}></span>
  <span className={`${styles.corner} ${styles.topRight}`}></span>
  <span className={`${styles.corner} ${styles.bottomLeft}`}></span>
  <span className={`${styles.corner} ${styles.bottomRight}`}></span>
          </div>

          <div className={styles.profileInfo}>
            <div className={styles.name}>
              <span className={styles.label}>NAME</span>
              <span className={styles.value}>MOHAMMAD ZIYA</span>
            </div>
            <div className={styles.name}>
              <span className={styles.label}>OCCUPATION</span>
              <span className={styles.value}>WEB DEVELOPER</span>
            </div>
            <div className={styles.name}>
              
            <span className={styles.label}>CORPORATION</span>
            <span className={styles.value}>NoCapCode</span>
            </div>
            <div className={styles.name}>
               <span className={styles.label}>AVAILABILITY</span>
               <span className={styles.status} onClick={()=>navigate("/openforhire")} >OPEN FOR HIRE</span>
            </div>
            <div className={styles.name}>
               <span className={styles.label}>SOCIAL</span>
               <button className={styles.connect}>OPEN CONNECTION <Bluetooth color="red" size={20}/></button>
            </div>
        </div>

          
        </div>

        {/* Center Panel */}
        <div className={styles.centerPanel}>
            <div className={styles.caption}>
           BUILDING SCALABLE WEB APPLICATIONS AND INTELLIGENT SYSTEMS,
           TRANSFORMING IDEAS INTO REAL WORLD DIGITAL PRODUCTS.<br/>
           <span className={styles.tagline}>PORTFOLIO SYSTEM INITIALIZED BY MOHAMMAD ZIYA</span>
          </div>
          <img src="/Landingimg2.png" alt="/" width="100%" height="100%"/>
          <span className={`${styles.corner} ${styles.topLeft}`}></span>
  <span className={`${styles.corner} ${styles.topRight}`}></span>
  <span className={`${styles.corner} ${styles.bottomLeft}`}></span>
  <span className={`${styles.corner} ${styles.bottomRight}`}></span>

          
        </div>

        {/* Right Panel */}
        <div className={styles.rightPanel}>
            <div className={styles.upper}>
                <span className={styles.status}>ACTIVE QUEST</span>
           <span className={styles.questname}>THE REACT SKILL-UP LINE</span>

          <div className={styles.questCard}>
            <div className={styles.name1}>
              <span className={styles.label}>QUEST NAME</span>
              <span className={styles.value}>REACT WEBSITE</span>
            </div>
            <div className={styles.name1}>
              <span className={styles.label}>QUEST NAME</span>
              <span className={styles.goal}> BUILD THIS WEBSITE. IMPLEMENT A FULL REACT WEBSITE WITH MULTIPLE
              ROUTERS, UI ELEMENTS AND WORK WITH VULKAN.</span>
            </div>

            <div className={styles.rewards}>
              <span><img src="/reward1.png" alt="/" width="100%" height="100%"/></span>
              <span><img src="/reward2.png" alt="/" width="100%" height="100%"/></span>
            </div>
          </div>
            </div>
          

          <div className={styles.settings}>

      <audio ref={musicRef} loop src="/music.mp3" />

      <div className={styles.row}>
        <span className={styles.label1}>SOUND EFFECTS</span>

        <div
          className={`${styles.box} ${soundOn ? styles.active : ""}`}
          onClick={() => {
            playClick();
            setSoundOn(!soundOn);
          }}
        >
         {musicOn ? <Check/> : <X/>}
        </div>
      </div>

      <div className={styles.row}>
        <span className={styles.label1}>MUSIC</span>

        <div
          className={`${styles.box} ${musicOn ? styles.active : ""}`}
          onClick={() => {
            playClick();
            setMusicOn(!musicOn);
          }}
        >
          {musicOn ? <Check/> : <X/>}
        </div>
      </div>

          </div>
        </div>
      </div>
    </div>
  )}