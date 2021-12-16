
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Intro from './components/Intro/Intro';
import Topbars from './components/Topbars/Topbars';
import Portfolio from './components/Portfolio/Portfolio';
import Works from './components/Works/Works';
import Testimonials from './components/Testimonials/Testimonials';
import Contacts from './components/Contacts/Contacts';
import "./app.scss"
import { useState } from 'react';
import Menu from './components/Menu/Menu';
function App() {
const[menuOpen , isMenuOpen]= useState(false)

  return (
    <div className="app">
      <Topbars menuOpen={menuOpen} isMenuOpen={isMenuOpen} />
      <Menu menuOpen={menuOpen} isMenuOpen={isMenuOpen} />
     
      <div className="sections">
      
        <Intro/>
        <Portfolio/>
        <Works/>
        <Testimonials/>
        <Contacts/>

      </div>
    </div>
  );
}

export default App;
