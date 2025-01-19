import { z } from 'zod';

export const registrationSchema = z.object({
    email: z.string().email("Invalid email format"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    name: z.string().min(2, "Name must be at least 2 characters"),
});

export const loginSchema = z.object({
    email: z.string().email("Invalid email format"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

export type RegistrationInput = z.infer<typeof registrationSchema>;
export type LoginInput = z.infer<typeof loginSchema>;

export const validateRegistration = (data: RegistrationInput) => {
    return registrationSchema.parse(data);
}

export const validateLogin = (data: LoginInput) => {
    return loginSchema.parse(data);
}