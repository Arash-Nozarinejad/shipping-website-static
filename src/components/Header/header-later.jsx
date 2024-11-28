import Link from 'next/link';
import styles from './header.module.css';
import Image from 'next/image';

const Header = () => {
    return(
        <div className={styles.headerWrapper}>
            {/* Mobile Menu */}
            <div className={styles.mobileMenuWrapper}>
                <div className={styles.mobileMenuLinks}>
                    <ul className={styles.mobileMenuLinksMain}>
                        <li>
                            <Link href="/shipping-services">Shipping Services</Link>
                            <ul className={styles.mobileMenuLinksSub}>
                                <li>
                                    <Link href="/shipping-services/shipment-tracking">Shipment Tracking</Link>
                                </li>
                                <li>
                                    <Link href="/shipping-services/request-shipment">Request Shipment</Link>
                                </li>
                                <li>
                                    <Link href="/shipping-services/b2b-cooperation">B2B Coperation</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href="/about-us">About Us</Link>
                        </li>
                        <li>
                            <Link href="/contact-us">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Regular Menu */}
            <div>
                <div>Section A</div>
                <div>Section B</div>
            </div>
            {/* Regular Menu */}
            <div>
                Logo
            </div>
        </div>
    )
}

export default Header;