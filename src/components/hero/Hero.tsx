"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./hero.module.css";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    // state to manage input value
    const [inputValue, setInputValue] = useState("");
    const router = useRouter();

    // Function to handle form submission
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault(); // To prevent page refresh
        if (inputValue.trim() !== ""){
            router.push(`/shipping-tracking/tracking?query=${encodeURIComponent(inputValue)}`);
        } else {
            alert("please enter a value before submitting.");
        }
    };
    return (      
        <div className={styles.heroWrapperSM}>
            {/** Top Card */}
            <div className={styles.topCardSM}>
                <form onSubmit={handleSubmit} className={styles.topCardFormSM}>
                    <input 
                        type="text"
                        placeholder="Enter bill of lading"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className={styles.topCardFormTextInputSM}
                    />
                    <button 
                        type="submit"
                        className={styles.topCardFormTextButtonSM}>Track Shipment</button>
                </form>
            </div>
            {/** Bottom Cards */}
            <div className={styles.bottomCardsWrapperSM}>
                {/** Card 1 */}
                <div className={styles.bottomCardSM}>
                    <Image src="/icon.svg" alt="icon" width={50} height={50} className={styles.bottomCardImageSM} />
                    <p className={styles.bottomCardParagraphSM}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Link href="" className={styles.bottomCardLinkSM}>Learn more</Link>
                </div>
                {/** Card 2 */}
                <div className={styles.bottomCardSM}>
                    <Image src="/icon.svg" alt="icon" width={50} height={50} className={styles.bottomCardImageSM} />
                    <p className={styles.bottomCardParagraphSM}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Link href="" className={styles.bottomCardLinkSM}>Learn more</Link>
                </div>
                {/** Card 3 */}
                <div className={styles.bottomCardSM}>
                    <Image src="/icon.svg" alt="icon" width={50} height={50} className={styles.bottomCardImageSM} />
                    <p className={styles.bottomCardParagraphSM}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Link href="" className={styles.bottomCardLinkSM}>Learn more</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero;