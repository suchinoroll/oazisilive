import React from 'react';
import './StatsSection.css';

const StatsSection = () => {
    // Hardcoded data for now
    const data = {
        finished: 50,
        ongoing: 2
    };

    return (
        <section className="stats-section">
            <div className="stats-container">

                {/* LEFT CARD: Finished Projects */}
                <div className="stat-card card-green">
                    <div className="giant-number num-left">{data.finished}</div>
                    <div className="label-group">
                        <span className="label-text text-black">დასრულებული</span>
                        <span className="label-text text-black">პროექტი</span>
                    </div>
                </div>

                <div className="stat-card card-black">
                    <div className="giant-number num-right">{data.ongoing}</div>
                    <div className="label-group">
                        <span className="label-text text-green">მიმდინარე</span>
                        <span className="label-text text-green">პროექტი</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default StatsSection;