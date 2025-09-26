"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { IFavoriteResponse } from "@/interface/favorite.interface";
import { getUserFavorite } from "@/services/favorite.services";

interface IFavoriteContext {
    FavoriteDetails: IFavoriteResponse | null;
    setFavoriteDetails: React.Dispatch<React.SetStateAction<IFavoriteResponse | null>>;
    getFavoriteDetails: () => Promise<void>
}

const FavoriteContext = createContext<IFavoriteContext | null>(null);

import React from 'react'

export default function FavoriteContextProvider({ children }: { children: React.ReactNode }) {

    const [FavoriteDetails, setFavoriteDetails] = useState<IFavoriteResponse | null>(null)

    async function getFavoriteDetails() {
        const { data }: { data: IFavoriteResponse } = await getUserFavorite();
        setFavoriteDetails(data);
    }

    useEffect(() => {
        getFavoriteDetails();
    }, [])

    return (
        <FavoriteContext.Provider value={{ FavoriteDetails, setFavoriteDetails, getFavoriteDetails }}>
            {children}
        </FavoriteContext.Provider>
    )
}


export function useFavorite() {
    const context = useContext(FavoriteContext)

    if (!context) {
        throw new Error("useFavorite must be used within FavoriteContextProvider")
    }
    return context
}