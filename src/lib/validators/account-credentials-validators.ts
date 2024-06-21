import { z } from "zod";

export const AuthCredentialsValidator = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message:
      "Por favor, asegúrate de que tu contraseña tenga al menos 8 caracteres.",
  }),
});

export type TAuthCredentialsValidator = z.infer<typeof AuthCredentialsValidator>;
