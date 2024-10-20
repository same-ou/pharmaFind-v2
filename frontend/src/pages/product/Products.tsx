import ProductContainer from '@/components/product/ProductContainer'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { useLoaderData } from 'react-router-dom'
import { Product } from '@/services/ProductService';
import { getProducts } from '@/services/ProductService';
import { PageResponse } from '@/services/PharmacyService';

export async function loader() {
  try {
    const data = await getProducts();
    return data;
  } catch (error: any) {
    throw new Response(error.message, { status: error.response?.status || 500 });
  }
}

function Products() {
  const products = useLoaderData() as PageResponse<Product>;
  return (
    <MaxWidthWrapper>
    <ProductContainer products={products?.content}/>     
  </MaxWidthWrapper>
  )
}

export default Products

