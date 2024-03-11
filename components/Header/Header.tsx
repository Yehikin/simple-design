"use client";
import Link from "next/link";
import cn from "clsx";
import styles from "./style.module.css";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Hamburger from "../Hamburger/Hamburger";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={cn("container", styles.header_nav)}>
        <div className="logo">
          <p className="logoMain">
            Simple <span>Design</span>
          </p>
          <span className="logoSecondary">дизайн интерьера</span>
        </div>
        <nav>
          <ul className={styles.nav_list}>
            <li>
              <Link
                href="/"
                className={cn(
                  styles.link,
                  pathname === "/" && styles.link_isActive
                )}
              >
                Главная
              </Link>
            </li>
            <li>
              <Link
                href="/testPage"
                className={cn(
                  styles.link,
                  pathname === "/testPage" && styles.link_isActive
                )}
              >
                Тест
              </Link>
            </li>
            <li>
              <Link
                href="/catalogue"
                className={cn(
                  styles.link,
                  pathname === "/catalogue" && styles.link_isActive
                )}
              >
                Каталог
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={cn(
                  styles.link,
                  pathname === "/about" && styles.link_isActive
                )}
              >
                О нас
              </Link>
            </li>
            <li>
              <Link
                href="/price"
                className={cn(
                  styles.link,
                  pathname === "/price" && styles.link_isActive
                )}
              >
                Цены
              </Link>
            </li>
          </ul>
        </nav>

        <div className={cn(styles.hdrContacts, "contacts_wrap")}>
          <img src="/phone.svg" alt="phone" />
          <div className="contacts">
            <span>+7 700 505 3000</span>
            <span>с 9:00 до 18:00</span>
          </div>
        </div>

        <Hamburger />
      </div>
    </header>
  );
};

export default Header;
