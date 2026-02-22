import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
    return (
        <div className="contact-page-container">
            <div className="contact-split-layout">

                {/* Left Side: Details */}
                <div className="contact-text-side">
                    <h1 className="contact-main-title">დაგვიკავშირდით</h1>

                    <div className="contact-detail-block">
                        <label>ტელეფონი</label>
                        <p>+995 571 15 25 08</p>
                    </div>

                    <div className="contact-detail-block">
                        <label>ელ-ფოსტა</label>
                        <p>oazisiofficial@gmail.com</p>
                    </div>

                    <div className="contact-detail-block">
                        <label>Facebook</label>
                        <p>https://www.facebook.com/share/1BAiNNYhEw/</p>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default ContactSection;