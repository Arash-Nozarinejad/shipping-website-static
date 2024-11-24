"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./hero.module.css";

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
        <div className={styles.heroWrapper}>
            {/** Top Card */}
            <div className={`${styles.mainCardWrapper} ${styles.mainCardWrapperSm}`}>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        placeholder="Enter bill of lading"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button 
                        type="submit"
                    >Track Shipment</button>
                </form>
            </div>
            {/** Bottom Cards */}
            <div className={styles.secondaryCardWrapper}>
                {/** Card 1 */}
                <div>Card1</div>
                {/** Card 2 */}
                <div>Card2</div>
                {/** Card 3 */}
                <div>Card3</div>
            </div>
        </div>
    )
}

export default Hero;