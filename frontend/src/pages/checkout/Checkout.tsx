import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useCart } from "@/hooks/useCart"
import CartItem from "@/components/cart/CartItem"
import { Link } from "react-router-dom"
import placeOrder from "@/services/OrderService"
import { toast } from "@/components/ui/use-toast"

export default function Checkout() {
  const { cart, handleQuantityChange, handleDelete } = useCart()

  const [shippingInfo, setShippingInfo] = useState({
    street: "",
    city: "",
    state: "",
    zip: "",
  })

  const handleShippingInfoChange = (field: any, value: any) => {
    setShippingInfo({ ...shippingInfo, [field]: value })
  }
  const handlePlaceOrder = async () => {
    const orderItems = cart.map((item) => ({
      productId: item.id,
      pharmacyId:1,
      quantity: item.quantity,
      price: item.price
    }))
    const order = {
      products: orderItems,
      address: {
        street: shippingInfo.street,
        city: shippingInfo.city,
        postalCode: shippingInfo.zip
      }
    }
    try {
      const orderResponse = await placeOrder(order);
      toast({
        title: "Order Placed",
        description: `Your order has been placed with ID: ${orderResponse.id}`
      });
    } catch (error) {
      console.error(error)
    }
  }

  const total = cart.reduce((acc, item) => acc + item.quantity * item.price, 0)
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <main className="container mx-auto px-4 md:px-6 py-12 flex-1">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        { cart.length === 0 ? (
          <div className="bg-card p-6 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
            <p className="text-lg text-foreground/60">
              You have no items in your cart. Add some items to continue.
              </p>
              <Button size="lg" className="mt-6" asChild>
                <Link to="/products">
                Continue Shopping
                </Link>
                </Button>
          </div>
                ) : (
        <div className="grid gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            <div className="grid gap-4">
              {
              cart.map((item) => (
                <CartItem key={item.id} product={item} handleQuantityChange={handleQuantityChange} handleDelete={handleDelete}/>
              ))
              }
            </div>
          </div>
          <div className="bg-card p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            <div className="grid gap-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <Separator />
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <Button size="lg" className="w-full mt-6" onClick={handlePlaceOrder}>
              Place Order
            </Button>
          </div>
          <div className="bg-card p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Shipping Information</h2>
            <form className="grid gap-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    value={shippingInfo.street}
                    onChange={(e) => handleShippingInfoChange("street", e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    value={shippingInfo.city}
                    onChange={(e) => handleShippingInfoChange("city", e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="state">State</Label>
                  <Input
                    id="state"
                    value={shippingInfo.state}
                    onChange={(e) => handleShippingInfoChange("state", e.target.value)}
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="zip">Zip Code</Label>
                <Input
                  id="zip"
                  value={shippingInfo.zip}
                  onChange={(e) => handleShippingInfoChange("zip", e.target.value)}
                />
              </div>
            </form>
          </div>
        </div>)}
      </main>
    </div>
  )
}
