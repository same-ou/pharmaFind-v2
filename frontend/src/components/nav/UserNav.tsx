import { cn } from "@/lib/utils"
import { ClassNameValue } from "tailwind-merge"
import { UserProfile } from "@/models/user"
import { Link } from "react-router-dom"
import UserAccountNav from "./UserAccountNav"
import { buttonVariants } from "../ui/button"

type UserNavProps = {
    user: UserProfile | null,
    className: ClassNameValue
}

function UserNav({user, className}: UserNavProps) {
  return (
    <div className={cn(className)}>
      {user ? null : (
        <Link to="/clients/login" className={buttonVariants({ variant: "ghost" })}>
          Sign In
        </Link>
      )}
      {user ? null : (
        <span className="h-6 w-px bg-foreground/5" aria-hidden="true" />
      )}

      {user ? (
        <UserAccountNav user={user} />
      ) : (
        <Link to="/clients/register" className={buttonVariants({ variant: "ghost" })}>
          Create Account
        </Link>
      )}

      {user ? (
        <span className="h-6 w-px bg-foreground/5" aria-hidden="true" />
      ) : null}

      {user ? null : (
        <div className="flex lg:ml-6">
          <span className="h-6 w-px bg-foreground/5" aria-hidden="true" />
        </div>
      )}
    </div>
  );
}

export default UserNav