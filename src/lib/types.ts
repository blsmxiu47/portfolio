import { z } from "zod";

export const projectCardSchema = z.object({
    title: z.string().nonempty(),
    summary: z.string().nonempty(),
    imageSrc: z.string().nonempty(),
    tags: z.array(z.string().nonempty()),
    githubLink: z.string().nonempty()
});

export type ProjectCardProps = z.infer<typeof projectCardSchema>;