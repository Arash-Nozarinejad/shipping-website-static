import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    return(
        <div className="flex justify-between items-center px-4 py-2">
            <div className='flex items-center'>
                <Link href="/" className='hover:cursor-pointer flex items-center'>
                    <Image src="/website_logo.png" alt="website logo" width={75} height={25} />
                    <span className='hidden md:block ml-2'>Shipping & Logistics</span>
                </Link>
            </div>

            <ul className='flex items-center space-x-4'>
                <li className='mx-2 hover:cursor-pointer'>
                    <Link href="/services" className='hover:cursor-pointer hover:bg-gray-100 p-1'>Service</Link>
                </li>
                <li className='mx-2 hover:cursor-pointer'>
                    <Link href="/about-us" className='hover:cursor-pointer hover:bg-gray-100 p-1'>About Us</Link>
                </li>
                <li className='mx-2 hover:cursor-pointer'>
                    <Link href="/contact-us" className='hover:cursor-pointer hover:bg-gray-100 p-1'>Contact Us</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;