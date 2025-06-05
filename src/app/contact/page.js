'use client';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export default function ContactPage() {
    const contactInfo = [
        {
            platform: "Bento",
            username: "corymotion",
            url: "https://bento.me/corymotion",
            external: true,
            icon: "/icons/capsule.png"
        }, {
            platform: "Website",
            username: "cargo",
            url: "https://cargocollective.com/loseallhope/ABOUT",
            external: true,
            icon: "/icons/pin.png"
        },
        {
            platform: "Dribbble",
            username: "CoryMotion",
            url: "https://dribbble.com/CoryMotion",
            external: true,
            icon: "/icons/dice.png"
        },
        {
            platform: "Vimeo",
            username: "corymotion",
            url: "https://vimeo.com/corymotion",
            external: true,
            icon: "/icons/lego.png"
        },
        {
            platform: "Email",
            username: "cory.motion@gmail.com",
            url: "mailto:cory.motion@gmail.com",
            external: false,
            icon: "/icons/sticker.png"
        }
    ];

    return (
        <div className={styles.container}>
            {/* Back Button */}
            <div className={styles.backButtonContainer}>
                <Link href="/" className={styles.backButton}>
                    ← Back
                </Link>
            </div>

            <div className={styles.content}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Contact</h1>
                    <p className={styles.subtitle}>Get in touch</p>
                </div>                <div className={styles.contactGrid}>
                    {contactInfo.map((contact, index) => (
                        <a
                            key={index}
                            href={contact.url}
                            target={contact.external ? "_blank" : "_self"}
                            rel={contact.external ? "noopener noreferrer" : ""}
                            className={styles.contactItem}
                        >                            <div className={styles.iconContainer}>
                                <Image
                                    src={contact.icon}
                                    alt={contact.platform}
                                    width={48}
                                    height={48}
                                    className={styles.icon}
                                />
                            </div>
                            <div className={styles.contactInfo}>
                                <h3 className={styles.platform}>{contact.platform}</h3>
                                <p className={styles.username}>{contact.username}</p>
                            </div>
                            {contact.external && (
                                <div className={styles.externalIcon}>
                                    ↗
                                </div>
                            )}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}