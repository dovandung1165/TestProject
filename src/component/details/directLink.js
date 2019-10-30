/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "../../assets/details/detailsrender.module.css";

export default class DirectLink extends React.Component {
  render() {
    return (
      <div className={styles.directLink}>
        <a href='#' id='firstDirect'>
          Trang chủ
        </a>
        <span>></span>
        <a href='#' id='secondDirect'>
          Đầm
        </a>{" "}
        <span>></span>
        <a href='#' id='rdDirect'>
          Đầm Dáng Ôm
        </a>
      </div>
    );
  }
}
