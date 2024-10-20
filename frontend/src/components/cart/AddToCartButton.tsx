import { Product } from "@/services/ProductService"
import { Button } from "../ui/button"
import { useCart } from "@/hooks/useCart"
import { useState, useEffect } from "react"
import { CartProductItem } from "@/types"

type AddToCartButtonProps = {
  product: Product;
}

function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const item:CartProductItem = {
    id: product.id as number,
    name: product.name,
    price: product.price,
    quantity: 1,
    images: product.images
  } 

  const handleAddToCart = async () => {
    addToCart(item);
    setIsAdded(true);
  }

  console.log(item);
  return (
    <Button
      size="lg"
      onClick={handleAddToCart}
    >
      Add to Cart
    </Button>
  )
}

export default AddToCartButton