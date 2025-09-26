"use client"
import CartContextProvider from '@/context/CartContext'
import { SessionProvider } from 'next-auth/react'
import React from 'react'

export default function providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <CartContextProvider>{children}</CartContextProvider>
    </SessionProvider>
  )
}
