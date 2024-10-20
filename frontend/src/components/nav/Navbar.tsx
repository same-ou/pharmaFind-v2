import MaxWidthWrapper from "../MaxWidthWrapper"
import { Link } from "react-router-dom"
import { ThemeSwitch } from "../ui/theme-switch"
import Cart from "../cart/Cart"
import MobileNav from "./MobileNav"
import NavItems from "./NavItems"
import UserNav from "./UserNav"
import { Pill } from "lucide-react"

import { useAuth } from "@/hooks/useAuth"

function Navbar() {
    const {user} = useAuth();

  return (
    <div className="sticky top-0 z-50 border-b supports-backdrop-blur:bg-background/90 border-foreground/10 backdrop-blur">
      <header className="relative w-full">
       <MaxWidthWrapper>
          <div className="">
            <div className="flex items-center h-16 justify-between">
              <MobileNav user={user} />
              <div className="ml-4 lg:ml-0">
                <Link to="/">
                  <div className="relative h-full flex items-center gap-2">
                  <Pill size={18} className="text-primary" />
                   <span className="font-semibold hidden lg:block">PharmaFind</span>
                  </div>
                </Link>
              </div>
              <div className="z-50 hidden lg:ml-8 lg:block lg:self-stretch">
                <NavItems direction="row"/>
              </div>
              <div className="flex items-center ml-auto">
                <UserNav
                  user={user}
                  className="hidden lg:flex lg:flex-1 lg:justify-end lg:space-x-6 lg:items-center"
                />
                <div className="flow-root ml-4 lg:ml-6">
                  <ThemeSwitch />
                </div>
                <div className="flow-root ml-4 lg:ml-6">
                  <Cart />
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
       </header>
    </div>
  )
}

export default Navbar