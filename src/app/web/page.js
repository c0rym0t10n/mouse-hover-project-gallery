'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

const webProjects = [
    {
        id: 1,
        title: "Humo Santo",
        description: "Los amigos de Humo Santo me invitaron a colaborar en la creación de imágenes para su landing page y redes sociales. Esta propuesta inicial busca establecer una nueva línea de comunicación visual: fresca, colorida y con mucha actitud. ¡Ahuevo, viejón!",
        tags: ["blender", "cycles", "3D", "product"],
        image: "/projects-web/humo-santo_02.webp",
        images: ["/projects-web/humo-santo_02.webp"],
        color: "#FF6B35",
        type: "image",
        ratio: "square"
    },
    {
        id: 2,
        title: "Wellness App",
        description: "Desarrollé una red social interna para un cliente, centrada en el bienestar. La app incluía contenido exclusivo y retos semanales para los usuarios. También diseñé el splash screen y la pantalla de inicio de sesión, partiendo desde Figma hasta su implementación final.",
        tags: ["HTML", "app", "webapp", "UX/UI", "figma"],
        image: "/projects-web/wellness-app_012.png",
        images: ["/projects-web/wellness-app_012.png", "/projects-web/wellness-app_013.mp4"],
        color: "#00D4AA",
        type: "mixed",
        ratio: "portrait"
    },
    {
        id: 3,
        title: "Sin Mujeres No Hay Democracia",
        description: "En 2023 colaboré con el INE y INMUJERES para producir una animación conmemorativa y de concientización sobre la importancia del papel de las mujeres en la democracia. Un proyecto breve pero poderoso, con gran impacto social.",
        tags: ["motion design", "3D", "blender", "after effects"],
        image: "/projects-web/ine-mujeres_010.mp4",
        images: ["/projects-web/ine-mujeres_010.mp4", "/projects-web/ine-mujeres_011.mp4", "/projects-web/ine-mujeres_07.mp4", "/projects-web/ine-mujeres_09.m4v"],
        color: "#8B5CF6",
        type: "video",
        ratio: "landscape"
    },
    {
        id: 4,
        title: "Verbena",
        description: "Realicé una serie de renders para la marca Verbena, cuidando cada detalle para destacar la estética de sus productos. Fue un ejercicio de dirección de arte digital en el que combiné iluminación, materiales y composición para generar imágenes atractivas y funcionales.",
        tags: ["blender", "cycles", "3D", "product"],
        image: "/projects-web/verbena_02.webp",
        images: ["/projects-web/verbena_02.webp", "/projects-web/verbena_03.webp"],
        color: "#F59E0B",
        type: "image",
        ratio: "square"
    },
    {
        id: 5,
        title: "Error Page / Splash Screen",
        description: "Estas piezas forman parte de mis proyectos personales, en donde experimento con diseño UI/UX y animación en Figma. El objetivo es probar nuevas ideas y mejorar continuamente mis habilidades visuales y narrativas.",
        tags: ["HTML", "motion", "Rive", "after effects", "figma"],
        image: "/projects-web/error-page_01.mp4",
        images: ["/projects-web/error-page_01.mp4"],
        color: "#EF4444",
        type: "video",
        ratio: "landscape"
    },
    {
        id: 6,
        title: "Crocs Out-of-Home VFX",
        description: "Desarrollé una serie de piezas animadas estilo CGI Ad, integrando productos de Crocs en espacios públicos populares mediante composición 3D y motion tracking. Inspiradas en la tendencia de product drops digitales.",
        tags: ["CGI", "VFX", "product drop", "3D", "motion tracking", "guerrilla marketing"],
        image: "/projects-web/crocs_014.mp4",
        images: ["/projects-web/crocs_014.mp4"],
        color: "#10B981",
        type: "video",
        ratio: "landscape"
    },
    {
        id: 7,
        title: "Hope",
        description: "Proyecto personal de exploración visual centrado en el desarrollo de branding y splash screen para una app conceptual llamada Hope. El diseño fue realizado íntegramente en Figma, enfocándome en transmitir calma, claridad y propósito.",
        tags: ["figma", "branding", "UI", "splash", "concept design"],
        image: "/projects-web/hope_018.jpg",
        images: ["/projects-web/hope_018.jpg", "/projects-web/hope_019.jpg"],
        color: "#6366F1",
        type: "image",
        ratio: "portrait"
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
                }                return (
                    <div
                        key={project.id}
                        className={styles.projectItem}
                        style={{
                            transform: `translate(${x}px, ${y}px)`,
                            transition: 'none' // Quitar transición para movimiento suave
                        }}
                        onClick={() => handleProjectClick(project)}
                    ><div className={styles.projectImage}>
                            {project.image.endsWith('.mp4') || project.image.endsWith('.m4v') ? (
                                <video 
                                    src={project.image} 
                                    alt={project.title}
                                    autoPlay 
                                    loop 
                                    muted 
                                    playsInline
                                />
                            ) : (
                                <img src={project.image} alt={project.title} />
                            )}
                        </div>
                        <div className={styles.projectMiniInfo}>
                            <h3 className={styles.projectMiniTitle}>{project.title}</h3>
                            <div className={styles.projectMiniTags}>
                                {project.tags.slice(0, 2).map((tag, tagIndex) => (
                                    <span 
                                        key={tagIndex} 
                                        className={styles.miniTag}
                                        style={{ backgroundColor: project.color }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                                {project.tags.length > 2 && (
                                    <span className={styles.miniTagMore}>
                                        +{project.tags.length - 2}
                                    </span>
                                )}
                            </div>
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
                        <div className={styles.projectCard}>                            <div className={`${styles.projectImageLarge} ${styles[`modal-${selectedProject.ratio}`]}`}>
                                <div className={`${styles.carouselWrapper} ${selectedProject.title === "Wellness App" ? styles.wellnessScroll : ""}`}>
                                    {selectedProject.images[currentImageIndex].endsWith('.mp4') || 
                                     selectedProject.images[currentImageIndex].endsWith('.m4v') ? (
                                        <video
                                            src={selectedProject.images[currentImageIndex]}
                                            alt={`${selectedProject.title} - Video ${currentImageIndex + 1}`}
                                            autoPlay 
                                            loop 
                                            muted 
                                            playsInline
                                            controls={selectedProject.title === "Wellness App"}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover'
                                            }}
                                        />
                                    ) : (
                                        <img
                                            src={selectedProject.images[currentImageIndex]}
                                            alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                                        />
                                    )}

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
