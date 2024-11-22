export interface SubLinksType {
    name: string;
    link: string;
}

export interface LinkType {
    name: string;
    link: string;
    subLinks?: SubLinksType[];
}

export interface HeaderType {
    websiteName: string;
    websiteLogo: string;
    links: LinkType[];
}