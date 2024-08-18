import React, { Component } from 'react';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Interests from './pages/Interests';
import Awards from './pages/Awards';
import RealtimeClockClass from './components/RealtimeClockClass';
import MyImage from './assets/images/coding.png'; 

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
      <div>
        <div id="kotak_sidebar">
          <Sidebar />
        </div>
        <div className="px-5" style={{marginLeft:"350px"}}>
          <Routes>
            <Route path="/" element={<About></About>}></Route>
            <Route path="/experience" element={<Experience></Experience>}></Route>
            <Route path="/education" element={<Education></Education>}></Route>
            <Route path="/skills" element={<Skills></Skills>}></Route>
            <Route path="/interests" element={<Interests></Interests>}></Route>
            <Route path="/awards" element={<Awards></Awards>}></Route>
          </Routes>
        </div>
      </div>
    </div>
    );
  }
}

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="profile">
          <img src={MyImage} alt="My example img" />
        </div>
        <ul className="menu">
          <li><h5><Link to="/">ABOUT</Link></h5></li>
          <li><h5><Link to="/experience">EXPERIENCE</Link></h5></li>
          <li><h5><Link to="/education">EDUCATION</Link></h5></li>
          <li><h5><Link to="/skills">SKILLS</Link></h5></li>
          <li><h5><Link to="/interests">INTERESTS</Link></h5></li>
          <li><h5><Link to="/awards">AWARDS</Link></h5></li>
        </ul>
        <RealtimeClockClass />
      </div>
    );
  }
}

export default App;
