import './App.css';
import Landing from './components/Landing';
import useWindowWidth from './components/usewindowwidth';
import { useState } from 'react';
import Bottom from './components/Bottom';
import { Plus, X } from 'lucide-react';
import { BrowserRouter as Router , Routes,Route, useLocation } from 'react-router-dom';
import Openforhire from './components/Openforhire';
import Connect from './components/Connect';

function AppContent() {

  const [menuOpen, setMenuOpen] = useState(false);
  const window = useWindowWidth()
  const isMobileView = window <= 1050 && window >= 320;

  const location = useLocation()

  return (
   <div className="App">

  <Routes>
    <Route path="/" element={<Landing/>}/>
    <Route path="/openforhire" element={<Openforhire/>}/>
    <Route path="/connect" element={<Connect/>}/>
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

          <button className="navButton1">
            ABOUT
          </button>
        </div>

      </div>
    ) : (
      <Bottom />
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