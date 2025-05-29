'use client';
import styles from './page.module.css'
import { useState } from 'react';
import Project from '../components/project';
import Modal from '../components/modal';

const projects = [{
  title: "reel-2024",
  description: "Motion Design & Video",
  src: "reel.jpg",
  color: "#000000"
},
{
  title: ".web",
  description: "Web Development",
  src: "character02.gif",
  color: "#00b2ff"
}, {
  title: "cv--",
  description: "Download CV",
  src: "cv.png",
  color: "#FF1E8D"
},
{
  title: ".contact",
  description: "Let's Talk",
  src: "contacto.gif",
  color: "#706D63"
}
]

export default function Home() {

  const [modal, setModal] = useState({ active: false, index: 0 })

  return (
    <main className={styles.main}>      <div className={styles.body}>
      {
        projects.map((project, index) => {
          return <Project
            index={index}
            title={project.title}
            description={project.description}
            setModal={setModal}
            key={index}
          />
        })
      }
    </div>
      <Modal modal={modal} projects={projects} />
    </main>
  )
}
