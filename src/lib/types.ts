import { z } from "zod";

export const contactSchema = z.object({
    first_name: z.string().nonempty(),
    last_name: z.string().nonempty(),
    email: z.string().email(),
    subject: z.string().nonempty(),
    message: z.string().nonempty()
});

export const projectCardSchema = z.object({
    title: z.string().nonempty(),
    summary: z.string().nonempty(),
    imageSrc: z.string().nonempty(),
    tags: z.array(z.string().nonempty()),
    githubLink: z.string().nonempty()
});

export type ProjectCardProps = z.infer<typeof projectCardSchema>;
export type TContactSchema = z.infer<typeof contactSchema>;