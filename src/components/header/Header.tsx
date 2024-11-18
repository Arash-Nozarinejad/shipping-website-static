import { HeaderPropType } from "@/types";
import React from "react";
import NavbarLogo from "../navbar/NavbarLogo";
import NavbarLinks from "../navbar/NavbarLinks";

const Header: React.FC<HeaderPropType> = ({headerClass, navLogoProp, navLinksProp}) => {
    return (
        <div className={headerClass}>
            <NavbarLogo {...navLogoProp} />
            <NavbarLinks {...navLinksProp} />
        </div>
    );
}

export default Header;