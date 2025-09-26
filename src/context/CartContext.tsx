import { ICartResponse } from "@/interface/cart.interface";
import { getUserCart } from "@/services/cart.services";
import { createContext, useContext, useEffect, useState } from "react";

interface ICartContext {
    cartDetails: ICartResponse | null;
    setCartDetails: React.Dispatch<React.SetStateAction<ICartResponse | null>>;
    getCartDetails: () =>Promise<void>
}

const CartContext = createContext<ICartContext | null>(null);

import React from 'react'

export default function CartContextProvider({ children }: { children: React.ReactNode }) {

    const [cartDetails, setCartDetails] = useState<ICartResponse | null>(null)

    async function getCartDetails() {
            const { data }: { data: ICartResponse } = await getUserCart();
            setCartDetails(data);
        }       

    useEffect(() => {   
        getCartDetails();
    }, [])

    return (
        <CartContext.Provider value={{ cartDetails, setCartDetails, getCartDetails }}>
            {children}
        </CartContext.Provider>
    )
}


export function useCart() {
    const context = useContext(CartContext)

    if (!context) {
        throw new Error("useCart must be used within CartContextProvider")
    }
    return context
}