import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import HomeIcon from '../assets/Home.svg';
import ContactIcon from '../assets/Contact.svg';
import AboutIcon from '../assets/About.svg';
import ServicesIcon from '../assets/Services.svg';

const tabIndexFromLocation = (location) => {
    switch (location.pathname) {
        case '/about': return 1;
        case '/services': return 2;
        case '/contact': return 3;
        default: return 0; // მთავარი გვერდი
    }
};

const Navbar = () => {
    const location = useLocation();
    const [activeIndex, setActiveIndex] = useState(tabIndexFromLocation(location));
    const prevIndexRef = useRef(activeIndex);

    useEffect(() => {
        const nextIndex = tabIndexFromLocation(location);
        if (nextIndex !== prevIndexRef.current) {
            setActiveIndex(nextIndex);
            prevIndexRef.current = nextIndex;
        }
    }, [location.pathname]);

    return (
        <div className="nav-container">
            <div className="nav-wrapper">
                {/* მოძრავი ფონი (სლაიდერი) */}
                <div
                    className="nav-slider"
                    style={{ transform: `translateX(${activeIndex * 100}%)` }}
                />

                <Link to="/" className={`nav-item ${activeIndex === 0 ? 'active' : 'inactive'}`}>
                    <div className="icon-slot"><img src={HomeIcon} alt="" className="custom-icon" /></div>
                    <span>მთავარი</span>
                </Link>

                <Link to="/about" className={`nav-item ${activeIndex === 1 ? 'active' : 'inactive'}`}>
                    <div className="icon-slot"><img src={AboutIcon} alt="" className="custom-icon" /></div>
                    <span>კომპანია</span>
                </Link>

                <Link to="/services" className={`nav-item ${activeIndex === 2 ? 'active' : 'inactive'}`}>
                    <div className="icon-slot"><img src={ServicesIcon} alt="" className="custom-icon" /></div>
                    <span>სერვისები</span>
                </Link>

                <Link to="/contact" className={`nav-item ${activeIndex === 3 ? 'active' : 'inactive'}`}>
                    <div className="icon-slot"><img src={ContactIcon} alt="" className="custom-icon" /></div>
                    <span>კონტაქტი</span>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;