import { getProducts } from '@/services/products.services';
import { IProduct } from '@/interface/product.interface';
import ProductItem from '@/components/products/ProductItem';


export default async function ProductsPage() {

  const { data: products }: { data: IProduct[] } = await getProducts()
  return (
    <section className='py-10'>
      <div className="container mx-auto">
        <h1 className='text-center text-4xl font-bold mb-8 text-red-500'>All Products</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-15 mb-10'>
          {
            products && products.map(product =>
              <ProductItem key={product._id} product={product} />
            )
          }

        </div>

      </div>
    </section>
  )
}
