import React, { useState, useEffect } from 'react';
import './ProjectsSection.css';

const ProjectsSection = () => {
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/1gYIP-fTwSgIpMCm-yPfg722jio5HPcZdfe2bwfir_cM/gviz/tq?tqx=out:csv";

    // Prevent background scrolling when modal is open
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedProject]);

    useEffect(() => {
        fetch(SHEET_CSV_URL)
            .then(res => res.text())
            .then(csvText => {
                const rows = csvText.split(/\r?\n/).slice(1);
                const data = rows.map(row => {
                    const columns = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
                    const clean = (str) => str ? str.replace(/^"|"$/g, '').trim() : "";

                    // Support multiple images separated by commas in your sheet
                    const imageString = clean(columns[2]);
                    const images = imageString.includes(',')
                        ? imageString.split(',').map(img => img.trim())
                        : [imageString];

                    return {
                        name: clean(columns[0]),
                        status: clean(columns[1]),
                        images: images,
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
            <div className="projects-slider">
                {projects.map((item, index) => (
                    <div className="project-card" key={index} onClick={() => setSelectedProject(item)}>
                        <div className="project-image-container">
                            <img src={item.images[0]} alt={item.name} className="project-bg-image" />
                            <div className="project-overlay-pill">
                                <div className="pill-header">
                                    <span className="pill-title">{item.name}</span>
                                    <span className={`pill-status ${item.status?.toLowerCase()}`}>
                                        {getGeorgianStatus(item.status)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setSelectedProject(null)}>&times;</button>

                        <div className="modal-body">
                            <div className="modal-text-content">
                                <span className={`pill-status ${selectedProject.status?.toLowerCase()}`}>
                                    {getGeorgianStatus(selectedProject.status)}
                                </span>
                                <h1>{selectedProject.name}</h1>
                                <p>{selectedProject.description || "ინფორმაცია მალე დაემატება!"}</p>
                            </div>

                            <div className="modal-gallery">
                                {selectedProject.images.map((img, idx) => (
                                    <div className="gallery-item" key={idx}>
                                        <img src={img} alt={`${selectedProject.name} ${idx}`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ProjectsSection;