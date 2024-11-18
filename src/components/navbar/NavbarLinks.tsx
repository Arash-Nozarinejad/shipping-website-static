import { NavbarPropType } from "@/types";
import Link from "next/link";
import React from "react";

const NavbarLinks: React.FC<NavbarPropType> = ( {items, navClass, itemClass }) => {
    return (
        <div className={navClass}>
            {items.map(({ itemName, itemLink}) => (
                <Link href={itemLink} key={itemName} className={itemClass}>
                    {itemName}
                </Link>
            ))}
        </div>
    );
}

export default NavbarLinks;