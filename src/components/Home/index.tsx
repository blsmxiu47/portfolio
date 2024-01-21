import SocialLinks from '../SocialLinks';

import '../../index.css';

export default function Home() {
    return (
        <div className="mx-2 my-32">
            <div className="flex flex-col text-center">
                <h1 className="text-[4rem] mb-2 font-console">Hello world!<span role="img" aria-label="wave">👋</span></h1>
                <h2 className="text-[2rem] mb-1">My name is <strong className="text-[3rem] bg-clip-text text-transparent bg-gradient-to-r from-[#3F0071] to-[#FB2576]">Wes (he/they)</strong>.</h2>
                <h2 className="text-[1.75rem] mb-1">I'm a software engineer.</h2>
                <h2 className="text-[1.5rem] mb-1">I make stuff.</h2>
                <SocialLinks />
            </div>
        </div>
    )
}