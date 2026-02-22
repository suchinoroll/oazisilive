import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import HomeIcon from '../assets/Home.svg';
import ContactIcon from '../assets/contact.svg';

const Navbar = () => {
    const location = useLocation();
    // Sync active tab with the current URL path
    const [activeTab, setActiveTab] = useState(location.pathname === '/contact' ? 'contact' : 'home');
    const [impact, setImpact] = useState(null);

    // Update tab if user navigates via browser back/forward buttons
    useEffect(() => {
        const currentTab = location.pathname === '/contact' ? 'contact' : 'home';
        if (currentTab !== activeTab) {
            setActiveTab(currentTab);
        }
    }, [location.pathname, activeTab]);

    const handleNavClick = (tab) => {
        if (tab !== activeTab) {
            setActiveTab(tab);

            // Animation timing for the slider impact
            setTimeout(() => {
                setImpact(tab === 'contact' ? 'right' : 'left');
                setTimeout(() => setImpact(null), 200);
            }, 180);
        }
    };

    return (
        <div className="nav-container">
            <div className={`nav-wrapper ${impact ? `impact-${impact}` : ''}`}>
                <div className={`nav-slider ${activeTab === 'contact' ? 'is-contact' : ''}`} />

                <Link
                    to="/"
                    className={`nav-item ${activeTab === 'home' ? 'active' : 'inactive'}`}
                    onClick={() => handleNavClick('home')}
                    style={{ textDecoration: 'none' }}
                >
                    <div className="icon-slot">
                        <img src={HomeIcon} alt="Home" className="custom-icon" />
                    </div>
                    <span>მთავარი</span>
                </Link>

                <Link
                    to="/contact"
                    className={`nav-item ${activeTab === 'contact' ? 'active' : 'inactive'}`}
                    onClick={() => handleNavClick('contact')}
                    style={{ textDecoration: 'none' }}
                >
                    <div className="icon-slot">
                        <img src={ContactIcon} alt="Contact" className="custom-icon" />
                    </div>
                    <span>კონტაქტი</span>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;