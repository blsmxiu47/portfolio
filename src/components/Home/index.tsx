import SocialLinks from '../SocialLinks';
import './index.scss';

const Home = () => {
    return (
        <div className="container home-page">
            <div className="hero">
                <h1 className="hello">Hello world!<span role="img" aria-label="wave">👋</span></h1>
                <h2>My name is <strong className="main-name">Wes (he/they)</strong>.</h2>
                <h2>I'm a software engineer.</h2>
                <h2>I make stuff.</h2>
                <SocialLinks />
            </div>
        </div>
    )
}

export default Home;