"use server"

import { getToken } from "@/lib/serverUtilites";


export async function getUserCart() {
    try {

       const token = await getToken();
        
        const res = await fetch(`${process.env.API_BASE_URL}/api/v1/cart`, {
            method: "GET",
            headers: {
                token : token as string,
            },
        });

        const data = await res.json();
        if (!res.ok) {
            return {
            data:null,
            success:false,
            message : data.message || "Faild to Fetsh Cart"
        };
        }
        return {
            data:data,
            success:true,
            message :data.message || "Fetshed Cart Successfully"
        };
    } catch (error) {
        return {
            data:null,
            success:false,
            message :error as string || "SomeThing Went Wrong"
        };
    }
}


export async function removeUserCart() {
    try {

       const token = await getToken();
        
        const res = await fetch(`${process.env.API_BASE_URL}/api/v1/cart`, {
            method: "DELETE",
            headers: {
                token : token as string,
            },
        });

        const data = await res.json();
        
        if (!res.ok) {
            return {
            data:null,
            success:false,
            message : data.message || "Faild to Remove Cart"
        };
        }
        return {
            data:data,
            success:true,
            message :data.message || "Remove Cart Successfully"
        };
    } catch (error) {
        return {
            data:null,
            success:false,
            message :error as string || "SomeThing Went Wrong"
        };
    }
}


export async function addToCart(productId : string) {
    try {

       const token = await getToken();
        
        const res = await fetch(`${process.env.API_BASE_URL}/api/v1/cart`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
                token : token as string,
            },
            body: JSON.stringify({productId})
        });

        const data = await res.json();
        
        if (!res.ok) {
            return {
            data:null,
            success:false,
            message : data.message || "Faild to Add Cart"
        };
        }
        return {
            data:data,
            success:true,
            message :data.message || "Add Cart Successfully"
        };
    } catch (error) {
        return {
            data:null,
            success:false,
            message :error as string || "SomeThing Went Wrong"
        };
    }
}


export async function removeItemFromCart(productId : string) {
    try {

       const token = await getToken();
        
        const res = await fetch(`${process.env.API_BASE_URL}/api/v1/cart/${productId}`, {
            method: "DELETE",
            headers: {
                "Content-Type":"application/json",
                token : token as string,
            },
        });

        const data = await res.json();
        
        if (!res.ok) {
            return {
            data:null,
            success:false,
            message : data.message || "Faild to Remove this Cart"
        };
        }
        return {
            data:data,
            success:true,
            message :data.message || "Remove this Cart Successfully"
        };
    } catch (error) {
        return {
            data:null,
            success:false,
            message :error as string || "SomeThing Went Wrong"
        };
    }
}


export async function updateQuantitycart(productId : string , count :number) {
    try {

       const token = await getToken();
        
        const res = await fetch(`${process.env.API_BASE_URL}/api/v1/cart/${productId}`, {
            method: "PUT",
            headers: {
                "Content-Type":"application/json",
                token : token as string,
            },
            body : JSON.stringify({count})
        });

        const data = await res.json();
        
        if (!res.ok) {
            return {
            data:null,
            success:false,
            message : data.message || "Faild to Update Quantity"
        };
        }
        return {
            data:data,
            success:true,
            message :data.message || "Update Quantity Successfully"
        };
    } catch (error) {
        return {
            data:null,
            success:false,
            message :error as string || "SomeThing Went Wrong"
        };
    }
}