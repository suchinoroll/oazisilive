import React, { useState, useEffect } from 'react';
import './ProjectsSection.css';

const ProjectsSection = () => {
    const [projects, setProjects] = useState([]);
    const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/1gYIP-fTwSgIpMCm-yPfg722jio5HPcZdfe2bwfir_cM/gviz/tq?tqx=out:csv";

    useEffect(() => {
        fetch(SHEET_CSV_URL)
            .then(res => res.text())
            .then(csvText => {
                const rows = csvText.split(/\r?\n/).slice(1);
                const data = rows.map(row => {
                    const columns = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
                    const clean = (str) => str ? str.replace(/^"|"$/g, '').trim() : "";

                    return {
                        name: clean(columns[0]),
                        status: clean(columns[1]),
                        image: clean(columns[2]),
                        description: clean(columns[3])
                    };
                }).filter(p => p.name);

                setProjects(data);
            });
    }, []);

    const getGeorgianStatus = (status) => {
        const s = status?.toLowerCase();
        if (s === 'upcoming') return 'მომავალი';
        if (s === 'active') return 'მიმდინარე';
        if (s === 'finished') return 'დასრულებული';
        return status;
    };

    return (
        <section className="projects-scroll-section">
            {/* Title inside the section removed because it's now in the Navbar */}
            <div className="projects-slider">
                {projects.map((item, index) => (
                    <div className="project-card" key={index}>
                        <div className="project-image-container">
                            <img src={item.image} alt={item.name} className="project-bg-image" />

                            <div className={`project-overlay-pill ${item.description ? 'has-desc' : ''}`}>
                                <div className="pill-header">
                                    <span className="pill-title">{item.name}</span>
                                    {/* status class is forced to lowercase to match CSS */}
                                    <span className={`pill-status ${item.status?.toLowerCase()}`}>
                                        {getGeorgianStatus(item.status)}
                                    </span>
                                </div>
                                {item.description && (
                                    <div className="pill-details">
                                        <p>{item.description}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
