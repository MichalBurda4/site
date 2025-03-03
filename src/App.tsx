import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import './index.css';
import AboutMe from "./pages/AboutMe.tsx";


const App: React.FC = () => {
    return (
        <Router>
            <div className="app-container">
                <Header />
                <div className="main-content">
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/services" element={<Services />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="aboutme" element={<AboutMe />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </div>
        </Router>
    );
};

export default App;