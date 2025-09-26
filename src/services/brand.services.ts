// get all brands
export async function getBrands() {
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/brands`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch brands");
  return res.json(); // { results, metadata, data: [...] }
}

// get brand by id
export async function getBrandById(brandId: string) {
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/brands/${brandId}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch brand");
  return res.json(); // { data: {...} }
}