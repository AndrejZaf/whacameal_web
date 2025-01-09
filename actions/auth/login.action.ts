"use server";

import { signIn } from "@/auth";
import { findByEmail } from "@/data/user.data";
import { LoginSchema } from "@/lib/validation/login.schema";
import { AuthError } from "next-auth";
import { z } from "zod";

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values);
    if (!validatedFields.success) {
        return { error: "Invalid fields!" };
    }

    const { email, password } = validatedFields.data;
    const existingUser = await findByEmail(email);
    if (!existingUser || !existingUser.email || !existingUser.password) {
        return { error: "Email does not exist" };
    }

    try {
        await signIn("credentials", { email, password, redirectTo: "/" });
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { error: "Invalid credentials" };
                default:
                    return { error: "Something went wrong!" };
            }
        }
        throw error;
    }
};