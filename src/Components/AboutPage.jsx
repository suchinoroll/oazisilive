import React, { useEffect } from 'react';
import './AboutPage.css';

const AboutPage = () => {
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
      <main className="about-page">
        {/* Hero სექცია - დინამიკური ფონით */}
        <header className="about-hero reveal">
          <div className="floating-blob"></div>
          <div className="establishment-tag">დაარსდა 2018 წელს</div>
          <h1>
            ჩვენ ვაშენებთ<br />
            <span className="hero-gradient-text animated-gradient">მომავლის ოაზისს.</span>
          </h1>
          <p className="lead">
            შპს „ოაზისი“ წარმოადგენს სანდო პარტნიორს სამშენებლო და სარემონტო სფეროში. ჩვენი გუნდი აერთიანებს გამოცდილ პროფესიონალებს, რომელთა მონაწილეობით მრავალი წარმატებული პროექტი განხორციელდა.
          </p>
        </header>

        <div className="full-bleed-container">
          <h2 className="section-title reveal">ვინ ვართ ჩვენ.</h2>

          <div className="bento-grid">
            {/* მთავარი ისტორიის ბარათი */}
            <div className="bento-card card-wide reveal stagger-1 highlight-card">
              <div className="card-tag">ჩვენი იდენტობა</div>
              <h3>გამოცდილი პროფესიონალები</h3>
              <p>ჩვენი გუნდი აერთიანებს გამოცდილი პროფესიონალების ჯგუფს. დაარსების დღიდან, ჩვენი მიზანი უცვლელია: შევქმნათ სივრცეები, რომლებიც აკმაყოფილებს უმაღლეს მოთხოვნებს და მომხმარებელთა მოლოდინებს.</p>
            </div>

            {/* სტატისტიკის/აქცენტის ბარათი */}
            <div className="bento-card card-slim reveal stagger-2 accent-card">
              <div className="big-stat">2018</div>
              <p>წლიდან ვქმნით ხარისხს, რომელიც დროს უძლებს და ეყრდნობა ინოვაციურ მიდგომებს.</p>
            </div>

            {/* ხედვის ბარათი */}
            <div className="bento-card card-slim reveal stagger-1">
              <div className="icon-circle">✦</div>
              <h3>ჩვენი მიზანი</h3>
              <p>ვთავაზობთ სრული სპექტრის მომსახურებას — იდეის დაგეგმვიდან პროექტის დასრულებამდე, საერთაშორისო სტანდარტების დაცვით.</p>
            </div>

            {/* ტექნოლოგიების ბარათი (მუქი) */}
            <div className="bento-card card-wide card-dark reveal stagger-2 overflow-hidden">
              <div className="glass-effect"></div>
              <h3 className="white-text">თანამედროვე ტექნოლოგიები</h3>
              <p className="gray-text">ვეყრდნობით თანამედროვე ტექნოლოგიებსა და მაღალი ხარისხის მასალებს, რათა შედეგი სრულად შეესაბამებოდეს მომხმარებელთა მოლოდინებს.</p>
            </div>

            {/* ციტატის სექცია */}
            <div className="quote-wrapper reveal lively-quote">
              <div className="quote-icon">“</div>
              <blockquote>
                ჩვენთვის მთავარი ღირებულებებია ხარისხი, სანდოობა და პროფესიონალიზმი.
              </blockquote>
            </div>

            {/* დამატებითი ბარათები */}
            <div className="bento-card reveal stagger-1 border-accent">
              <h3>პასუხისმგებლობა</h3>
              <p>ჩვენ ვპასუხობთ თითოეულ დეტალზე. თქვენი ნდობა ჩვენი მთავარი კაპიტალია.</p>
            </div>

            <div className="bento-card reveal stagger-2 border-accent">
              <h3>პროფესიონალიზმი</h3>
              <p>ჩვენი გუნდი მუდმივად ვითარდება და ნერგავს სიახლეებს სამშენებლო პროცესში.</p>
            </div>
          </div>

          {/* პრინციპების სექცია */}
          <h2 className="section-title reveal">რატომ ოაზისი?</h2>
          <div className="process-section">
            <div className="step-card reveal stagger-1 lively-step">
              <span className="step-number">ხარისხი</span>
              <h3>უმაღლესი</h3>
              <p>საერთაშორისო სტანდარტების დაცვა ყოველ ეტაპზე.</p>
            </div>
            <div className="step-card reveal stagger-2 lively-step">
              <span className="step-number">სანდოობა</span>
              <h3>გამჭვირვალე</h3>
              <p>ნულოვანი ფარული ხარჯები და მკაფიო კომუნიკაცია.</p>
            </div>
            <div className="step-card reveal stagger-3 lively-step">
              <span className="step-number">დრო</span>
              <h3>დაცული</h3>
              <p>ჩვენ ვაფასებთ თქვენს დროს ისევე, როგორც საკუთარს.</p>
            </div>
            <div className="step-card reveal stagger-4 lively-step">
              <span className="step-number">სერვისი</span>
              <h3>პრემიუმ</h3>
              <p>ინდივიდუალური მიდგომა ყველა მომხმარებელთან.</p>
            </div>
          </div>
        </div>
      </main>
  );
};

export default AboutPage;