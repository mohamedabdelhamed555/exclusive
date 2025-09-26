"use server";
import { getToken } from "@/lib/serverUtilites";
import { addressFormSchema, addressFormStateType } from "@/schema/address.schema";

export async function handlePayment(formState:addressFormStateType , formData : FormData):Promise<addressFormStateType> {
    
    const shippingAddress = {
        "details": formData.get("details"),
        "phone": formData.get("phone"),
        "city": formData.get("city")
        }
        const cartId = formData.get("cartId")
        const PaymentMethod = formData.get("PaymentMethod")

        const parsedData = addressFormSchema.safeParse({...shippingAddress,cartId,PaymentMethod})
            if(!parsedData.success){
                return {
                    success : false,
                    error : parsedData.error?.flatten().fieldErrors,
                    message : null,
                    callbackUrl:"/cart"
                }
            }

    try {
        const token = await getToken()

        const endPoint = PaymentMethod === "cash"
        ? `api/v1/orders/${cartId}` : `api/v1/orders/checkout-session/${cartId}?url=${process.env.NEXTAUTH_URL}`
        const res = await fetch(
            `${process.env.API_BASE_URL}/${endPoint}`,
            {
                method :"POST",
                headers :{
                    "Content-Type":"application/json",
                    token : token as string,
                },
                body : JSON.stringify({shippingAddress})
            }
        )


        const data = await res.json()
        if(!res.ok){
            return {
                success : false,
                error : {},
                message : data.message || "Faild Payment",
                callbackUrl : "/cart",
            }
        }

        return {
            success : true,
            error : {},
            message : data.message || "Your Payment Done Successfully",
            callbackUrl : PaymentMethod === "cash" ? "/allorders" : data.session.url,
        }        
    } catch (error) {
        return {
            success : false,
            error : {},
            message : (error as string) || "Faild Payment"
        }
    }
}