import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";
export const Contact=()=>{
    return <footer className={styles.container} id="Contact">
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach  out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                <a href="mailto:afzalshareef1005@gmail.com" target="_blank">afzalshareef1005@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="Email icon" />
                <a href="https://www.linkedin.com/in/afzal-shareef-aa516a2a9" target="_blank">Linkedin.com/shareef_afzal</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Email icon" />
                <a href="https://github.com/shareef-afzal" target="_blank">my github profile</a>
            </li>
        </ul>
    </footer>
}