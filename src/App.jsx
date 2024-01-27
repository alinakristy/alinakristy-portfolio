import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap'; // Import all of Bootstrap's JS

import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import ProjectsGallery from './pages/ProjectsGallery';
import ErrorPage from './pages/ErrorPage';

function App() {
    return <Router>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects-gallery" element={<ProjectsGallery />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    </Router>;
}

export default App
