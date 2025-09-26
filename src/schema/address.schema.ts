
import * as z from "zod"

export const addressFormSchema = z.object({
    PaymentMethod: z.enum(["cash","card"],{
      message:"Payment Method is required",
    }),
    cartId: 
    z.string().
    nonempty({message: "cartId is required"}),
    details: 
    z.string().
    nonempty({message: "Address is required"})
    .min(4,"Address must be at least 4 character"),
    city: 
    z.string().
    nonempty({message: "city is required"})
    .min(4,"city must be at least 4 character"),

  phone : z.string().nonempty({message:"Phone is required"})
  .regex(/^(?:01(?:0|1|2|5)\d{8}|(?:\+20|002)1(?:0|1|2|5)\d{8})$/,{
    message: "Invalid Egyption Phone Number"
  })
})

export type addressFormType = z.infer<typeof addressFormSchema>





export const addressFormState = {
  success : false,
  error : {
    cartId : [],
    details :[],
    city :[],
    phone:[],
    PaymentMethod:[]
  },
  message : null,
  callbackUrl:""
}

export type addressFormStateType = {
  success : boolean,
  error : {
    cartId?:string[],
    details?:string[],
    city?:string[],
    phone?:string[],
    PaymentMethod?:string[]
  };
  message:string | null,
  callbackUrl?: string
} 