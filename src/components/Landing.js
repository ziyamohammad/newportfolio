import { Bluetooth, Check, Plus, X } from "lucide-react";
import styles from "../CSS/Landing.module.css";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Landing({active}) {
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


  //experience

  gsap.registerPlugin(ScrollTrigger)

const [active1,setActive1] = useState("experience")

const cardsRef = useRef([])

useEffect(()=>{

cardsRef.current.forEach((card,i)=>{

gsap.fromTo(card,
{
opacity:0,
y:80
},
{
opacity:1,
y:0,
duration:0.8,
delay:i*0.2,
scrollTrigger:{
trigger:card,
start:"top 85%",
toggleActions:"play none none reverse"
}
})

})

},[active1])


const experience = [
  {
    title: "Technical Lead Developer",
    company: "NoCapCode™",
    date: "Jan 2026 - Present",
    logo: "/NCC.png",
    desc: "Building scalable React interfaces and realtime apps."
  },
  {
    title: "Full Stack Intern",
    company: "Humanity Founders",
    date: "Oct 2025 - Jan 2026",
    logo: "/humanity.png",
    desc: "Developed full stack applications using MERN stack."
  },
  {
    title: "Frontend Developer",
    company: "Machine Learning Centre of Excellence",
    date: "Sep 2024 - Present",
    logo: "/logo.png",
    desc: "Created responsive UI with GSAP animations."
  }
]

const education = [
  {
    title: "B.Tech CSIT",
    company: "Ajay Kumar Garg Engineering College",
    date: "2023 - 2027",
    logo: "/akgec.png",
    desc: "Computer Science and Information Technology"
  },
  {
    title: "Class 12",
    company: "Dr Virendra Swarup Education Centre",
    date: "2022",
    logo: "/vsec.png",
    desc: "CBSE Board"
  },
  {
    title: "Class 10",
    company: "Dr Virendra Swarup Education Centre",
    date: "2020",
    logo: "/vsec.png",
    desc: "100/100 in Mathematics"
  }
]

const data = active1==="experience"?experience:education
 

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
  <img src="/Landingimg1.png" alt=""  onClick={()=>{navigate("/about")}} />

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
               <button className={styles.connect} onClick={()=>navigate("/connect")} >OPEN CONNECTION <Bluetooth color="red" size={20}/></button>
            </div>
        </div>

          
        </div>

        {/* Center Panel */}
        {active === "beginning" && (
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

        )}

        {active === "achievements" && (
     <section className={styles.wrapper}>

<h2 className={styles.heading}>EXPERIENCE & EDUCATION</h2>

<div className={styles.toggle}>

<button
className={`${styles.tab} ${active1==="experience" ? styles.active : ""}`}
onClick={()=>setActive1("experience")}
>
EXPERIENCE
</button>

<button
className={`${styles.tab} ${active1==="education" ? styles.active : ""}`}
onClick={()=>setActive1("education")}
>
EDUCATION
</button>

</div>


{data.map((item,index)=>{
  return(
    <div className={styles.experience}>
       <div className={styles.explogo}>
           <div className={styles.companylogo}>
            <img src = {item.logo} alt="/" height="100%" width="100%"/>
           </div>
           <div className={styles.tag}>{index===0?"LEGENDARY":"EPIC"}</div>
       </div>
       <div className={styles.expcontent}>
         <span className={styles.jobtitle}>{item.title}</span>
         <span className={styles.companyname}>{item.company}</span>
         <span className={styles.desc}>{item.desc}</span>
         <span className={styles.date}>{item.date}</span>
       </div>
    </div>
  )

})}

     </section>

        )}

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