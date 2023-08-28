import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import "./index.scss";

const Contact = () => {
    return (
        <section className="container contact-page">
            <div className="contact-info">
                <h2>Send me a message</h2>
                <ContactForm />
            </div>
            <div className="contact-info">
                <ContactInfo />
            </div>
        </section>
    )
}

export default Contact;