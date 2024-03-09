import Link from "next/link";
import cn from "clsx";
import styles from "./style.module.css";

const Header = () => {
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
              <Link href="/">Главная</Link>
            </li>
            <li>
              <Link href="/testPage">Тест</Link>
            </li>
            <li>
              <Link href="/catalogue">Каталог</Link>
            </li>
            <li>
              <Link href="/about">О нас</Link>
            </li>
            <li>
              <Link href="/price">Цены</Link>
            </li>
          </ul>
        </nav>

        <div className="contacts_wrap">
          <img src="/phone.svg" alt="phone" />
          <div className="contacts">
            <span>+7 700 505 3000</span>
            <span>с 9:00 до 18:00</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
