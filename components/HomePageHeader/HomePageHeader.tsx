import React, { useEffect, useRef, useState } from "react";
import { CupIcon } from "./Cup";
import styles from "./HomePageHeader.module.css";

export const HomePageHeader: React.FC = () => {
    const headerRef = useRef<HTMLElement | null>(null);
    const [headerHeight, setHeaderHeight] = useState<number>(0);
    useEffect(() => {
        const computeHeight = () => (
            window.requestAnimationFrame(() => {
                if (headerRef.current) {
                    setHeaderHeight(headerRef.current.clientHeight);
                }
            }))
        window.addEventListener('resize', computeHeight);
        computeHeight();
        return () => window.removeEventListener('resize', computeHeight);
    }, [setHeaderHeight, headerRef]);
    return <>
        <header className={styles.homeHeader} ref={headerRef}></header>
        <div className={styles.headerPlaceholder} style={{ height: `${headerHeight}px` }} />
        <h1 className={styles.title}>
            <CupIcon style={{ marginRight: 16, marginBottom: -12 }} />
            Votre futur <strong>café de quartier</strong>
        </h1>
    </>
}