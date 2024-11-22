import Link from "next/link";
import { HeaderType, LinkType, SubLinksType } from "./header.types";
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
            <div className='flex space-x-4 '>
                {headerData.links.map((link: LinkType, index) => (
                    <div key={index} className='relative group'>
                        <Link href={link.link} className={`${link.name === "Home" ? "underline hover:bg-gray-200" : "hover:bg-gray-200"} p-2`}>{link.name}</Link>
                        {link.subLinks && (
                            <div className='absolute left-0 mt-2 shadow-md p-2 hidden group-hover:flex flex-col whitespace-nowrap bg-white'>
                                {link.subLinks.map((subLink, subIndex) => (
                                    <Link 
                                    href={subLink.link}
                                    key={subIndex}
                                    className='block hover:bg-gray-200'
                                    >
                                        {subLink.name}
                                    </Link>
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