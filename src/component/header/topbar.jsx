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
          <NavLink to='/category' activeClassName='active'>
            <i className='fas fa-th-list'></i>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

function TopBarLoGo() {
  return (
    <NavLink to='/' activeClassName='active'>
      <div className={styles.topBarLogo}>
        <h3>honganstore</h3>
      </div>
    </NavLink>
  );
}

function TopBarUl({ kieu1, kieu2, kieu3, kieu4, kieu5, kieu6 }) {
  return (
    <ul className={styles.topBarDesktop}>
      <li>
        <a href='#'>{kieu1}</a>
      </li>
      <li>
        <a href='#'>{kieu2}</a>
      </li>
      <li>
        <a href='#'>{kieu3}</a>
      </li>
      <li>
        <a href='#'>{kieu4}</a>
      </li>
      <li>
        <NavLink to='/category' activeClassName='active'>
          {kieu5}
        </NavLink>
      </li>
      <li>
        <a href='#'>{kieu6}</a>
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

export default TopBarRender;
