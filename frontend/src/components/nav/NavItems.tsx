import NavItem from "./NavItem"

const items = [

  { to: '/pharmacies', label: 'Pharmacies' },
  { to: '/products', label: 'Products' },
  { to: '/services', label: 'Services' },
  { to: '/blog', label: 'Blog' },
];

interface NavItemsProps {
  direction: 'row' | 'col';
}

function NavItems({ direction} : NavItemsProps) {
  return (
    <div className={`flex ${direction === 'row' ? 'h-full' : ''} ${direction === 'row' ? 'items-center' : 'items-start'}  space-${direction === 'row' ? 'x' : 'y'}-4 flex-${direction}`}>
     {items.map((item, index) => (
        <NavItem key={index} to={item.to} label={item.label} />
      ))}
    </div>
  )
}

export default NavItems