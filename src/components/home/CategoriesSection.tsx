import { ICategory } from '@/interface/category.interface';
import { getCategories } from '@/services/category.services';
import React from 'react'
import CategoriesSlider from './CategoriesSlider';
import SectionTitle from '../shared/SectionTitle';
import { Separator } from '../ui/separator';


export default async function CategoriesSection() {

  const { data: cateogries }: { data: ICategory[] } = await getCategories()

  return (
    <section className='py-10'>
      <div className="container mx-auto">
        <SectionTitle title={"Categories"} subtitle={"Browse By Category"} />
        <CategoriesSlider cateogries={cateogries} />
        <Separator className='mt-20' />
      </div>

    </section>
  )
}
