import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { Product } from "@/services/ProductService";
import { Skeleton } from "@/components/ui/skeleton";
import ProductImageSlider from "./ProductImageSlider";
import { Button } from "../ui/button";

type ProductListingProps = {
  product: Product | null;
  index: number;
};

const ProductListing = ({ index, product }: ProductListingProps) => {
  // reduce images to urls string array
  const urls = product?.images?.reduce(
    (acc, image) => [...acc, image.imageUrl],
    [] as string[]
  );
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, index * 50);

    return () => {
      clearTimeout(timeout);
    };
  }, [index]);

  if (!product || !isVisible) return <ProductsPlaceholder />;

  if (product && isVisible) {
    return (
      <Link
        to={`/products/${product.id}`}
        className={cn("invisible h-full w-full cursor-pointer group-[main]", {
          "visible animate-in fade-in-5": isVisible,
        })}
      >
        <div className="flex flex-col w-full">
          <ProductImageSlider urls={urls as string[]} />
          <h3 className="mt-4 text-sm font-medium text-foreground/80">
            {product.name}
          </h3>
        
          <p className="mt-1 text-sm font-medium text-foreground/90">
            {product.price}
          </p>
          <Button>
            Add to cart
          </Button>
        </div>
      </Link>
    );
  }

  return <div>ProductListing</div>;
};

const ProductsPlaceholder = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="relative w-full overflow-hidden bg-zinc-100 aspect-square rounded-xl">
        <Skeleton className="w-full h-full" />
      </div>

      <Skeleton className="w-2/3 h-4 mt-4 rounded-lg" />
      <Skeleton className="w-16 h-4 mt-4 rounded-lg" />
      <Skeleton className="w-12 h-4 mt-4 rounded-lg" />
    </div>
  );
};

export default ProductListing;