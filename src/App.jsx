import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import StatsSection from './Components/StatsSection';
import ContactSection from './Components/ContactSection';
import ProjectsSection from './Components/ProjectsSection';
import AboutPage from './Components/AboutPage';
import ServicesPage from './Components/ServicesPage.jsx';
import "./App.css";

// Assets
import Logo from "./assets/Logo.svg";
import WomanInCircle from "./assets/Woman in circle.png";

const ScrollToTop = ({ setIsWhiteMode }) => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
        // Force white background for About and Services pages
        if (pathname === '/about' || pathname === '/services') {
            setIsWhiteMode(true);
        } else if (pathname !== '/') {
            setIsWhiteMode(false);
        }
    }, [pathname, setIsWhiteMode]);
    return null;
};

function App() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isWhiteMode, setIsWhiteMode] = useState(false);
    const [isProjectsSection, setIsProjectsSection] = useState(false);

    useEffect(() => {
        const rootMargin = '0px 0px -30% 0px'; // Detect when 70% of section is visible
        const heroEl = document.querySelector('#hero');
        const statsEl = document.querySelector('.stats-section');
        const projectsEl = document.querySelector('.projects-scroll-section');

        // Toggle navbar visibility based on Hero presence
        const heroObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                setIsScrolled(!entry.isIntersecting || entry.intersectionRatio < 0.6);
            });
        }, { threshold: [0, 0.6] });
        if (heroEl) heroObserver.observe(heroEl);

        // Manage background theme and dynamic section titles
        const modeObserver = new IntersectionObserver((entries) => {
            let white = false;
            let onProjects = false;
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                    if (entry.target === statsEl || entry.target === projectsEl) white = true;
                    if (entry.target === projectsEl) onProjects = true;
                }
            });

            if (window.location.pathname === '/') {
                setIsWhiteMode(white);
            }
            setIsProjectsSection(onProjects);
        }, { threshold: [0.5, 0.75], rootMargin });

        if (statsEl) modeObserver.observe(statsEl);
        if (projectsEl) modeObserver.observe(projectsEl);

        return () => {
            heroObserver.disconnect();
            modeObserver.disconnect();
        };
    }, []);

    return (
        <Router>
            <ScrollToTop setIsWhiteMode={setIsWhiteMode} />
            <div className={`app-container ${isWhiteMode ? 'white-bg' : ''}`}>
                <header className="fixed-nav-wrapper">
                    <div className="nav-left-content">
                        {/* Logo fades out when entering Projects section title mode */}
                        <div className={`nav-logo-slot ${isScrolled && !isProjectsSection ? 'show' : ''}`}>
                            <img src={Logo} alt="Oasis Logo" />
                        </div>
                        {/* Title appears only in Projects section */}
                        <div className={`nav-section-title ${isProjectsSection ? 'show' : ''}`}>
                            პროექტები
                        </div>
                    </div>
                    <Navbar />
                </header>

                <Routes>
                    <Route path="/" element={
                        <main>
                            <section id="hero" className="section-hero">
                                <img src={Logo} alt="Logo" className="hero-logo-large" />
                            </section>

                            <Section
                                id="about-intro"
                                title="ჩვენს შესახებ"
                                description="შპს „ოაზისი“ დაარსდა 2018 წელს და წარმოადგენს სანდო პარტნიორს სამშენებლო და სარემონტო სფეროში. ჩვენი გუნდი აერთიანებს გამოცდილ პროფესიონალებს, რომელთა მონაწილეობით არაერთი წარმატებული პროექტი განხორციელდა.

ვთავაზობთ სრული სპექტრის სამშენებლო და სარემონტო მომსახურებას — იდეის დაგეგმვიდან პროექტის სრულ დასრულებამდე. ვეყრდნობით თანამედროვე ტექნოლოგიებსა და მაღალი ხარისხის მასალებს, რათა საბოლოო შედეგი სრულად შეესაბამებოდეს საერთაშორისო სტანდარტებს და მომხმარებლის მოლოდინებს."
                                image={WomanInCircle}
                                imageRight={false}
                            />
                            <StatsSection />
                            <ProjectsSection />
                        </main>
                    } />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/contact" element={<ContactSection />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;