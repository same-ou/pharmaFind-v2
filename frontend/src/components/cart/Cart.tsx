import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";

import { ShoppingCart } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

function Cart() {
  const {cart, handleDelete, handleQuantityChange} = useCart();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const itemCount = cart.length || 0, 
  cartTotal = cart.reduce((total, product) => total + product.price, 0)
  ;

  return (
    <Sheet >
    <SheetTrigger className="flex items-center p-2 -m-2 group">
      <ShoppingCart
        aria-hidden="true"
        className="flex-shrink-0 w-6 h-6 text-muted-foreground/70 group-hover:text-muted-foreground"
      />
      <span className="ml-2 text-sm font-medium text-muted-foreground/70 group-hover:text-muted-foreground">
        {itemCount}
      </span>
    </SheetTrigger>

    <SheetContent className="flex flex-col w-full pr-0 sm:max-w-lg overflow-y-auto"
    aria-describedby="cart-description">
      <SheetHeader className="space-y-2.5 pr-6">
        <SheetTitle>Cart {itemCount}</SheetTitle>
      </SheetHeader>

      <div id="cart-description" className="sr-only">
          {itemCount > 0
            ? `You have ${itemCount} items in your cart. Continue to checkout or add more items.`
            : 'Your cart is empty. Add items to your cart to proceed to checkout.'}
      </div>

      {itemCount > 0 ? (
        <>
          <div className="flex flex-col w-full pr-6">
            {/* Cart Logic */}
            <ScrollArea>
              {cart.map(( product ) => (
                <CartItem key={product.id} product={product} handleDelete={handleDelete} handleQuantityChange={handleDelete} />
              ))}
            </ScrollArea>
          </div>
          <div className="pr-6 space-y-4">
            <Separator />
            <div className="space-y-1.5 text-sm">
              <div className="flex">
                <span className="flex-1">Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex">
                <span className="flex-1">Transaction Fee</span>
              </div>
              <div className="flex">
                <span className="flex-1">Total</span>
                <span>{cartTotal}</span>
              </div>
            </div>
            <SheetFooter>
              <SheetTrigger asChild>
                <Link
                  to="/checkout"
                  className={buttonVariants({ className: "w-full" })}
                >
                  Continue to Checkout
                </Link>
              </SheetTrigger>
            </SheetFooter>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-full space-y-1">
          <div className="relative mb-4 w-60 h-60 text-muted-foreground">
            {/* <image
              src="/empty-cart.png"
              alt="Empty Shopping Cart"
              aria-hidden="true"
            /> */}
          </div>

          <div className="text-xl font-semibold">Your Cart looks empty</div>
          <SheetTrigger asChild>
            <Link
              to="/products"
              className={buttonVariants({
                variant: "link",
                size: "sm",
                className: "text-sm text-muted-foreground",
              })}
            >
              Add Items to your cart to checkout
            </Link>
          </SheetTrigger>
        </div>
      )}
    </SheetContent>
  </Sheet>
);
}

export default Cart