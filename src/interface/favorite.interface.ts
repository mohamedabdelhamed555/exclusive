import { IBrand } from "./brand.interface"
import { ICategory } from "./category.interface"
import { ISubcategory } from "./subcategory.interface"

export interface IFavoriteResponse {
  status: string
  count: number
  data: IFavoriteProductDetails[]
}

export interface IFavoriteProductDetails {
  _id: string
  title: string
  slug: string
  description: string
  quantity: number
  price: number
  imageCover: string
  images: string[]
  category: ICategory
  brand: IBrand
  subcategory: ISubcategory[]
  ratingsAverage: number
  ratingsQuantity: number
  sold: number
  createdAt: string
  updatedAt: string
  __v: number
  id: string
}
