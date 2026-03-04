import React, { useEffect, useRef } from 'react';
import './AboutPage.css';

const ServicesPage = () => {
    const observerRef = useRef(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-visible');
                    observerRef.current.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        document.querySelectorAll('.reveal').forEach(el => observerRef.current.observe(el));
        return () => observerRef.current?.disconnect();
    }, []);

    return (
        <main className="about-page">
            <header className="about-hero reveal">
                <div className="floating-blob"></div>
                <div className="establishment-tag">ჩვენი სერვისები</div>
                <h1>
                    სამშენებლო გადაწყვეტილებები.<br />
                    <span className="hero-gradient-text animated-gradient">მშვიდი ძილის გარანტია.</span>
                </h1>
                <p className="lead">
                    ჩვენ გთავაზობთ სრულ ციკლს იდეიდან გასაღების ჩაბარებამდე. ყოველი ეტაპი კონტროლდება უახლესი ტექნოლოგიებით.
                </p>
            </header>

            <div className="full-bleed-container">
                <h2 className="section-title reveal">რას ვასრულებთ.</h2>
                <div className="bento-grid">

                    {/* 1. Wide Card */}
                    <div className="bento-card card-wide reveal stagger-1">
                        <div className="card-tag">მშენებლობა</div>
                        <h3>კაპიტალური მშენებლობა</h3>
                        <p>სრული ციკლი: საძირკვლის მოწყობა, მონოლითური სამუშაოები და კედლების ამოყვანა უმაღლესი ხარისხის მასალებით.</p>
                    </div>

                    {/* 2. Slim Card */}
                    <div className="bento-card card-slim reveal stagger-2">
                        <div className="card-tag">დიზაინი</div>
                        <h3>პროექტირება</h3>
                        <p>სივრცის ფუნქციური დაგეგმარება და 3D ვიზუალიზაცია თქვენს გემოვნებაზე მორგებით.</p>
                    </div>

                    {/* 3. Slim Card */}
                    <div className="bento-card card-slim reveal stagger-1">
                        <div className="card-tag">განახლება</div>
                        <h3>რემონტი</h3>
                        <p>პრემიუმ ხარისხის შიდა მოპირკეთება: ლესვა, მოჭიმვა და სამღებრო სამუშაოები ლაზერული სიზუსტით.</p>
                    </div>

                    {/* 4. Wide Card (Dark) */}
                    <div className="bento-card card-wide card-dark reveal stagger-2">
                        <div className="glass-effect"></div>
                        <div className="card-tag">Premium</div>
                        <h3>გასაღების ჩაბარებით</h3>
                        <p style={{color: '#aaa'}}>თქვენ გვაწვდით გასაღებს, ჩვენ კი გიბრუნებთ საცხოვრებლად გამზადებულ, სუფთა და მყუდრო სახლს ყოველგვარი სტრესის გარეშე.</p>
                    </div>

                    {/* Quote (Full Width, Pure Black) */}
                    <div className="lively-quote reveal">
                        <div className="quote-icon">“</div>
                        <blockquote>„ჩვენ არ ვართ უბრალოდ შემსრულებლები, ჩვენ ვართ თქვენი პარტნიორები ამ პროცესში.“</blockquote>
                    </div>

                    {/* 5. Wide Card */}
                    <div className="bento-card card-wide reveal stagger-1">
                        <div className="card-tag">ინჟინერია</div>
                        <h3>საინჟინრო ქსელები</h3>
                        <p>ელექტროობა, წყალგაყვანილობა და გათბობის სისტემების მონტაჟი უსაფრთხოების ნორმების სრული დაცვით.</p>
                    </div>

                    {/* 6. Slim Card */}
                    <div className="bento-card card-slim reveal stagger-2">
                        <div className="card-tag">მართვა</div>
                        <h3>მენეჯმენტი</h3>
                        <p>ჩვენ ვმართავთ ყველა რგოლს — მომწოდებლებსა და ლოჯისტიკას, რათა თქვენ დაზოგოთ დრო.</p>
                    </div>
                </div>

                <h2 className="section-title reveal">სამუშაო პროცესი.</h2>
                <div className="process-section">
                    {[
                        { num: "01", title: "დათვალიერება", desc: "ობიექტის უფასო შეფასება და აზომვა." },
                        { num: "02", title: "ბიუჯეტი", desc: "დეტალური ხარჯთაღრიცხვის მომზადება." },
                        { num: "03", title: "ხელშეკრულება", desc: "ვადებისა და ხარისხის იურიდიული გარანტია." },
                        { num: "04", title: "ჩაბარება", desc: "დასრულებული ობიექტი და გარანტია." }
                    ].map((step, i) => (
                        <div key={i} className={`step-card reveal stagger-${i+1}`}>
                            <span className="step-number">{step.num}. ეტაპი</span>
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default ServicesPage;