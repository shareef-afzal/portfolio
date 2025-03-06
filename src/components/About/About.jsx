import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css"
export const About=()=>{
    return <section className={styles.container} id="About">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img 
                src={getImageUrl("about/aboutImage.png")}
                alt="Aboout Image" 
                className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>I'm a frontend developer with little hands on experience</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/MLicon.png")} alt="ML icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Machine Learning</h3>
                        <p>Iam good at classical ML algorithms , RNN's and LSTM's of Deep Learning </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
                    <div className={styles.aboutItemText}>
                        <h3>UI Designer</h3>
                        <p>I have designed UI pages with beautiful animations and effects using FIGMA</p>
                    </div>
                </li>

            </ul>
        </div>
    </section>
}