"use server"

import { getToken } from "@/lib/serverUtilites";


export async function getUserFavorite() {
    try {

       const token = await getToken();
        
        const res = await fetch(`${process.env.API_BASE_URL}/api/v1/wishlist`, {
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
            message : data.message || "Faild to Fetsh Favorite"
        };
        }
        return {
            data:data,
            success:true,
            message :data.message || "Fetshed Favorite Successfully"
        };
    } catch (error) {
        return {
            data:null,
            success:false,
            message :error as string || "SomeThing Went Wrong"
        };
    }
}


export async function addToFavorite(productId : string) {
    try {

       const token = await getToken();
        
        const res = await fetch(`${process.env.API_BASE_URL}/api/v1/wishlist`, {
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
            message : data.message || "Faild to Add Favorite"
        };
        }
        return {
            data:data,
            success:true,
            message :data.message || "Add Favorite Successfully"
        };
    } catch (error) {
        return {
            data:null,
            success:false,
            message :error as string || "SomeThing Went Wrong"
        };
    }
}


export async function removeItemFromFavorite(productId : string) {
    try {

       const token = await getToken();
        
        const res = await fetch(`${process.env.API_BASE_URL}/api/v1/wishlist/${productId}`, {
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
            message : data.message || "Faild to Remove this Favorite"
        };
        }
        return {
            data:data,
            success:true,
            message :data.message || "Remove this Favorite Successfully"
        };
    } catch (error) {
        return {
            data:null,
            success:false,
            message :error as string || "SomeThing Went Wrong"
        };
    }
}


export async function updateQuantityFavorite(productId : string , count :number) {
    try {

       const token = await getToken();
        
        const res = await fetch(`${process.env.API_BASE_URL}/api/v1/wishlist/${productId}`, {
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