
import ProductListing from './ProductListing';
import { Product } from '@/services/ProductService';

type ProductContainerProps = {
  products: Product[];
};



function ProductContainer ({ products } :ProductContainerProps ){
  return (
      <div className="p-10 m-5 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductListing index={index} product={product} key={index} />
        ))}
      </div>
  )
}

export default ProductContainer;
