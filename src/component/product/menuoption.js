import React from "react";
import styles from "../css/product/menuoption.module.css";

function MenuOption() {
  return (
    <nav>
      <div className={styles.menuOptionMobile}>
        <i className='fas fa-bars'></i>
      </div>
      <div className={styles.menuOption}>
        <div className={styles.menuOptionChilren}>
          <p>Đầm</p>
          <ul>
            <li className={styles.subTitle}>
              <a href='#'>Đầm Dạo Phố</a>
            </li>
            <li className={styles.subTitle}>
              <a href='#'>Đầm Công Sở</a>
            </li>
            <li className={styles.subTitle}>
              <a href='#'>Đầm Dự Tiệc</a>
            </li>
            <li className={styles.subTitle}>
              <a href='#'>Đầm Maxi</a>
            </li>
            <li className={styles.subTitle}>
              <a href='#'>Đầm Dáng Ôm</a>
            </li>
            <li className={styles.subTitle}>
              <a href='#'>Đầm Dáng Xòe</a>
            </li>
            <li className={styles.subTitle}>
              <a href='#'>Đầm Dáng Suông</a>
            </li>
          </ul>
        </div>
        <div className={styles.menuOptionChilren}>
          <p>Trang phục nữ</p>
          <ul>
            <li className={styles.subTitle}>
              <a href='#'>Áo</a>
            </li>
            <li className={styles.subTitle}>
              <a href='#'>Váy</a>
            </li>
            <li className={styles.subTitle}>
              <a href='#'>Croptop</a>
            </li>
          </ul>
        </div>
        <div className={styles.menuOptionChilren}>
          <p>Kích cỡ</p>
          <ul>
            <button>XS</button>
            <button>S</button>
            <button>M</button>
            <button>L</button>
          </ul>
        </div>
        <div className={styles.menuOptionChilren}>
          <p>GIÁ</p>
          <input type='range' id='myRange' />
        </div>
        <div className={styles.menuOptionChilren}>
          <p>Màu sắc</p>
          <ul>
            <li className={styles.subTitle}>
              <a href='#'>Be</a>
            </li>
            <li className={styles.subTitle}>
              <a href='#'>Bạc</a>
            </li>
            <li className={styles.subTitle}>
              <a href='#'>Cam</a>
            </li>
            <li className={styles.subTitle}>
              <a href='#'>Hồng</a>
            </li>
            <li className={styles.subTitle}>
              <a href='#'>Nhiều màu</a>
            </li>
            <li className={styles.subTitle}>
              <a href='#'>Nâu</a>
            </li>
            <li className={styles.subTitle}>
              <a href='#'>Trắng</a>
            </li>
          </ul>
        </div>
        <div className={styles.saleImg}>
          <figure>
            <img src='/img/product/ad@3x.png' />
            <div className={styles.note}>
              <p>Mua 2</p>
              <p>Giảm 10%</p>
              <hr style={{ backgroundColor: "#000000" }}></hr>
              <p>Mua 3</p>
              <p>Giảm 18%</p>
            </div>
          </figure>
        </div>
      </div>
    </nav>
  );
}

export default MenuOption;
