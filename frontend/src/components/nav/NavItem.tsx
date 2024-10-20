import { Link } from "react-router-dom"

type NavItemProps = {
    to: string,
    label: string
}

function NavItem({to, label}: NavItemProps) {
  return (
    <Link to={to} className="text-sm font-semibold text-gray-700 hover:text-gray-900 px-4 py-2">
      {label}
    </Link>
  )
}

export default NavItem