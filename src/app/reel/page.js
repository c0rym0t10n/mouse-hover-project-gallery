'use client';
import Link from 'next/link';
import styles from './page.module.css';

export default function ReelPage() {
    return (
        <div className={styles.container}>
            <div className={styles.backButtonContainer}>
                <Link href="/" className={styles.backButton}>
                    &larr; Back
                </Link>
            </div>
            <div className={styles.videoContainer}>
                <iframe
                    src="https://player.vimeo.com/video/846645085?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                    title="REEL_2024_"
                    className={styles.videoIframe}
                ></iframe>
            </div>
        </div>
    );
}
