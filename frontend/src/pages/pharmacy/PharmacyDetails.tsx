import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom"
import { PharmacyResponse } from "@/services/PharmacyService"
import { getPharmacyById } from "@/services/PharmacyService"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getInitials } from "@/lib/utils"

export async function loader({params}: LoaderFunctionArgs) {
  try {
    const pharmacy = await getPharmacyById(params.id as string);
    return pharmacy;
  } catch (error: any) {
    throw new Response(error.message, { status: error.response?.status || 500 });
  }
}

export default function Component() {
  const pharmacy = useLoaderData() as PharmacyResponse;
  return (
<MaxWidthWrapper>
      <div className="relative h-[300px] overflow-hidden rounded-b-2xl">
        <img
          src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Cover image"
          width={1920}
          height={600}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 flex w-full items-end justify-between px-6 py-8">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-white p-1">
              <Avatar className="w-16 h-16">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>{getInitials(pharmacy.name)}</AvatarFallback>
              </Avatar>
            </div>
            <div className="text-white">
              <h1 className="text-2xl font-bold">{pharmacy.name}</h1>
              <p className="text-sm">{`${pharmacy.address.street} | ${pharmacy.address.city}`}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto grid gap-8 px-4 py-12 md:grid-cols-[1fr_2fr]">
        <div className="grid gap-4">
          <div className="grid gap-2">
              <h3 className="text-xl font-bold">Contact Information</h3>
              <p className="text-muted-foreground">
                Phone: (123) 456-7890
                <br />
                Email: info@acmepharmacy.com
              </p>
          </div>
          <div className="grid gap-2">
              <h3 className="text-xl font-bold">Location</h3>
              <p className="text-muted-foreground">{`${pharmacy.address.street} | ${pharmacy.address.city}`}</p>
            </div>
            <div className="grid gap-2">
              <h3 className="text-xl font-bold">Owner</h3>
              <p className="text-muted-foreground">John Doe</p>
            </div>

            <div className="grid gap-4">
              <h3 className="text-xl font-bold">Contact Us</h3>
              <form className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Enter your message" className="min-h-[100px]" />
                </div>
                <Button type="submit">Submit</Button>
              </form>
            </div> 
        </div>

        <div className="grid gap-8">
          <div>
            <h2 className="mb-4 text-2xl font-bold">Our Products</h2>
            <div className="grid gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {/* Map Products Here */}
              </div>
              <div className="flex justify-center">
                {/* Pagination here */}
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </MaxWidthWrapper>
  )
}
