import { useAuth } from "@/hooks/useAuth";
import { Link } from "react-router-dom";
import { UserProfile } from "@/models/user";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";

const UserAccountNav = ({ user }: { user: UserProfile }) => {
    const { logoutUser } = useAuth();
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="overflow-visible">
          <Button variant="ghost" size="sm" className="relative">
            My Account
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-60">
          <div className="flex items-center justify-start p-2 gap-2">
            <div className="flex flex-col space-y-0.5 leading-none">
              <p className="font-medium text-sm text-foreground">{user.email}</p>
            </div>
          </div>
          <DropdownMenuSeparator />
          {
            user?.role.name === 'PHARMACIST' &&
          <DropdownMenuItem asChild>
            <Link to="/pharmacists/dashboard">Seller Dashboard</Link>
          </DropdownMenuItem> }
          <DropdownMenuItem onClick={logoutUser} className="cursor-pointer">
            Log Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };
  
  export default UserAccountNav;