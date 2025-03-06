import React from "react";
import skills from "../../data/skills.json"
import history from "../../data/history.json"
import styles from "./SkillsAndCp.module.css"
import { getImageUrl } from "../../utils";
export const SkillsAndCp=()=>{
    return <section className={styles.container} id="Skill&cp">
        <div className={styles.content}>
        <div className={styles.skills}>
            <h2 className={styles.title}>Skills</h2>
            <div className={styles.skillsContainer}>
                {skills.map((skill, id) => (
                    <div key={id} className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                        </div>
                        <p>{skill.title}</p>
                    </div>
                ))}
            </div>
</div>
            <ul className={styles.history}>
            <h2 className={styles.title}>Coding Profiles</h2>
                {
                    history.map((historyItem,id)=>{
                        return <li key={id} className={styles.historyItem}>
                            <a href={historyItem.link} target="_blank" >
                            <img 
                            src={getImageUrl(historyItem.imageSrc)} 
                            alt={history.platform} 
                            className={styles.cpLogo}/>
                            </a>
                            <div className={styles.historyItemDetails}>
                                <h3>{`${historyItem.platform}`}</h3>
                                <p className={styles.rating}>{`Max Rating: ${historyItem.maxRating}`}</p>
                                <p className={styles.merit}> {`${historyItem.award}`}</p>
                            </div>
                        </li>
                    })
                }
            </ul>
        </div>
    </section>
}