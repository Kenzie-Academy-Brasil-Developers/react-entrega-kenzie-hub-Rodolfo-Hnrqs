import { z } from "zod";

export const registerFormSchema = z.object({
    name: z.string().min(3, "O nome é obrigatório e precisa ter pelo menos 3 caracteres"),
    email: z.string().min(1, "O e-mail é obrigatório").email("Forneça um e-mail válido"),
    bio: z.string().min(1, "O campo é obrigatório"),
    course_module: z.string().min(1, "Selecione o módulo"),
    confirm: z.string().min(1, "Por favor confirme sua senha"),
    contact: z.string().min(1, "O campo é obrigatório"),
    password: z.string().min(8, { message: "A senha é obrigatória e precisa de mínimo 8 caracteres"})
    .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
    .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
    .regex(/(?=.*[!#@$%&])/, "É necessário ao menos um caractere especial")
    .regex(/(?=.*?[0-9])/, "É necessário ao menos um número"),
}).refine(({ password, confirm }) => confirm === password, {
    message: "As senhas precisam corresponder",
    path: ["confirm"],
  })