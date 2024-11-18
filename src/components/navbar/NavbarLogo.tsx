import { NavbarLogoPropType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "@/styles/NavbarLogo.module.css";

const NavbarLogo: React.FC<NavbarLogoPropType> = ({ 
    imageUrl, 
    homeUrl, 
    logoClass = styles.logoClass, 
    width = 100, 
    height = 100 }) => {
    return (
        <Link href={homeUrl}>
            <Image 
            src={imageUrl} 
            className={logoClass} 
            alt="Logo" 
            width={width} 
            height={height} />
        </Link>
    );
};

export default NavbarLogo;