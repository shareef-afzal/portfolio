import React from "react";

import styles from "./Projects.module.css"
import Projects from "../../data/projects.json"

import { ProjectCard } from "./ProjectCard";
export const Project=()=>{
    return <section className={styles.container} id="Projects">
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projects}>
            {
                Projects.map((project,id)=>{
                    return(
                       <ProjectCard key={id} project={project}/>
                    );
                })
            }
        </div>
    </section>
}