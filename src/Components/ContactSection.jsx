import React, { useEffect } from 'react';
import './AboutPage.css';

const ContactSection = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-visible');
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }, []);

    return (
        <main className="about-page" style={{backgroundColor: '#EBECEE'}}>
            <header className="about-hero reveal">
                <h1>დაგვიკავშირდით.<br />
                    <span className="hero-gradient-text animated-gradient">დავიწყოთ პროექტი ერთად.</span>
                </h1>
            </header>

            <div className="full-bleed-container">
                <div className="bento-grid">
                    {/* Phone Card - Full Width (Wide) */}
                    <a href="tel:+995571152508" className="bento-card card-wide reveal stagger-1 contact-link">
                        <span className="contact-label">ტელეფონი</span>
                        <p className="contact-value">+995 571 15 25 08</p>
                    </a>

                    {/* Email Card (Slim) */}
                    <a href="mailto:oazisiofficial@gmail.com" className="bento-card card-slim reveal stagger-2 contact-link" style={{background: '#000', color: '#fff'}}>
                        <span className="contact-label">ელ-ფოსტა</span>
                        <p className="contact-value" style={{fontSize: '18px'}}>oazisiofficial@gmail.com</p>
                    </a>

                    {/* Facebook Card (Slim) */}
                    <a href="https://www.facebook.com/share/1BAiNNYhEw/" target="_blank" rel="noreferrer" className="bento-card card-slim reveal stagger-1 contact-link">
                        <span className="contact-label">Facebook</span>
                        <p className="contact-value" style={{fontSize: '22px'}}>Oasis Official</p>
                    </a>
                </div>
            </div>
        </main>
    );
};

export default ContactSection;