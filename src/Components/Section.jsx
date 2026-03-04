import "./Section.css";
const Section = ({ id, title, description, image, imageRight }) => {
    return (
        <section id={id} className={`split-section ${imageRight ? 'reverse' : ''}`}>
            <div className="section-half illustration-container">
                <img src={image} alt={title} />
            </div>
            <div className="section-half text-container">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </section>
    );
};

export default Section;
