import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './HomePage-Components/Header/Header.jsx';
import Hero from './HomePage-Components/Hero/Hero.jsx';
import SecondHero from './HomePage-Components/SecondHero/SecondHero.jsx';
import Fingerprints from './HomePage-Components/Fingerprints/Fingerprints.jsx';
import Achievements from './HomePage-Components/Achievements/Achievements.jsx';
import News from './HomePage-Components/News/News.jsx';
import Footer from './HomePage-Components/Footer/Footer.jsx';

import Login from './Login.jsx';

function App() {
  return (
    <Router>
      <Routes>
        
        <Route 
          path="/" 
          element={
            <div>
              <section id="first_section">
                <Header />
                <Hero />
                <SecondHero />
                <Fingerprints />
                <section id="Achieves">
                  <Achievements />
                </section>
                <News />
                <Footer />
              </section>
            </div>
          } 
        />
        
        
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
