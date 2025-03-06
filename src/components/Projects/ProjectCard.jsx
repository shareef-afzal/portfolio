import React from "react";
import styles from "./ProjectCard.module.css"
import { getImageUrl } from "../../utils";
export const ProjectCard=({project})=>{
    return (
    <div className={styles.container}>
        <img 
            src={getImageUrl(project.imageSrc)} 
            alt={`Image of ${project.title}`} 
            className={styles.image}
        />
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <a href={project.link} className={styles.link} target="_blank">Link</a>
    </div>
    )
}