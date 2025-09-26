
import * as z from "zod"

export const registerFormSchema = z.object({
    name: z.string().nonempty({message: "Name is required"})
    .min(4,"Nmae must be at least 4 character"),
  email: z.email({message:"Please Enter a Valid Email"}),
  password: z.string().nonempty({message:"password is Required"}).min(8,"password must be at least contain 6 characters or numbers"),
  rePassword: z.string().nonempty({message:"password is Required"}).min(8,"password must be at least contain 6 characters or numbers"),
phone : z.string().nonempty({message:"Phone is required"})
  .regex(/^(?:01(?:0|1|2|5)\d{8}|(?:\+20|002)1(?:0|1|2|5)\d{8})$/,{
    message: "Invalid Egyption Phone Number"
  })
}).refine(data => data.password===data.rePassword,{
    message : "Password don't match",
    path: ["rePassword"]
})

export type RegisterSchema = z.infer<typeof registerFormSchema>





export const formState = {
  success : false,
  error : {},
  message : null
}

export type formStateType = {
  success : boolean,
  error : {
    name?:string[],
    email?:string[],
    password?:string[],
    rePassword?:string[],
    phone?:string[],
  };
  message:string | null
} 