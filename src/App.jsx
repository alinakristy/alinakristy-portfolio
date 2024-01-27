import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap'; // Import all of Bootstrap's JS

import './App.css';

import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import ProjectsGallery from './pages/ProjectsGallery';
import ErrorPage from './pages/ErrorPage';
import Footer from './pages/Footer';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
    return <Router>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects-gallery" element={<ProjectsGallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact-me" element={<Contact />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
    </Router>;
}

export default App
