export type NavbarLogoPropType = {
    imageUrl: string;
    homeUrl: string;
    logoClass?: string;
    width?: number;
    height?: number;
};


export type NavbarItemType = {
    itemName: string;
    itemLink: string;
};

export type NavbarPropType = {
    items: NavbarItemType[];
    navClass?: string;
    itemClass?: string;
};