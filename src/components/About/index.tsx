import { faPython, faGolang, faLinux, faJs, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';
import Pulse from './Pulse';
import SequentialShow from './SequentialShow';

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
            <SequentialShow delay={1000}>
                <Pulse delay={1000} sequentialDelay={1000} >
                    <FontAwesomeIcon icon={faPython} size="3x" />
                </Pulse>
                <Pulse delay={1000} sequentialDelay={2000} >
                    <FontAwesomeIcon icon={faGolang} size="3x" />
                </Pulse>
                <Pulse delay={1000} sequentialDelay={3000} >
                    <FontAwesomeIcon icon={faLinux} size="3x" />
                </Pulse>
                <Pulse delay={1000} sequentialDelay={4000} >
                    <FontAwesomeIcon icon={faJs} size="3x" />
                </Pulse>
                <Pulse delay={1000} sequentialDelay={5000} >
                    <FontAwesomeIcon icon={faReact} size="3x" />
                </Pulse>
                <Pulse delay={1000} sequentialDelay={6000} >
                    <FontAwesomeIcon icon={faVuejs} size="3x" />
                </Pulse>
            </SequentialShow>
        </div>
    )
}

export default About;