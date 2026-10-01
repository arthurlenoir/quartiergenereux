import { useRouter } from "next/router";
import React, { ReactNode, useCallback, useState } from "react";
import { Menu, MenuItem } from "../../types/menu";
import { FacebookIcon } from "../Icons/FacebookIcon";
import { InstagramIcon } from "../Icons/InstagramIcon";
import { TelegramIcon } from "../Icons/TelegramIcon";
import { useScrollPercent } from "./hooks";
import styles from "./Root.module.css";
import { ChevronDown } from "../Icons/ChevronDown";

interface Props extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  children: ReactNode;
  menu: Menu | null;
}

const SCROLL_THRESHOLD = 40;
const FULL_SIZE_HEADER_HEIGHT = 140;
const COMPACT_HEADER_HEIGHT = 60;
const scrollToFullyReduceHeader =
  FULL_SIZE_HEADER_HEIGHT - COMPACT_HEADER_HEIGHT;

export const Root: React.FC<Props> = ({
  children,
  menu,
  className,
  ...props
}) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const { asPath } = useRouter();
  const scrollPercent = useScrollPercent(
    scrollToFullyReduceHeader,
    SCROLL_THRESHOLD,
  );

  const toggleMenu = useCallback(
    () => setOpenMenu((value) => !value),
    [setOpenMenu],
  );

  const renderMenuItems = useCallback(
    (menuItem: MenuItem) => {
      return (
        <li
          key={menuItem.id}
          className={
            menuItem.uri === asPath || menuItem.uri === `${asPath}/`
              ? styles.active
              : undefined
          }
        >
          <a
            href={
              menuItem.uri === "/"
                ? menuItem.uri
                : menuItem.uri.substring(0, menuItem.uri.length - 1)
            }
          >
            {menuItem.label}
            {menuItem.children && menuItem.children.length > 0 && (
              <ChevronDown height={24} />
            )}
          </a>
          {menuItem.children && menuItem.children.length > 0 && (
            <div className={styles.subMenu}>
              <ul>{menuItem.children.map(renderMenuItems)}</ul>
            </div>
          )}
        </li>
      );
    },
    [asPath],
  );

  return (
    <div className={`${styles.container} ${className}`} {...props}>
      <header
        className={
          scrollPercent >= 1
            ? `${styles.header} ${styles.reducedHeader}`
            : styles.header
        }
        style={{
          height:
            FULL_SIZE_HEADER_HEIGHT - scrollToFullyReduceHeader * scrollPercent,
          padding: `${20 - 10 * scrollPercent}px 0`,
        }}
      >
        <div className={styles.container}>
          <figure className={styles.logo} />
          <div className={styles.rightHeader}>
            <nav
              className={styles.socialMedia}
              style={{ margin: `${8 * (1 - scrollPercent)}px 0` }}
            >
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/qg.montpellier"
                    aria-label="suivez nous sur Facebook"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FacebookIcon height={28 * (1 - scrollPercent)} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/qg.montpellier"
                    aria-label="suivez nous sur Instagram"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <InstagramIcon height={28 * (1 - scrollPercent)} />
                  </a>
                </li>
                <li>
                  <a
                    href=" https://t.me/+eLtdeKh7OwJjN2I0"
                    aria-label="suivez nous sur Telegram"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <TelegramIcon height={28 * (1 - scrollPercent)} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.helloasso.com/associations/le-quartier-genereux/formulaires/1"
                    aria-label="Je fais un don au Quartier Généreux"
                    rel="noreferrer"
                    target="_blank"
                    className={styles.headerCallToAction}
                    style={{
                      fontSize: `${18 * (1 - scrollPercent)}px`,
                      padding: `${8 * (1 - scrollPercent)}px 24px`,
                    }}
                  >
                    Je fais un don
                  </a>
                </li>
              </ul>
            </nav>
            <nav className={styles.mainMenu}>
              <ul>{menu?.menuItems && menu.menuItems.map(renderMenuItems)}</ul>
            </nav>
          </div>
        </div>
      </header>
      <div
        className={`${styles.mobileMenuToggle} ${openMenu ? styles.open : ""}`}
        onClick={toggleMenu}
      ></div>
      <nav className={`${styles.mobileMenu} ${openMenu ? styles.open : ""}`}>
        <ul>{menu?.menuItems && menu.menuItems.map(renderMenuItems)}</ul>
        <ul>
          <li>
            <a
              href="https://www.helloasso.com/associations/le-quartier-genereux/formulaires/1"
              aria-label="Je fais un don au Quartier Généreux"
              rel="noreferrer"
              target="_blank"
              className={styles.headerCallToAction}
            >
              Je fais un don
            </a>
          </li>
        </ul>
        <div className={styles.menuSpacer} />
        <ul className={styles.mobileSocialNetworks}>
          <li>
            <a
              href="https://www.facebook.com/qg.montpellier"
              aria-label="suivez nous sur Facebook"
              rel="noreferrer"
              target="_blank"
            >
              <FacebookIcon height={28} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/qg.montpellier"
              aria-label="suivez nous sur Instagram"
              rel="noreferrer"
              target="_blank"
            >
              <InstagramIcon height={28} />
            </a>
          </li>
          <li>
            <a
              href=" https://t.me/+eLtdeKh7OwJjN2I0"
              aria-label="suivez nous sur Telegram"
              rel="noreferrer"
              target="_blank"
            >
              <TelegramIcon height={28} />
            </a>
          </li>
        </ul>
      </nav>
      <main className={styles.main}>{children}</main>
    </div>
  );
};
