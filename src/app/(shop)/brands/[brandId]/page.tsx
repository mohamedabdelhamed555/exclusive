import { getBrandById } from '@/services/brand.services';
import Image from 'next/image';

export default async function BrandDetailsPage({ params }: { params: { brandId: string } }) {
    const brandResponse = await getBrandById(params.brandId);
    const brand = brandResponse?.data;

    if (!brand) {
        return <p className="text-center py-10 text-gray-500">Brand not found</p>;
    }

    return (
        <section className="py-10">
            <div className="container mx-auto flex flex-col items-center">
                <Image
                    src={brand.image}
                    alt={brand.name}
                    width={300}
                    height={300}
                    className="w-64 h-64 object-contain mb-6"
                />
                <h1 className="text-3xl font-bold mb-4">{brand.name}</h1>
                <p className="text-gray-600 text-center max-w-2xl">
                    {brand.slug ? `Slug: ${brand.slug}` : 'No additional details available.'}
                </p>
            </div>
        </section>
    );
}
