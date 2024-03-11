import cn from "clsx";
import styles from "./style.module.css";

export default function About() {
  return (
    <>
      <main>
        <div className={styles.firstBlock}>
          <div className={styles.headline}>
            <p className={styles.headlineFirst}>
              Команда Simple <span>Design</span>
            </p>
            <p className={styles.headlineSecond}>
              Первый интернет-сервис дизайна интерьера в Казахстане
            </p>
          </div>

          <img src="/images/aboutFirstBlock.png" alt="" />
        </div>

        <div className={styles.secondBlock}>
          <div className={styles.sB_textContent}>
            <p className={styles.sB_textContentFirst}>
              <span>10</span> дизайн-концепций, отражающих актуальные стили в
              интерьере
            </p>
            <p className={styles.sB_textContentSecond}>
              Мы создали сервис для тех, кто не знает, как подступиться к
              большому ремонту, ценит качественный дизайн, для тех, кому нужен
              чёткий план. Заказав Simple Design - вы получите дизайн-проект,
              подробную инструкцию по реализации, смету с материалами, чек-лист
              для проверки строителей.
            </p>
          </div>

          <div className={styles.img_wrap}>
            <img src="/images/aboutSecondBlock.png" alt="" />
          </div>
        </div>
      </main>
    </>
  );
}
