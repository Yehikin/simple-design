import React from "react";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <span>Simple Design</span>
        <span>дизайн интерьера</span>
      </div>
      <nav>
        <ul className="nav">
          <ul>Главная</ul>
          <ul>Тест</ul>
          <ul>Каталог</ul>
          <ul>О нас</ul>
          <ul>Цены</ul>
        </ul>
      </nav>
      <div className="contacts">
        <span>+7 700 505 3000</span>
        <span>с 9:00 до 18:00</span>
      </div>
    </header>
  );
};

export default Header;
