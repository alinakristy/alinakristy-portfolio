import 'bootstrap/dist/css/bootstrap.min.css';
// Import our custom CSS
import './scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import './App.css';

import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import ProjectsGallery from './pages/ProjectsGallery';
import ErrorPage from './pages/ErrorPage';
import Footer from './pages/Footer';
import Contact from './pages/Contact';
import Project from './pages/Project';

function App() {
    return <Router>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects-gallery" element={<ProjectsGallery />} />
            <Route path="/contact-me" element={<Contact />} />
            <Route path="/project/:id" element={<Project />} />
            <Route path="/not-found" element={<ErrorPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
    </Router>;
}

export default App
