import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css"
export const Hero=()=>{
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi , I'm Afzal</h1>
                <p className={styles.description}>Iam a 2nd year at IIEST shibpur who cracked the code to print "Hello World" and now into Web dev, Machine Learning, Competetive Programming and Figma</p>
                
                <a href="mailto:afzalshareef1005@gmial.com" className={styles.contactBtn}>
                    Contact Me
                </a>
            </div>
            <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg} />
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    );
};