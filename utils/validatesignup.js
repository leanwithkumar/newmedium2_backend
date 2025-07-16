import { z } from "zod";

export const validatesignup = z.object({
  username: z
    .string()
    .trim()
    .min(5, { message: "Username must be at least 5 characters long" }),
    
  email: z
    .string()
    .trim()
    .email({ message: "Invalid email format" }),

  password: z
    .string()
    .trim()
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(10, { message: "Password must be at most 10 characters long" }),
});
