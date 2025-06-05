'use client';
import Link from 'next/link';
import styles from './page.module.css';

export default function CVPage() {
    return (
        <div className={styles.container}>            <div className={styles.backButtonContainer}>
            <Link href="/" className={styles.backButton}>
                ← Back
            </Link>
        </div>

            <div className={styles.content}>
                <header className={styles.header}>
                    <div className={styles.profileSection}>
                        <div className={styles.avatar}>
                            <img src="/images/portrait.jpg" alt="Profile" />
                        </div>                        <div className={styles.headerInfo}>
                            <h1 className={styles.name}>corymotion</h1>
                            <p className={styles.title}>Motion Designer in México, He/him</p>
                            <p className={styles.availability}>Like totally avaibs for work, or jobs or cool projects!</p>
                        </div>
                    </div>
                    <div className={styles.downloadSection}>
                        <a href="/cv-corymotion.pdf" download="CV-CoryMotion.pdf" className={styles.downloadButton}>
                            <span>📄</span> Download PDF
                        </a>
                    </div>
                </header>

                <main className={styles.main}>
                    <section className={styles.section}>
                        <h2>Work Experience</h2>

                        <div className={styles.experienceItem}>
                            <div className={styles.period}>2019 — Now</div>
                            <div className={styles.details}>
                                <h3>Multimedia Production Coordinator at <span className={styles.company}>INE</span></h3>
                                <p className={styles.location}>México</p>
                                <p className={styles.description}>
                                    • Design communication strategies for the institute, social media, and the
                                    Electoral Central website.
                                </p>
                            </div>
                        </div>

                        <div className={styles.experienceItem}>
                            <div className={styles.period}>2019 — 2020</div>
                            <div className={styles.details}>
                                <h3>Digital Visual Designer at <span className={styles.company}>MVS Radio</span></h3>
                                <p className={styles.location}>México</p>
                                <p className={styles.description}>
                                    • Provide service to Development, Marketing, and Advertising teams by creating
                                    materials, assets and proposals for creative campaigns for various clients.
                                </p>
                            </div>
                        </div>

                        <div className={styles.experienceItem}>
                            <div className={styles.period}>2018 — 2019</div>
                            <div className={styles.details}>
                                <h3>Art Director at <span className={styles.company}>Discovery Networks</span></h3>
                                <p className={styles.location}>México</p>
                                <p className={styles.description}>
                                    • Collaborate with the creative team to develop new products for clients,
                                    coordinating with outsourcing teams for the production of new franchises and audiovisual
                                    materials for the On Air team.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2>Education</h2>

                        <div className={styles.experienceItem}>
                            <div className={styles.period}>2003 — 2009</div>
                            <div className={styles.details}>
                                <h3>Bachelor&apos;s in Graphic Communication Design at <span className={styles.company}>UAM Azcapotzalco</span></h3>
                                <p className={styles.location}>México</p>
                            </div>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2>Awards</h2>

                        <div className={styles.experienceItem}>
                            <div className={styles.period}>2015</div>
                            <div className={styles.details}>
                                <h3>Gold Social Campaign from <span className={styles.company}>Promax BDA</span></h3>
                                <p className={styles.projectTitle}>Identidad SPR/Canal 14</p>
                            </div>
                        </div>

                        <div className={styles.experienceItem}>
                            <div className={styles.period}>2010</div>
                            <div className={styles.details}>
                                <h3>Gold Self Promotion from <span className={styles.company}>Promax BDA</span></h3>
                                <p className={styles.projectTitle}>MVS Reel 2010</p>
                            </div>                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}
