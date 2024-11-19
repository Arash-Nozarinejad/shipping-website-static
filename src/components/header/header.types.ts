export interface SubLink {
    name: string;
    link: string;
}

export interface NavLink {
    name: string;
    link: string;
    subLinks?: SubLink[];
}

export interface HeaderData {
    websiteName: string;
    websiteLogo: string;
    homepageUrl: string;
    links: NavLink[];
}
