import Image from 'next/image';
import { Star } from 'lucide-react';
import { IProduct } from '@/interface/product.interface';
import Link from 'next/link';
import AddCartToCarts from './AddCartToCarts';
import AddProductToFavorites from './AddCartToFavorite';

export default function ProductItem({ product }: { product: IProduct }) {
    return (
        <div>
            <picture className=' relative group'>
                <Link href={`/products/${product._id}`}>
                    <Image
                        src={product.imageCover}
                        alt={product.title}
                        width={270}
                        height={250}
                        loading='lazy'
                        className='w-full h-[15.625rem] object-contain bg-gray-100 mb-4'
                    />
                </Link>
                <AddCartToCarts productId={product._id} className='w-full absolute bottom-0 invisible group-hover:visible' />
            </picture>
            <Link href={`/products/${product._id}`}>
                <h3 className='text-center font-medium line-clamp-1'>{product.title}</h3>
            </Link>
            <p className="text-gray-500 text-center text-sm mb-2">{product.category?.name}</p>

            <div className="flex items-center justify-between gap-x-4">
                <span className='font-medium text-red-700'>${product.price}</span>
                <div className="flex items-center gap-x-1">
                    <Star className='text-yellow-400 fill-amber-400' />
                    <span className='text-sm font-semibold text-gray-600'>{product.ratingsQuantity}</span>
                </div>
                <AddProductToFavorites productId={product._id} />
            </div>
        </div>
    )
}
