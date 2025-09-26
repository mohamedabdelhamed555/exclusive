import ProductSlider from '@/components/products/productSlider';
import { IProduct } from '@/interface/product.interface'
import { Star } from 'lucide-react';
import React from 'react'
import { getProductDetails } from '@/services/products.services';
import AddCartToCarts from '@/components/products/AddCartToCarts';


export default async function ProductDetails({ params: { productId } }: { params: { productId: string } }) {



    const { data: product }: { data: IProduct } = await getProductDetails(productId);



    return (
        <section className='py-20'>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center">
                    <div className='lg:col-span-2'>
                        <ProductSlider images={product.images} />
                    </div>
                    <div className='lg:col-span-1'>
                        <h1 className='font-semibold text-2xl mb-4'>{product.title}</h1>
                        <div className="flex items-center gap-x-1 mb-4">
                            <Star className='text-yellow-400 fill-amber-400' />
                            <span className='text-sm text-gray-400'>({product.ratingsQuantity} review)</span>
                        </div>
                        <span className='text-2xl block mb-6'>${product.price}</span>
                        <p className='text-sm border-b border-b-gray-300 pb-6'>{product.description}</p>
                        <AddCartToCarts productId={product._id} className='w-full' variant="destructive" />
                    </div>
                </div>
            </div>
        </section>
    )
}
