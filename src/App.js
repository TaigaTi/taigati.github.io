import { Routes, Route, HashRouter, Navigate, useLocation } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Projects from './components/Projects';
import Designs from './components/Designs';
import Contact from './components/Contact';
import Awards from './components/Awards';
import Error from './components/Error';
import AOS from 'aos';
import 'aos/dist/aos.css';
import DesignDetails from './components/DesignDetails';

AOS.init();

function App() {
  return (
    <HashRouter>
      <div className='App font-montserrat'>
        <NavBarWrapper />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Navigate to="/" replace />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/designs" element={<Designs />} />
          <Route path="/designs/:id" element={<DesignDetails />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

function NavBarWrapper() {
  const location = useLocation();

  return <NavBar path={location.pathname} />;
}

export default App;
