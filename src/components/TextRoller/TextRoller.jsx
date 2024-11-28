import React from 'react';
import styles from './textRoller.module.css';

const TextRoller = () => {
    return (
        <div className={styles.textRollerContainer}>
            {/* "Our Branches" Roller */}
            <div className={styles.textRollerBranches}>
                <span className={styles.textRollerItem}>Our Branches</span>
            </div>

            {/* Countries Roller */}
            <div className={styles.textRoller}>
                <span className={styles.textRollerItem}>Country One</span>
                <span className={styles.textRollerItem}>Country Two</span>
                <span className={styles.textRollerItem}>Country Three</span>
                <span className={styles.textRollerItem}>Country Four</span>
                <span className={styles.textRollerItem}>Country Five</span>
                <span className={styles.textRollerItem}>Country Six</span>
            </div>
        </div>
    );
};

export default TextRoller;
