'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

const webProjects = [
    {
        id: 1,
        title: "E-commerce Platform",
        description: "Modern e-commerce solution with seamless user experience",
        tags: ["React", "Node.js", "MongoDB"],
        image: "/images/character02.gif",
        images: ["/images/character02.gif", "/images/body.jpg", "/images/face.jpg"],
        color: "#00b2ff"
    },
    {
        id: 2,
        title: "Brand Identity System",
        description: "Complete visual identity for tech startup",
        tags: ["Branding", "UI/UX", "Design System"],
        image: "/images/officestudio.png",
        images: ["/images/officestudio.png", "/images/portrait.jpg", "/images/breeathe.jpg"],
        color: "#FF1E8D"
    },
    {
        id: 3,
        title: "Mobile App Interface",
        description: "Intuitive mobile experience for wellness app",
        tags: ["Mobile", "React Native", "Figma"],
        image: "/images/silencio.png",
        images: ["/images/silencio.png", "/images/cv.png", "/images/reel.jpg"],
        color: "#CCFF00"
    },
    {
        id: 4,
        title: "Portfolio Website",
        description: "Creative portfolio showcasing artistic work",
        tags: ["Next.js", "GSAP", "Creative"],
        image: "/images/contacto.gif",
        images: ["/images/contacto.gif", "/images/character02.gif", "/images/face.jpg"],
        color: "#706D63"
    }
];

export default function WebPage() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [rotation, setRotation] = useState(0);
    const [isMobile, setIsMobile] = useState(false); useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setRotation(prev => prev + 0.1); // Mucho más lento
        }, 50); // Intervalo más largo para movimiento muy suave

        return () => clearInterval(interval);
    }, []); const handleProjectClick = (project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0); // Reset to first image when opening modal
    };

    const closeModal = () => {
        setSelectedProject(null);
        setCurrentImageIndex(0);
    };

    const nextImage = () => {
        if (selectedProject && selectedProject.images.length > 1) {
            setCurrentImageIndex(prev =>
                prev === selectedProject.images.length - 1 ? 0 : prev + 1
            );
        }
    };

    const prevImage = () => {
        if (selectedProject && selectedProject.images.length > 1) {
            setCurrentImageIndex(prev =>
                prev === 0 ? selectedProject.images.length - 1 : prev - 1
            );
        }
    };

    const goToImage = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className={styles.container}>
            <div className={styles.backButtonContainer}>
                <Link href="/" className={styles.backButton}>
                    &larr; Back
                </Link>
            </div>            <div className={styles.title}>
                <h1>.web</h1>
                <p>--motion --webdev --3D --IA</p>
            </div>

            <div className={styles.carouselContainer}>        <div className={styles.carousel}>                {webProjects.map((project, index) => {
                // Calcular el ángulo base para cada proyecto distribuido uniformemente
                const baseAngle = (index * 360) / webProjects.length;
                // Sumar la rotación actual para el movimiento
                const currentAngle = baseAngle + rotation;
                // Convertir a radianes para los cálculos trigonométricos
                const radians = (currentAngle * Math.PI) / 180;                    // Radio responsivo: vuelto a valores originales
                let radius = 200; // Desktop
                if (typeof window !== 'undefined') {
                    if (window.innerWidth <= 480) {
                        radius = 80; // Móviles muy pequeños
                    } else if (window.innerWidth <= 768) {
                        radius = 100; // Móviles normales
                    }
                }

                // Calcular posición en el círculo
                const x = Math.cos(radians) * radius;
                const y = Math.sin(radians) * radius;

                // Debug: mostrar valores en consola
                if (index === 0) {
                    console.log('Rotation:', rotation, 'Angle:', currentAngle, 'X:', x, 'Y:', y);
                }

                return (
                    <div
                        key={project.id}
                        className={styles.projectItem}
                        style={{
                            transform: `translate(${x}px, ${y}px)`,
                            transition: 'none' // Quitar transición para movimiento suave
                        }}
                        onClick={() => handleProjectClick(project)}
                    >
                        <div className={styles.projectImage}>
                            <img src={project.image} alt={project.title} />
                        </div>
                    </div>
                );
            })}
            </div>
            </div>            {selectedProject && (
                <div className={styles.modalOverlay} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeButton} onClick={closeModal}>
                            ×
                        </button>
                        <div className={styles.projectCard}>
                            <div className={styles.projectImageLarge}>
                                <div className={styles.carouselWrapper}>
                                    <img
                                        src={selectedProject.images[currentImageIndex]}
                                        alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                                    />

                                    {selectedProject.images.length > 1 && (
                                        <>
                                            <button
                                                className={`${styles.carouselButton} ${styles.prevButton}`}
                                                onClick={prevImage}
                                            >
                                                &#8249;
                                            </button>
                                            <button
                                                className={`${styles.carouselButton} ${styles.nextButton}`}
                                                onClick={nextImage}
                                            >
                                                &#8250;
                                            </button>

                                            <div className={styles.carouselDots}>
                                                {selectedProject.images.map((_, index) => (
                                                    <button
                                                        key={index}
                                                        className={`${styles.dot} ${index === currentImageIndex ? styles.activeDot : ''}`}
                                                        onClick={() => goToImage(index)}
                                                    />
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className={styles.projectInfo}>
                                <h2>{selectedProject.title}</h2>
                                <p className={styles.projectDescription}>{selectedProject.description}</p>
                                <div className={styles.projectTags}>
                                    {selectedProject.tags.map((tag, index) => (
                                        <span key={index} className={styles.tag}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className={`${styles.blurLayer} ${selectedProject ? styles.active : ''}`}></div>
        </div>
    );
}
