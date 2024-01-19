import logoPython from '../../assets/images/logo_python.svg';
import logoGolang from '../../assets/images/logo_golang.svg';
import logoLinux from '../../assets/images/logo_linux.svg';
import logoJs from '../../assets/images/logo_js.svg';
import logoReact from '../../assets/images/logo_reactjs.svg';
import logoVue from '../../assets/images/logo_vuejs.svg';
import logoCpp from '../../assets/images/logo_c_plus_plus.svg';

import Pulse from './Pulse';
import SequentialShow from './SequentialShow';

export default function About() {
    return (
        <div className="mx-2 my-32">
            <div className="flex flex-col text-center">
                <div className="my-4 md:w-[50%] md:text-left">
                    <h1 className="text-[4rem] mb-2">About Me</h1>
                    <p>
                        I'm a full-stack engineer with a background in data science.
                    </p>
                    <p>
                        Curiosity is my driving force (also coffee <span role="img" aria-label="coffee mug">☕</span>).
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
        </div>
    )
}