import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function AllOrders() {
    return (
        <div className='flex flex-col items-center justify-center h-screen gap-4'>
            <h2 className='text-xl font-bold'>Your Payment Done Successfully</h2>
            <Button variant="destructive">
                <Link href={"/products"}>Return to Shop</Link>
            </Button>
        </div>
    )
}
