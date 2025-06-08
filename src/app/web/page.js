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
        image: "/projects-web/humo santo/original-593ebcc27bea54ece9dabbc7c9e5ac4d.webp",
        images: [
            "/projects-web/humo santo/original-593ebcc27bea54ece9dabbc7c9e5ac4d.webp",
            "/projects-web/humo santo/original-547e1c17955832dc26ffb5e6c077ccee.webp",
            "/projects-web/humo santo/original-5fa92d16d8af18d791012267c0ab9fd2.webp",
            "/projects-web/humo santo/original-ecd7bb5e33c54414454155477738d7c9.webp"
        ],
        color: "#FF6B35",
        type: "image",
        ratio: "square"
    },
    {
        id: 2,
        title: "Wellness App",
        description: "Desarrollé una red social interna para un cliente, centrada en el bienestar. La app incluía contenido exclusivo y retos semanales para los usuarios. También diseñé el splash screen y la pantalla de inicio de sesión, partiendo desde Figma hasta su implementación final.",
        tags: ["HTML", "app", "webapp", "UX/UI", "figma"],
        image: "/projects-web/wellnes app/original-f3fa8e9597333e6e52060a4a0abc90ab.webp",
        images: [
            "/projects-web/wellnes app/original-f3fa8e9597333e6e52060a4a0abc90ab.webp",
            "/projects-web/wellnes app/original-8bb9966db6894f8d490af014ed21f15b.mp4",
            "/projects-web/wellnes app/original-d809ba5be7118696efa0d7b09983e866.webp"
        ],
        color: "#00D4AA",
        type: "mixed",
        ratio: "portrait"
    },
    {
        id: 3,
        title: "Sin Mujeres No Hay Democracia",
        description: "En 2023 colaboré con el INE y INMUJERES para producir una animación conmemorativa y de concientización sobre la importancia del papel de las mujeres en la democracia. Un proyecto breve pero poderoso, con gran impacto social.",
        tags: ["motion design", "3D", "blender", "after effects"],
        image: "/projects-web/INE--mujeres/original-1392a4cd881b8ba3d9785ee16185a96d.m4v",
        images: ["/projects-web/INE--mujeres/original-1392a4cd881b8ba3d9785ee16185a96d.m4v"],
        color: "#8B5CF6",
        type: "video",
        ratio: "landscape"
    },
    {
        id: 4,
        title: "Verbena",
        description: "Realicé una serie de renders para la marca Verbena, cuidando cada detalle para destacar la estética de sus productos. Fue un ejercicio de dirección de arte digital en el que combiné iluminación, materiales y composición para generar imágenes atractivas y funcionales.",
        tags: ["blender", "cycles", "3D", "product"],
        image: "/projects-web/verbena/N4RpYNQ7IPFkWt4A-product.png",
        images: ["/projects-web/verbena/N4RpYNQ7IPFkWt4A-product.png"],
        color: "#F59E0B",
        type: "image",
        ratio: "square"
    },
    {
        id: 5,
        title: "Error Page / Splash Screen",
        description: "Estas piezas forman parte de mis proyectos personales, en donde experimento con diseño UI/UX y animación en Figma. El objetivo es probar nuevas ideas y mejorar continuamente mis habilidades visuales y narrativas.",
        tags: ["HTML", "motion", "Rive", "after effects", "figma"],
        image: "/projects-web/error page/original-da86a7f441077b826355b826f6175e72.mp4",
        images: ["/projects-web/error page/original-da86a7f441077b826355b826f6175e72.mp4"],
        color: "#EF4444",
        type: "video",
        ratio: "landscape"
    },
    {
        id: 6,
        title: "Crocs Out-of-Home VFX",
        description: "Desarrollé una serie de piezas animadas estilo CGI Ad, integrando productos de Crocs en espacios públicos populares mediante composición 3D y motion tracking. Inspiradas en la tendencia de product drops digitales.",
        tags: ["CGI", "VFX", "product drop", "3D", "motion tracking", "guerrilla marketing"],
        image: "/projects-web/crocs/users_clr8cq4c2073oor01t4h4fgh8_1ez0N1PFelHHOg4j-crocs.mp4",
        images: [
            "/projects-web/crocs/users_clr8cq4c2073oor01t4h4fgh8_1ez0N1PFelHHOg4j-crocs.mp4",
            "/projects-web/crocs/users_clr8cq4c2073oor01t4h4fgh8_bEjcCs2yehwAXKan-CU_2.mp4"
        ],
        color: "#10B981",
        type: "video",
        ratio: "landscape"
    },
    {
        id: 7,
        title: "Hope",
        description: "Proyecto personal de exploración visual centrado en el desarrollo de branding y splash screen para una app conceptual llamada Hope. El diseño fue realizado íntegramente en Figma, enfocándome en transmitir calma, claridad y propósito.",
        tags: ["figma", "branding", "UI", "splash", "concept design"],
        image: "/projects-web/hope/original-5b06b9cc979f3b58f83b7f729de540b9.mp4",
        images: ["/projects-web/hope/original-5b06b9cc979f3b58f83b7f729de540b9.mp4"],
        color: "#6366F1",
        type: "video",
        ratio: "portrait"
    },    {
        id: 8,
        title: "Blender VFX",
        description: "Efectos especiales y animaciones 3D creados en Blender. Incluye simulaciones de granadas, explosiones y efectos de partículas con técnicas avanzadas de motion graphics y VFX.",
        tags: ["blender", "VFX", "motion graphics", "3D", "explosions", "particles"],
        image: "/projects-web/blender/users_clr8cq4c2073oor01t4h4fgh8_A3LYyYhJ1HLUCNHf-grenade.mp4",
        images: [
            "/projects-web/blender/users_clr8cq4c2073oor01t4h4fgh8_A3LYyYhJ1HLUCNHf-grenade.mp4",
            "/projects-web/blender/users_clr8cq4c2073oor01t4h4fgh8_rVa64FA3seWCGFTw-pre%202.mp4",
            "/projects-web/blender/users_clr8cq4c2073oor01t4h4fgh8_1pV9kqB4C04xGH4i-cardboard.mp4"
        ],
        color: "#F97316",
        type: "video",
        ratio: "landscape"
    },
    {
        id: 9,
        title: "3D Product Design",
        description: "Visualizaciones de productos 3D y estudios de composición digital. Proyectos que combinan modelado, iluminación y rendering para crear imágenes impactantes de productos conceptuales.",
        tags: ["blender", "product design", "3D", "rendering", "visualization"],
        image: "/projects-web/blender/Vs0sAF39LXIfYXyc-jynx_bomb.jpg",
        images: [
            "/projects-web/blender/Vs0sAF39LXIfYXyc-jynx_bomb.jpg",
            "/projects-web/blender/oLuOFtW4FOQQRSuS-bomb.jpg"
        ],
        color: "#DC2626",
        type: "image",
        ratio: "square"
    },
    {
        id: 10,
        title: "Motion Graphics Lab",
        description: "Laboratorio de motion graphics donde experimento con animaciones, transiciones y efectos visuales. Incluye trabajos de composición y post-producción usando técnicas mixtas.",
        tags: ["motion graphics", "compositing", "after effects", "blender", "experimental"],
        image: "/projects-web/blender/users_clr8cq4c2073oor01t4h4fgh8_BvaaXL2AHtJQ2Tjk-pc_low.mp4",
        images: [
            "/projects-web/blender/users_clr8cq4c2073oor01t4h4fgh8_BvaaXL2AHtJQ2Tjk-pc_low.mp4",
            "/projects-web/blender/users_clr8cq4c2073oor01t4h4fgh8_dOIaYxIKVjJpJfDq-loreal02.mp4"
        ],
        color: "#7C3AED",
        type: "video",
        ratio: "landscape"
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
