import './index.scss';

const About = () => {
    return (
        <div className="container about-page">
            <div className="hero">
                <h1>About Me</h1>
                <p>
                    I'm a self-taught developer with a background in data science.
                </p>
                <p>
                    Curiosity is my driving force (also coffee <span role="img" aria-label="coffee mug">☕</span> ngl).
                </p>
            </div>
            <div className="skills-container">
                <p>tktk: a few clusters of logos from my tech stack fading in and out:</p>
                <p>Should maybe distinguish between categories perhaps - but like Python+DA/DS tools, JS+React+Vue, Rust+etc...</p>
            </div>
        </div>
    )
}

export default About;