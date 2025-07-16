import z from "zod";

export const validtesignin = z.object({
    email : z.string().trim(),
    password : z.string().trim()
})