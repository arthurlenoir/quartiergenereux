import React, { useEffect, useState } from "react";

import styles from "./Footer.module.css";
import rootStyles from "../Root/Root.module.css";
import Image from "next/image";

enum DAYS {
    MONDAY = 1,
    TUESDAY = 2,
    WEDNESDAY = 3,
    THURSDAY = 4,
    FRIDAY = 5,
    SATURDAY = 6,
    SUNDAY = 0,
}

const getTime = async () => {
    const res = await fetch('https://worldtimeapi.org/api/timezone/Europe/Paris');
    const data = await res.json();
    return new Date(data.datetime);
}

export const Footer: React.FC = () => {
    const [day, setDay] = useState<number>(new Date().getDay());

    useEffect(() => {
        const updateDate = async () => {
            try {
                const now = await getTime();
                setDay(now.getDay());
                console.log("set date", now)
            }
            catch (e) {
                console.log('error', e)
                console.log('setDay', new Date().getDay())
                setDay(new Date().getDay());
            }
            window.setTimeout(updateDate, 3600000);
        };
        updateDate();
    }, [setDay]);

    return <footer className={styles.footer}>
        <div className={`${rootStyles.container} ${styles.footerContainer}`}>
            <div className={styles.footerSection}>
                <h2 className={styles.footerTitle}>Horaires d&apos;ouverture</h2>
                <ul className={styles.footerSchedule}>
                    <li className={`${styles.schedule} ${day === DAYS.MONDAY ? styles.scheduleToday : ''}`}>
                        <span className={styles.scheduleDay}>lundi</span>
                        <span className={styles.scheduleSep} />
                        <span className={styles.scheduleHours}>fermé</span>
                    </li>
                    <li className={`${styles.schedule} ${day === DAYS.TUESDAY ? styles.scheduleToday : ''}`}>
                        <span className={styles.scheduleDay}>mardi</span>
                        <span className={styles.scheduleSep} />
                        <span className={styles.scheduleHours}>fermé</span>
                    </li>
                    <li className={`${styles.schedule} ${day === DAYS.WEDNESDAY ? styles.scheduleToday : ''}`}>
                        <span className={styles.scheduleDay}>mercredi</span>
                        <span className={styles.scheduleSep} />
                        <span className={styles.scheduleHours}>9h - 22h</span>
                    </li>
                    <li className={`${styles.schedule} ${day === DAYS.THURSDAY ? styles.scheduleToday : ''}`}>
                        <span className={styles.scheduleDay}>jeudi</span>
                        <span className={styles.scheduleSep} />
                        <span className={styles.scheduleHours}>17h30 - 1h</span>
                    </li>
                    <li className={`${styles.schedule} ${day === DAYS.FRIDAY ? styles.scheduleToday : ''}`}>
                        <span className={styles.scheduleDay}>vendredi</span>
                        <span className={styles.scheduleSep} />
                        <span className={styles.scheduleHours}>17h30 - 1h</span>
                    </li>
                    <li className={`${styles.schedule} ${day === DAYS.SATURDAY ? styles.scheduleToday : ''}`}>
                        <span className={styles.scheduleDay}>samedi</span>
                        <span className={styles.scheduleSep} />
                        <span className={styles.scheduleHours}>17h30 - 1h</span>
                    </li>
                    <li className={`${styles.schedule} ${day === DAYS.SUNDAY ? styles.scheduleToday : ''}`}>
                        <span className={styles.scheduleDay}>dimanche</span>
                        <span className={styles.scheduleSep} />
                        <span className={styles.scheduleHours}>fermé</span>
                    </li>
                </ul>

                <h2 className={styles.footerTitle}>Nous contacter</h2>
                <address>
                    <a href="mailto:contact@quartiergenereux.fr" className={styles.contactLink}>contact@quartiergenereux.fr</a>
                    <a href="https://www.google.fr/maps/place/Quartier+G%C3%A9n%C3%A9reux/@43.6159593,3.8725947,17z/data=!3m1!4b1!4m5!3m4!1s0x12b6af3f476bf623:0x1e15ffecd0c43d07!8m2!3d43.6159593!4d3.8747834?shorturl=1" rel="noreferrer" target="_blank" className={styles.contactLink}>
                        2, Quai des Tanneurs<br />34090 Montpellier</a>
                </address>
            </div>
            <div className={styles.footerSection}>
                <h2 className={styles.footerTitle}>Nous trouver</h2>
                <figure className={styles.mapFigure}>
                    <Image className={styles.mapFigureImage} src="/plan-quartier-genereux.svg" fill alt="Plan d'accès au Quartier Généreux" />
                </figure>
            </div>
        </div>
    </footer >
}