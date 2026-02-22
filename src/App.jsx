import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import StatsSection from './Components/StatsSection';
import ContactSection from './Components/ContactSection';
import ProjectsSection from './Components/ProjectsSection';
import "./App.css";
import Logo from "./assets/logo.svg";
import WomanInCircle from "./assets/Woman in circle.png";
import Corner from "./assets/COrner.jpg";

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

function App() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isWhiteMode, setIsWhiteMode] = useState(false);
    const [isProjectsSection, setIsProjectsSection] = useState(false);

    useEffect(() => {
        const rootMargin = '0px 0px -30% 0px'; // detect when 70% of section is visible

        // Track hero for navbar visibility
        const heroEl = document.querySelector('#hero');
        const statsEl = document.querySelector('.stats-section');
        const projectsEl = document.querySelector('.projects-scroll-section');

        // IntersectionObserver for navbar scrolled state (hide when hero is in full view)
        const heroObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // If hero is not largely in view, mark as scrolled
                setIsScrolled(!entry.isIntersecting || entry.intersectionRatio < 0.6);
            });
        }, { threshold: [0, 0.6] });
        if (heroEl) heroObserver.observe(heroEl);

        // IO for white mode when Stats or Projects are in view
        const modeObserver = new IntersectionObserver((entries) => {
            let white = false;
            let onProjects = false;
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                    if (entry.target === statsEl || entry.target === projectsEl) white = true;
                    if (entry.target === projectsEl) onProjects = true;
                }
            });
            // Only apply white mode on home route
            if (window.location.pathname === '/') {
                setIsWhiteMode(white);
            } else {
                setIsWhiteMode(false);
            }
            setIsProjectsSection(onProjects);
        }, { threshold: [0.5, 0.75], rootMargin });
        if (statsEl) modeObserver.observe(statsEl);
        if (projectsEl) modeObserver.observe(projectsEl);


        // Fallback: if IO unsupported, mark scrolled when scrollY > 0
        const onScrollFallback = () => setIsScrolled(window.scrollY > window.innerHeight * 0.5);
        let fallbackAttached = false;
        if (!('IntersectionObserver' in window)) {
            window.addEventListener('scroll', onScrollFallback, { passive: true });
            fallbackAttached = true;
        }

        return () => {
            heroObserver.disconnect();
            modeObserver.disconnect();
            if (fallbackAttached) window.removeEventListener('scroll', onScrollFallback);
        };
    }, []);

    return (
        <Router>
            <ScrollToTop />
            <div className={`app-container ${isWhiteMode ? 'white-bg' : ''}`}>
                <header className="fixed-nav-wrapper">
                    <div className="nav-left-content">
                        {/* Logo: Hidden if in Projects Section */}
                        <div className={`nav-logo-slot ${isScrolled && !isProjectsSection ? 'show' : ''}`}>
                            <img src={Logo} alt="Nav Logo" />
                        </div>

                        {/* Projects Title: Shown ONLY in Projects Section */}
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
                                <img src={Corner} alt="" className="hero-corner" />
                            </section>

                            <Section
                                id="about"
                                title="ჩვენს შესახებ"
                                description="შპს „ოაზისი“ დაარსდა 2018 წელს და წარმოადგენს სანდო პარტნიორს სამშენებლო და სარემონტო სფეროში. ჩვენი გუნდი აერთიანებს გამოცდილი პროფესიონალების გუნდს, რომელთა მონაწილეობით მრავალი წარმატებული პროექტი განხორციელდა.

ვთავაზობთ სრული სპექტრის სამშენებლო და სარემონტო მომსახურებას — იდეის დაგეგმვიდან პროექტის დასრულებამდე. ვეყრდნობით თანამედროვე ტექნოლოგიებსა და მაღალი ხარისხის მასალებს, რათა შედეგი სრულად შეესაბამებოდეს საერთაშორისო სტანდარტებს და მომხმარებელთა მოლოდინებს.

ჩვენთვის მთავარი ღირებულებებია ხარისხი, სანდოობა და პროფესიონალიზმი."
                                image={WomanInCircle}
                                imageRight={false}
                            />

                            <StatsSection />


                            <ProjectsSection />
                        </main>
                    } />
                    <Route path="/contact" element={<ContactSection />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
