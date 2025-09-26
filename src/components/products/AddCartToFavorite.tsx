"use client"
import React, { useTransition, useMemo } from 'react'
import { Button } from '../ui/button'
import { useFavorite } from '@/context/FavoriteContext';
import { toast } from 'sonner';
import { Heart, LoaderCircle } from 'lucide-react';
import { addToFavorite } from '@/services/favorite.services';
import { IFavoriteProductDetails } from '@/interface/favorite.interface';

export default function AddProductToFavorites({ productId, ...props }: { productId: string, [key: string]: unknown }) {

    const [isPending, startTransition] = useTransition()
    const { FavoriteDetails, getFavoriteDetails } = useFavorite()

    const isInFavorite = useMemo(() => {
        return FavoriteDetails?.data?.some((item: IFavoriteProductDetails) => item._id === productId)
    }, [FavoriteDetails, productId])

    async function addProductToFavorite(productId: string) {
        startTransition(async () => {
            const res = await addToFavorite(productId)
            if (res.success) {
                toast.success(res.message, { position: "top-center" })
                getFavoriteDetails()
            } else {
                toast.error(res.message, { position: "top-center" })
            }
        })
    }

    return (
        <Button
            className="bg-white text-black hover:bg-gray-200"
            disabled={isPending}
            onClick={() => addProductToFavorite(productId)}
            {...props}>
            {isPending ? (
                <LoaderCircle className="animate-spin" />
            ) : (
                <Heart
                    className={`size-8 ${isInFavorite ? "text-red-500 fill-red-500" : "text-black"
                        }`}
                />
            )}
        </Button>
    )
}
