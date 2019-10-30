/* eslint-disable react/prop-types */
import React from "react";
import styles from "../../assets/header/topbar.module.css";

import { NavLink } from "react-router-dom";

function TopBarRender() {
  return <TopBar data={dataMainMenu} />;
}

function TopBar({ data }) {
  return (
    <nav>
      <div className={styles.topBar}>
        <TopBarLoGo />
        <TopBarUl {...data} />
        <div className={styles.topBarMobile}>
          <i className='fas fa-bars'></i>
        </div>
      </div>
    </nav>
  );
}

function TopBarLoGo() {
  return (
    <div className={styles.topBarLogo}>
      <h3>honganstore</h3>
    </div>
  );
}

function TopBarUl({ kieu1, kieu2, kieu3, kieu4, kieu5, kieu6 }) {
  return (
    <ul className={styles.topBarDesktop}>
      <li>
        <a href='null'>{kieu1}</a>
      </li>
      <li>
        <a href='null'>{kieu2}</a>
      </li>
      <li>
        <a href='null'>{kieu3}</a>
      </li>
      <li>
        <a href='null'>{kieu4}</a>
      </li>
      <li>
        <NavLink to='/category' activeClassName='active'>
          {kieu5}
        </NavLink>
      </li>
      <li>
        <a href='null'>{kieu6}</a>
      </li>
    </ul>
  );
}

const dataMainMenu = {
  kieu1: "Áo",
  kieu2: "Váy",
  kieu3: "Shorts",
  kieu4: "Jeans",
  kieu5: "Đầm",
  kieu6: "Jumpsuit"
};

// const dataSubMenu = [
//   {
//     kieu1: "Áo tay ngắn",
//     kieu2: "Áo tay dài",
//     kieu3: "Áo hở vai"
//   },
//   {
//     kieu1: "Váy ngắn",
//     kieu2: "Váy midi",
//     kieu3: "Váy eo cao"
//   },
//   {
//     kieu1: "Denim Short",
//     kieu2: "Kaki Short",
//     kieu3: "Orther Short"
//   },
//   {
//     kieu1: "Quần jeans bó",
//     kieu2: "Quần jeans lững",
//     kieu3: "Quần jeans rách gối"
//   },
//   {
//     kieu1: "Đầm ngắn",
//     kieu2: "Đầm dự tiệc",
//     kieu3: "Áo đầm"
//   },
//   {
//     kieu1: "Jumsuit cao cấp",
//     kieu2: "Jumsuit tà ngắn",
//     kieu3: "Jumsuit tà dài"
//   }
// ];

export default TopBarRender;
