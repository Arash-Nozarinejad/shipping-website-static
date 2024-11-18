export type NavbarLogoPropType = {
    imageUrl: string;
    homeUrl: string;
    logoClass?: string;
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