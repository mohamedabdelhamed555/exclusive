import ProductItem from '@/components/products/ProductItem';
import { IProduct } from '@/interface/product.interface';
import { getProductsByCategory } from '@/services/products.services';

export default async function CategoryProductsPage({ params }: { params: { categoryId: string } }) {
    const productsResponse = await getProductsByCategory(params.categoryId);
    const products = productsResponse?.data || []; // fallback لو undefined

    return (
        <section className="py-10">
            <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.length > 0 ? (
                    products.map((product: IProduct) => 
                    <ProductItem key={product._id} product={product} />)
                ) : (
                    <p className="text-center col-span-full text-gray-500">No products found in this category.</p>
                )}
            </div>
        </section>
    );
}
