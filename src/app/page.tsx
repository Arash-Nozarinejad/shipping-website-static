// {/* X */}

import Image from "next/image";
import Link from "next/link";

// Define a type for sub-navigation items
interface SubNavItem {
  name: string;
  link: string;
}

// Define a type for main navigation items, which may include sub-items
interface NavItem {
  name: string;
  link: string;
  subItems?: SubNavItem[];
}

// Define the main navigation data
const NavItems: NavItem[] = [
  {name: 'Home', link: '/'},
  {name: 'Services', link: '/services', subItems: [
    {name: 'Track Shipment', link: '/services/track-shipment'},
    {name: 'Submit Shipment', link: '/services/submit-shipment'},
    {name: 'Last Mile Delivery', link: '/services/last-mile'},
    {name: 'Partnership', link: '/services/partnership'}
  ]},
  {name: 'About Us', link: '/about'},
  {name: 'Contact Us', link: '/contact'}
];

export default function Home() {
  return (
    <div>
      {/* Header Section */}
      <div className="">
        {/* Left Side - Logo and Website Name */}
        <div>
          <div>
            <Link href="/">
              <Image src="@/../public/website_logo.png" alt="Website Logo" />
            </Link>
          </div>
          <span>Shipping & Logistics Website</span>
        </div>
        {/* Right Side - Navigation Links*/}
        <nav>
          {NavItems.map((item) => (
            <div key={item.name}>
              <Link href={item.link}>{item.name}</Link>
              {item.subItems && (
                <div>
                  {item.subItems.map((subItem) => (
                    <Link href={subItem.link} key={subItem.name}>
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content Section */}
      <div></div>

      {/* Footer Section */}
      <div></div>
    </div>
  );
}
