"use client"
import React, { useTransition } from 'react'
import { Button } from '../ui/button'
import { addToCart } from '@/services/cart.services';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';
import { LoaderCircle } from 'lucide-react';
export default function AddCartToCarts({ productId, ...props }: { productId: string, [key: string]: string }) {

    const [isPending, startTransition] = useTransition()
    const { getCartDetails } = useCart()

    async function addProductToCart(productId: string) {
        startTransition(async () => {
            const res = await addToCart(productId)
            if (res.success) {
                toast.success(res.message, { position: "top-center" })
                getCartDetails()
            } else {
                toast.error(res.message, { position: "top-center" })
            }
        })
    }
    return (
        <Button 
        disabled={isPending}
        onClick={() => addProductToCart(productId)}
        {...props}>
            {isPending ? <LoaderCircle className=' animate-spin'/> :"Add To Cart"}
        </Button>
    )
}





