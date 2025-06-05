'use client';
import React from 'react'
import styles from './style.module.css';
import Link from 'next/link';

export default function index({ index, title, description, setModal }) {

    const isReel = title === "reel-2024";
    const isWeb = title === ".web";
    const isCV = title === "cv--";
    const isContact = title === ".contact";

    return (
        <div onMouseEnter={() => { setModal({ active: true, index: index }) }} onMouseLeave={() => { setModal({ active: false, index: index }) }} className={styles.project}>
            {isReel ? (
                <Link href="/reel" legacyBehavior>
                    <a>
                        <h2>{title}</h2>
                    </a>
                </Link>
            ) : isWeb ? (
                <Link href="/web" legacyBehavior>
                    <a>
                        <h2>{title}</h2>
                    </a>
                </Link>
            ) : isCV ? (
                <Link href="/cv" legacyBehavior>
                    <a>
                        <h2>{title}</h2>
                    </a>
                </Link>
            ) : isContact ? (
                <Link href="/contact" legacyBehavior>
                    <a>
                        <h2>{title}</h2>
                    </a>
                </Link>
            ) : (
                <h2>{title}</h2>
            )}
            <p>{description}</p>
        </div>
    )
}
