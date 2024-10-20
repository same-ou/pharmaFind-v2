import { Image } from "@/services/ProductService";
import { ImageIcon, Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { CartProductItem } from "@/types";
type CartItemProps = {
  product: CartProductItem;
  handleQuantityChange: (id: number, newQuantity: number) => void;
  handleDelete: (id: number) => void;
};

function CartItem({ product, handleQuantityChange, handleDelete }: CartItemProps) {
  const image = product.images?.at(0) as Image;

  return (
    <div className="grid grid-cols-[auto_1fr_auto_auto_auto] items-center gap-4 bg-card p-4 rounded-lg">
      <div className="relative w-16 h-16 overflow-hidden rounded-md bg-muted p-2">
        {typeof image !== "string" && image.imageUrl ? (
          <img
            src={`${image.imageUrl}`}
            alt={product.name}
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-secondary">
            <ImageIcon
              className="text-muted-foreground"
              aria-hidden="true"
              size={24}
            />
          </div>
        )}
      </div>

      <div>
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-muted-foreground">Unit Price: ${product.price.toFixed(2)}</p>
      </div>

      <div className="flex items-center gap-2">
        <Button
          size="icon"
          variant="ghost"
          onClick={() => handleQuantityChange(product.id as number, product.quantity - 1)}
          disabled={product.quantity <= 1}
        >
          <Minus className="w-4 h-4" />
        </Button>
        <span>{product.quantity}</span>
        <Button
          size="icon"
          variant="ghost"
          onClick={() => handleQuantityChange(product.id as number, product.quantity + 1)}
        >
          <Plus className="w-4 h-4" />
        </Button>
      </div>

      <div className="text-right font-semibold">${(product.quantity * product.price).toFixed(2)}</div>

      <Button size="icon" variant="ghost" onClick={() => handleDelete(product.id as number)}>
        <Trash2 className="w-4 h-4" />
      </Button>
    </div>
  );
}

export default CartItem;
