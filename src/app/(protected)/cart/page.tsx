"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useCart } from "@/context/CartContext"
import { removeItemFromCart, removeUserCart, updateQuantitycart } from "@/services/cart.services"
import { X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { toast } from "sonner"



export default function CartPage() {

  const { cartDetails, setCartDetails } = useCart();

  async function removeItemCart() {
    const res = await removeUserCart();
    if (res?.message === "success") {
      toast.success("Cart cleared successfully", {
        position: "top-center"
      })
      setCartDetails(null);
    } else {
      toast.error(res?.message || "Failed to clear cart", {
        position: "top-center"
      })
    }
  }


  async function removeOneItem(productId: string) {
    const res = await removeItemFromCart(productId)

    if (res.success) {
      toast.success("Item Removed successfully", {
        position: "top-center"
      })
      setCartDetails(res.data);
    } else {
      toast.error(res?.message || "Failed to Remove item", {
        position: "top-center"
      })
    }
  }

  async function updateQuantity(productId: string, count: number) {
    const res = await updateQuantitycart(productId, count)

    if (res.success) {
      toast.success("Cart Quantity Updated successfully", {
        position: "top-center"
      })
      setCartDetails(res.data);
    } else {
      toast.error(res?.message || "Failed to Update Quantity", {
        position: "top-center"
      })
    }
  }

  return (
    <section className="py-20">

      <div className="container">
        {
          cartDetails ? (
            <>
              <section className="mb-20">
                <Table className="mb-6">
                  <TableHeader>
                    <TableRow>
                      <TableHead>Produtc</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Quantity</TableHead>
                      <TableHead className="text-right">subTotal</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {
                      cartDetails.data.products.map((product) => (
                        <TableRow key={product._id}>
                          <TableCell className="font-medium">
                            <div className=" relative flex items-center gap-5">
                              <div className="relative">
                                <Image
                                  src={product.product.imageCover}
                                  alt={product.product.title}
                                  width={54}
                                  height={54}
                                  className="rounded-md"
                                />
                                <button
                                  onClick={() => removeOneItem(product.product._id)}
                                  className="absolute -top-1 -left-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-white"
                                >
                                  <X className="h-3 w-3" />
                                </button>
                              </div>
                              <h2>{product.product.title}</h2>
                            </div>
                          </TableCell>
                          <TableCell>{product.price}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-4">
                              <Button onClick={() => updateQuantity(product.product._id, product.count - 1)} variant="outline" size={"sm"}> - </Button>
                              {product.count}
                              <Button onClick={() => updateQuantity(product.product._id, product.count + 1)} variant="outline" size={"sm"}> + </Button>
                            </div>
                          </TableCell>
                          <TableCell className="text-right">${product.price * product.count}</TableCell>
                        </TableRow>
                      ))
                    }
                  </TableBody>
                </Table>


                <div className=" flex justify-between">
                  <Button variant="outline">
                    <Link href={"/products"}>Return to Shop</Link>
                  </Button>
                  <Button variant="destructive"
                    onClick={removeItemCart}
                  >
                    Delete All
                  </Button>
                </div>
              </section>
              <section className="flex justify-between">
                <div className="flex items-center gap-4 w-5/12">
                  <Input type="text" placeholder="Coupon code" />
                  <Button variant={"destructive"} className="ml-4">
                    Apply Coupon
                  </Button>
                </div>
                <div className="w-5/12 py-8 px-6 border border-gray-700 rounded">
                  <h3 className="text-xl mb-6 font-bold">Card Total</h3>
                  <ul className="divide-y divide-gray-700 flex flex-col gap-4">
                    <li className="flex justify-between">
                      <span>Subtotal</span>
                      <span>{cartDetails.data.totalCartPrice}</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Shipping</span>
                      <span>Free</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Total</span>
                      <span>{cartDetails.data.totalCartPrice}</span>
                    </li>

                  </ul>
                  <div className="flex items-center justify-center">
                    <Button asChild variant={"destructive"} className="mt-4">
                      <Link href={"/checkout"}>
                        Proceed to Checkout
                      </Link>
                    </Button>
                  </div>
                </div>
              </section>
            </>
          ) :
            <div className="text-center">
              <h2 className="text-2xl mb-4 font-bold">Your cart is currently empty.</h2>
              <Button variant="outline">
                <Link href={"/products"}>Return to Shop</Link>
              </Button>
            </div>
        }
      </div>
    </section>
  )
}
