import CategoriesSection from "@/components/home/CategoriesSection";
import MainSlider from "@/components/home/mainSlider";
import ProductsSection from "@/components/home/ProductsSection";
import GridLoader from "@/components/shared/GridLoader";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
    <MainSlider/>
    <Suspense fallback={<GridLoader/>}>
      <CategoriesSection/>
    </Suspense>
    <Suspense fallback={<GridLoader/>}>
      <ProductsSection/>
    </Suspense>
    </>
  );
}
