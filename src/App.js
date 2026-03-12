import './App.css';
import Landing from './components/Landing';
import useWindowWidth from './components/usewindowwidth';
import { useState } from 'react';
import Bottom from './components/Bottom';
import { Plus, X } from 'lucide-react';
import { BrowserRouter as Router , Routes,Route, useLocation, useNavigate } from 'react-router-dom';
import Openforhire from './components/Openforhire';
import Connect from './components/Connect';
import About from './components/About';

function AppContent() {
   const[active,setActive]=useState('beginning')
   const navigate = useNavigate();
   const [menuOpen, setMenuOpen] = useState(false);
  const window = useWindowWidth()
  const isMobileView = window <= 1050 && window >= 320;
  const handleclick = (act)=>{
     setActive(act)
     console.log(act)
  }

  const location = useLocation()

  return (
   <div className="App">

  <Routes>
    <Route path="/" element={<Landing active={active}/>}/>
    <Route path="/openforhire" element={<Openforhire/>}/>
    <Route path="/connect" element={<Connect/>}/>
    <Route path="/about" element={<About/>}/>
  </Routes>

  {(location.pathname !== "/openforhire" && location.pathname !== "/connect") && (
    isMobileView ? (
      <div className="mobileBottomNav">

        {menuOpen && (
          <div className="dropUp">
            <button>BEGINNING</button>
            <button>ACHIEVEMENTS</button>
            <button>GAME</button>
            <button>SKILLS</button>
          </div>
        )}

        <div className="mobileButtons">
          <button
            className="navButton"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            NAVIGATE {menuOpen ? <X size={14}/> : <Plus size={14}/>}
          </button>

          <button className="navButton1" onClick={()=>{navigate("/about")}}>
            ABOUT
          </button>
        </div>

      </div>
    ) : (
      <Bottom handleclick={handleclick}/>
    )
  )}

</div>
  )}
function App(){
  return(
    <Router>
      <AppContent/>
    </Router>
  )
}

export default App;