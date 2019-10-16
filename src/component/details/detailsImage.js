import React from "react";
import styles from "../css/details/detailsimage.module.css";

export default class DetailsImage extends React.Component {
  render() {
    return (
      <div className={styles.detailsImage}>
        <img
          className={styles.mainImg}
          src='img/model/md-chietietsp/main-img.png'
        />
        <img
          className={styles.subImg}
          src='img/model/md-chietietsp/sub-img-1.png'
        />
        <img
          className={styles.subImg}
          src='img/model/md-chietietsp/sub-img-2.png'
        />
        <img
          className={styles.subImg}
          src='img/model/md-chietietsp/sub-img-3.png'
        />
      </div>
    );
  }
}
