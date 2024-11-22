export interface subLinks {
    name: string;
    link: string;
}

export interface Link {
    name: string;
    link: string;
    subLinks?: subLinks[];
}

export interface Header {
    websiteName: string;
    websiteLogo: string;
    links: Link[];
}