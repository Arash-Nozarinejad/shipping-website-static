import { NavbarLogoPropType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavbarLogo: React.FC<NavbarLogoPropType> = ({ imageUrl, homeUrl, logoClass, width = 100, height = 100 }) => {
    return (
        <Link href={homeUrl}>
            <Image src={imageUrl} className={logoClass} alt="Logo" width={width} height={height} />
        </Link>
    );
};

export default NavbarLogo;