import { useState } from "react";
import { push, set } from "firebase/database";
import ContactInfo from "./ContactInfo";
import { messagesRef } from "../../firebase";

const Contact = () => {
    const [state, setState] = useState({
        first_name: "",
        last_name: "",
        email: "",
        subject: "",
        message: "",
    });

    const { first_name, last_name, email, subject, message } = state;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!first_name || !last_name || !email || !subject || !message) {
            alert("Please fill out all fields");
        } else {
            const newMessageRef = push(messagesRef);
            set(newMessageRef, state);
            
            alert("Message sent!");
            setState({
                first_name: "",
                last_name: "",
                email: "",
                subject: "",
                message: "",
            });
        }
    };

    return (
        <section className="container contact-page">
            <div>
                <h1>Send me a message</h1>
                <form
                      id="contactForm"
                      className="contactForm"
                      onSubmit={handleSubmit}
                >
                    <div className="form-group">
                        <label htmlFor="first_name">First Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="first_name"
                            value={first_name}
                            placeholder="Abed"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="last_name">Last Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="last_name"
                            value={last_name}
                            placeholder="Nadir"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            className="form-control"
                            type="text"
                            name="email"
                            value={email}
                            placeholder="Your email address"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                            className="form-control"
                            type="text"
                            name="subject"
                            value={subject}
                            placeholder="What do you want?"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <input
                            className="form-control"
                            type="text"
                            name="message"
                            value={message}
                            placeholder="No really, what do you want?"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="submit"
                            value="Send Message"
                        />
                    </div>
                </form>
            </div>
            <ContactInfo />           
        </section>
    )
}

export default Contact;