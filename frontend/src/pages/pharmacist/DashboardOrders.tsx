import { Table, 
    TableBody, 
    TableHead, 
    TableHeader, 
    TableRow, 
    TableCell } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

import { Badge } from "@/components/ui/badge"

function DashboardOrders() {
  return (
    
    <section id="orders">
    <div className="flex items-center">
      <h2 className="font-semibold text-lg md:text-2xl">Orders</h2>
    </div>
    <div className="border shadow-sm rounded-lg mt-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order #</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Total</TableHead>
            <TableHead />
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">#12345</TableCell>
            <TableCell>John Doe</TableCell>
            <TableCell>
              <Badge variant="default">Delivered</Badge>
            </TableCell>
            <TableCell>$49.99</TableCell>
            <TableCell>
              <Button variant="outline" size="icon">
                <EyeIcon className="h-4 w-4" />
                <span className="sr-only">View</span>
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">#12346</TableCell>
            <TableCell>Jane Smith</TableCell>
            <TableCell>
              <Badge variant="destructive">Pending</Badge>
            </TableCell>
            <TableCell>$29.99</TableCell>
            <TableCell>
              <Button variant="outline" size="icon">
                <EyeIcon className="h-4 w-4" />
                <span className="sr-only">View</span>
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">#12347</TableCell>
            <TableCell>Bob Johnson</TableCell>
            <TableCell>
              <Badge variant="destructive">Cancelled</Badge>
            </TableCell>
            <TableCell>$19.99</TableCell>
            <TableCell>
              <Button variant="outline" size="icon">
                <EyeIcon className="h-4 w-4" />
                <span className="sr-only">View</span>
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">#12348</TableCell>
            <TableCell>Sarah Lee</TableCell>
            <TableCell>
              <Badge variant="default">Delivered</Badge>
            </TableCell>
            <TableCell>$59.99</TableCell>
            <TableCell>
              <Button variant="outline" size="icon">
                <EyeIcon className="h-4 w-4" />
                <span className="sr-only">View</span>
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  </section>

  )
}

function EyeIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  }
  

export default DashboardOrders