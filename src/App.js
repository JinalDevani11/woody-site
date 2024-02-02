import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Home';
import About from './About';
import Services from './Service';
import Project from './Project';
import Contact from './Contact';
import Free_Quote_pg from './Free_Quote_pg';
import Feature from './Feature';
import Team_pg from './Team_pg';
import Testimonial_pg from './Testimonial_pg';
import Pg_404 from './Pg_404';

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/project" element={<Project/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/free-Quote" element={<Free_Quote_pg/>} />
        <Route path="/feature" element={<Feature/>} />
        <Route path="/Our-team" element={<Team_pg/>} />
        <Route path="/Testimonial" element={<Testimonial_pg/>} />
        <Route path="/404-page" element={<Pg_404/>} />
      </Routes>
      
    </>
  );
}

export default App;
