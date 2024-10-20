import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Link } from "react-router-dom";
import { PharmacyResponse } from "@/services/PharmacyService";
import { getInitials } from "@/lib/utils";
export default function PharmacyCard({ id,name, address }: PharmacyResponse) {
  return (
    <Link to={`/pharmacies/${id}`}>
      <div className="relative overflow-hidden rounded-lg group">
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/50 to-transparent" />
        <img
          src="https://images.unsplash.com/photo-1547489432-cf93fa6c71ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Pharmacy Cover"
          width={400}
          height={300}
          className="object-cover w-full h-60"
        />
        <div className="relative z-10 p-6">
          <div className="flex items-center gap-4">
            <Avatar className="border-2 border-background">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>{getInitials(name)}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-lg font-semibold">{name}</h3>
              <p className="text-sm text-muted-foreground">{`${address.street} | ${address.city} `}</p>
              <p className="text-sm text-muted-foreground">0624232323</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}