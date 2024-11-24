import Link from "next/link";
import { LinkType, SubLinksType } from "./header.types";
import { getHeaderData } from "./header.utils";
import Image from "next/image";

const Header = () => {
    const headerData = getHeaderData();

    return (
        <div className='flex justify-between items-center p-4 shadow-md'>
            <div>
                <Link href={headerData.websiteAddress} className='flex items-center space-x-2'>
                    <Image src={headerData.websiteLogo} alt="Website Logo" width={50} height={50} />
                    <span>{headerData.websiteName}</span>
                </Link>
                
            </div>
            {/* Navigation Links */}
            <div className="flex space-x-4">
                {headerData.links.map((navLink: LinkType, index) => (
                    <div key={index} className="group relative">
                        <Link href={navLink.link} className="hover:bg-gray-200 p-2">{navLink.name}</Link>
                        {navLink.subLinks && (
                            <div className="hidden absolute left-0 mt-0 p-2 group-hover:flex flex-col whitespace-nowrap bg-white shadow-sm">
                                {navLink.subLinks.map((subLink: SubLinksType, subIndex) => (
                                    <Link key={subIndex} href={subLink.link} className="hover:bg-gray-100 p-2">{subLink.name}</Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Header;