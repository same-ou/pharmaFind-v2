import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
import { Textarea } from "@/components/ui/textarea"

function DashboardSettings() {
  return (
    <section id="settings">
    <div className="flex items-center">
      <h2 className="font-semibold text-lg md:text-2xl">Settings</h2>
    </div>
    <div className="border shadow-sm rounded-lg mt-4 p-6">
      <form className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" defaultValue="Acme Pharmacy" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" defaultValue="info@acmepharmacy.com" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" defaultValue="+1 (555) 555-5555" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="address">Address</Label>
          <Textarea id="address" defaultValue="123 Main St, Anytown USA" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="business-hours">Business Hours</Label>
          <Input id="business-hours" defaultValue="9am - 9pm" />
        </div>
        <Button type="submit" size="lg">
          Save Changes
        </Button>
      </form>
    </div>
  </section>
  )
}

export default DashboardSettings