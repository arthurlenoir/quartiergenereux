import { useRouter } from "next/router";
import React, { ReactNode, useCallback } from "react";
import { Menu, MenuItem } from "../../types/menu";
import { FacebookIcon } from "../Icons/FacebookIcon";
import { InstagramIcon } from "../Icons/InstagramIcon";
import { TelegramIcon } from "../Icons/TelegramIcon";
import { TwitterIcon } from "../Icons/TwitterIcon";
import { useScrollPercent } from "./hooks";
import styles from './Root.module.css';

interface Props {
    children: ReactNode;
    menu: Menu | null;
}

const SCROLL_THRESHOLD = 40;
const FULL_SIZE_HEADER_HEIGHT = 140;
const COMPACT_HEADER_HEIGHT = 60;
const scrollToFullyReduceHeader = FULL_SIZE_HEADER_HEIGHT - COMPACT_HEADER_HEIGHT;

export const Root: React.FC<Props> = ({ children, menu }) => {
    const { asPath } = useRouter();
    const scrollPercent = useScrollPercent(scrollToFullyReduceHeader, SCROLL_THRESHOLD);

    const renderMenuItems = useCallback((menuItem: MenuItem) => {
        return <li key={menuItem.id} className={menuItem.uri === asPath || menuItem.uri === `${asPath}/` ? styles.active : undefined}>
            <a href={menuItem.uri === "/" ? menuItem.uri : menuItem.uri.substring(0, menuItem.uri.length - 1)}>{menuItem.label}</a>
        </li>
    }, [asPath]);


    return <div className={styles.container}>
        <header className={scrollPercent >= 1 ? `${styles.header} ${styles.reducedHeader}` : styles.header} style={{
            height: FULL_SIZE_HEADER_HEIGHT - scrollToFullyReduceHeader * scrollPercent,
            padding: `${20 - 10 * scrollPercent}px 0`,
        }}>
            <div className={styles.container}>
                <figure className={styles.logo} />
                <div className={styles.rightHeader}>
                    <nav className={styles.socialMedia}>
                        <ul>
                            <li><a href="#"><FacebookIcon height={28} /></a></li>
                            <li><a href="#"><TwitterIcon height={28} /></a></li>
                            <li><a href="#"><InstagramIcon height={28} /></a></li>
                            <li><a href=" https://t.me/+eLtdeKh7OwJjN2I0" target="_blank"><TelegramIcon height={28} /></a></li>
                        </ul>
                    </nav>
                    <nav className={styles.mainMenu}>
                        <ul>
                            {menu?.menuItems && menu.menuItems.map(renderMenuItems)}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
        <main className={styles.main}>
            {children}
        </main>
    </div>
}