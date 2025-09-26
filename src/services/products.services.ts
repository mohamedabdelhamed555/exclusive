export async function getProducts(limit =40) {
        try {
            const res = await fetch(`${process.env.API_BASE_URL}/api/v1/products?limit=${limit}`);
            if (!res.ok) {
                throw new Error (res.statusText || "Error to fetch products");
            }

            const data = await res.json()
            return data
            
        } catch (error) {
            return {error: error as string}
        }
    }

    
export async function getProductDetails(id:string) {
        try {
            const res = await fetch(`${process.env.API_BASE_URL}/api/v1/products/${id}`);
            if (!res.ok) {
                throw new Error (res.statusText || "Error to fetch products");
            }

            const data = await res.json()
            return data
            
        } catch (error) {
            return {error: error as string}
        }
    }



// services/product.services.ts
export async function getProductsByCategory(categoryId: string) {
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/api/v1/products?category=${categoryId}`);
  if (!res.ok){
    throw new Error(res.statusText || "Failed to fetch products");
  } 
  const data = await res.json()
  return data;
  } catch (error) {
    return {error:error as string}
  }
}
