import { z } from "zod";

export const contactSchema = z.object({
    first_name: z.string().nonempty(),
    last_name: z.string().nonempty(),
    email: z.string().email(),
    subject: z.string().nonempty(),
    message: z.string().nonempty()
});


export type TContactSchema = z.infer<typeof contactSchema>;