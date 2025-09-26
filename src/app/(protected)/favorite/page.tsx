"use client"
import AddCartToCarts from "@/components/products/AddCartToCarts"
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useFavorite } from "@/context/FavoriteContext"
import { removeItemFromFavorite, updateQuantityFavorite } from "@/services/favorite.services"
import Image from "next/image"
import Link from "next/link"
import { toast } from "sonner"



export default function FavoritePage() {

    const { FavoriteDetails, setFavoriteDetails } = useFavorite();

    async function removeOneItem(productId: string) {
        const res = await removeItemFromFavorite(productId)

        if (res.success) {
            toast.success("Item Removed successfully", {
                position: "top-center"
            })
            setFavoriteDetails(res.data);
        } else {
            toast.error(res?.message || "Failed to Remove item", {
                position: "top-center"
            })
        }
    }
    return (
        <section className="py-20">

            <div className="container mx-auto">
                {
                    FavoriteDetails ? (
                        <>
                            <section className="mb-20">
                                <Table className="mb-6">
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Produtc</TableHead>
                                            <TableHead>Price</TableHead>
                                            <TableHead>Order</TableHead>
                                            <TableHead>Delete</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {FavoriteDetails?.data?.map((product) => (
                                            <TableRow key={product._id}>
                                                <TableCell className="font-medium">
                                                    <div className="relative flex items-center gap-5">
                                                        <div className="relative">
                                                            <Image
                                                                src={product.imageCover}
                                                                alt={product.title}
                                                                width={54}
                                                                height={54}
                                                                className="rounded-md"
                                                            />

                                                        </div>
                                                        <h2>{product.title}</h2>

                                                    </div>
                                                </TableCell>
                                                <TableCell>{product.price}</TableCell>
                                                <TableCell>
                                                    <AddCartToCarts productId={product._id} />
                                                </TableCell>
                                                <TableCell>
                                                    <Button
                                                        variant="destructive"
                                                        onClick={() => removeOneItem(product._id)}
                                                    >
                                                        Delete
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>

                                </Table>
                                <div className=" flex justify-between">
                                    <Button variant="outline">
                                        <Link href={"/products"}>Return to Shop</Link>
                                    </Button>
                                </div>
                            </section>
                        </>
                    ) :
                        <div className="text-center">
                            <h2 className="text-2xl mb-4 font-bold">Your Favorite is currently empty.</h2>
                            <Button variant="outline">
                                <Link href={"/products"}>Return to Shop</Link>
                            </Button>
                        </div>
                }
            </div>
        </section>
    )
}
