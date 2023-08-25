import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
    return (
        <section className="container contact-page">
            <div>
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