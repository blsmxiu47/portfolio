import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logoPython from '../../assets/images/logo_python.svg';
import logoGolang from '../../assets/images/logo_golang.svg';
import logoLinux from '../../assets/images/logo_linux.svg';
import logoJs from '../../assets/images/logo_js.svg';
import logoReact from '../../assets/images/logo_reactjs.svg';
import logoVue from '../../assets/images/logo_vuejs.svg';
import logoCpp from '../../assets/images/logo_c_plus_plus.svg';
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
                    <img src={logoPython} alt="Python logo" />
                </Pulse>
                <Pulse delay={1000} sequentialDelay={2000} >
                    <img src={logoGolang} alt="Golang logo" />
                </Pulse>
                <Pulse delay={1000} sequentialDelay={3000} >
                    <img src={logoLinux} alt="Linux logo" />
                </Pulse>
                <Pulse delay={1000} sequentialDelay={4000} >
                    <img src={logoJs} alt="Javascript logo" />
                </Pulse>
                <Pulse delay={1000} sequentialDelay={5000} >
                    <img src={logoReact} alt="React logo" />
                </Pulse>
                <Pulse delay={1000} sequentialDelay={6000} >
                    <img src={logoVue} alt="Vue logo" />
                </Pulse>
                <Pulse delay={1000} sequentialDelay={6000} >
                    <img src={logoCpp} alt="C++ logo" />
                </Pulse>
            </SequentialShow>
        </div>
    )
}

export default About;