import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import "./index.scss";

const Contact = () => {
    return (
        <section className="container contact-page">
            <div className="contact-form">
                <h1>Send me a message</h1>
                <ContactForm />
            </div>
            <div>
                <ContactInfo />
            </div>
        </section>
    )
}

export default Contact;