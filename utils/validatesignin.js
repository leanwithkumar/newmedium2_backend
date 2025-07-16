import { z } from "zod";

export const validtesignin = z.object({
  email: z.string().email("Invalid email format").trim(),
  password: z.string().min(6, "Password must be at least 6 characters").trim()
});
