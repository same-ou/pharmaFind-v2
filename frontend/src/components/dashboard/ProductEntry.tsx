import { TableCell, TableRow } from "../ui/table"
import{ Product } from "@/services/ProductService"
import { Button } from "../ui/button"
import { Pencil } from "lucide-react"

type ProductEntryProps = {
    product: Product
    }

function ProductEntry({product}: ProductEntryProps) {
    console.log(product)
  return (
    <TableRow>
      <TableCell>
        <img
          src={product?.images?.[0]?.imageUrl}
          width="64"
          height="64"
          alt="Product image"
          className="aspect-square rounded-md object-cover"
        />
      </TableCell>
      <TableCell>{product.name}</TableCell>
      <TableCell>{product.price}</TableCell>
      <TableCell>{product.quantity}</TableCell>
      <TableCell>
        <Button variant="outline" size="icon">
        <Pencil className="h-4 w-4" />
          <span className="sr-only">Edit</span>
        </Button>
      </TableCell>
    </TableRow>
  )
}

export default ProductEntry
