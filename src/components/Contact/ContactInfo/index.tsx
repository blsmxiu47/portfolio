import SocialLinks from "../../SocialLinks";

const ContactInfo = () => {
    return (
        <div>
            <h2>Get in touch</h2>
            <div>
                <img aria-label="self-portrait"></img>
                <p>I am a super-curious, easily-inspired developer. I have a lot to learn and I love that.</p>
                <p>If you value growth opportunitues and open communication, feel free to reach out.</p>
            </div>
            <ul>
                <li>Phone: 1-800-867-5309</li>
                <li>Email: but you can just send a message here..</li>
                <li>Fax: what is a fax machine anyway?</li>
            </ul>
            <SocialLinks />
        </div>
    )
}

export default ContactInfo;