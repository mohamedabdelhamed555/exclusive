
import * as z from "zod"

export const loginFormSchema = z.object({
  email: z.email({message:"Please Enter a Valid Email"}),
  password: z.string().nonempty({message:"password is Required"}).min(8,"password must be at least contain 6 characters or numbers")
})

export type LoginFormPayload = z.infer<typeof loginFormSchema>