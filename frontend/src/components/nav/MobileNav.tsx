import { UserProfile } from "@/models/user"
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import UserNav from "./UserNav";
import NavItems from "./NavItems";

type MobileNavProps = {
    user: UserProfile | null;
}

function MobileNav({user}: MobileNavProps) {
  return (
    <Sheet>
    <SheetTrigger asChild className="lg:hidden flex justify-center">
      <Button variant="outline" size="icon">
        <Menu className="h-10" />
      </Button>
    </SheetTrigger>
    <SheetContent side="left" className="lg:hidden" >
      <NavItems direction="col" />
      <div className="mt-2">
        <UserNav user={user} className="flex flex-col items-start" />
      </div>
    </SheetContent>
  </Sheet>
  )
}

export default MobileNav