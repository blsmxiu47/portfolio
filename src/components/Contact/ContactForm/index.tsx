import { push, set } from "firebase/database";
import { useForm } from "react-hook-form";
import { messagesRef } from "../../../firebase";
import { zodResolver } from "@hookform/resolvers/zod";
import { TContactSchema, contactSchema } from "../../../lib/types";

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<TContactSchema>({
        resolver: zodResolver(contactSchema)
    });

    const onSubmit = async (data: TContactSchema) => {
        const newMessageRef = push(messagesRef);
        set(newMessageRef, data)
        .then(() => {
            // TODO: replace with nicer modal
            alert("Message received. Thank you!");
        })
        .catch((error) => {
            // TODO: replace with nicer modal
            console.log(error);
        });
    }

    return (
        <form
            id="contactForm"
            className="contactForm"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="form-group">
                <label htmlFor="first_name">First Name</label>
                <input
                    {...register("first_name")}
                    className="form-input"
                    type="text"
                    placeholder="Abed"
                />
            </div>
            <div className="form-group">
                <label htmlFor="last_name">Last Name</label>
                <input
                    {...register("last_name")}
                    className="form-input"
                    type="text"
                    placeholder="Nadir"
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    {...register("email")}
                    className="form-input"
                    type="text"
                    placeholder="Your email address"
                />
                {errors.email && (
                    <p className="error-message">{`${errors.email.message}`}</p>
                )}
            </div>
            <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                    {...register("subject")}
                    className="form-input"
                    type="text"
                    placeholder="What do you want?"
                />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <input
                    {...register("message")}
                    className="form-input"
                    type="text"
                    placeholder="No really, what do you want?"
                />
            </div>
            <div className="form-group">
                <button
                    disabled={isSubmitting}
                    type="submit"
                    className="btn__submit"
                >
                    Send Message
                </button>
            </div>
        </form>
    )
}

export default ContactForm;