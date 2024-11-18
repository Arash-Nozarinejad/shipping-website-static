import { NavbarPropType } from "@/types";
import Link from "next/link";
import React from "react";
import styles from "@/styles/navbarLinks.module.css"

const NavbarLinks: React.FC<NavbarPropType> = ( {items, navClass = styles.navClass, itemClass = styles.itemClass }) => {
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