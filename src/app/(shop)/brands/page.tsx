"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { getBrands } from "@/services/brand.services";

type Brand = {
  _id: string;
  name: string;
  slug: string;
  image: string;
};

export default function BrandsPage() {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);

  useEffect(() => {
    async function fetchBrands() {
      const brandsResponse = await getBrands();
      setBrands(brandsResponse?.data || []);
    }
    fetchBrands();
  }, []);

  return (
    <section className="py-10">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-6">All Brands</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {brands.map((brand) => (
            <div
              key={brand._id}
              onClick={() => {
                setSelectedBrand(brand);
                setOpen(true);
              }}
              className="border rounded-lg p-4 hover:shadow-lg transition cursor-pointer"
            >
              <Image
                src={brand.image}
                alt={brand.name}
                width={200}
                height={200}
                className="w-full h-40 object-contain mb-3"
              />
              <h3 className="text-center font-medium">{brand.name}</h3>
            </div>
          ))}
        </div>

        {/* AlertDialog */}
        <AlertDialog open={open} onOpenChange={setOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>{selectedBrand?.name}</AlertDialogTitle>
              <AlertDialogDescription>
                Brand slug: {selectedBrand?.slug}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <div className="flex justify-center py-4">
              {selectedBrand?.image && (
                <Image
                  src={selectedBrand.image}
                  alt={selectedBrand.name}
                  width={200}
                  height={200}
                  className="object-contain"
                />
              )}
            </div>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setOpen(false)}>
                Close
              </AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </section>
  );
}
