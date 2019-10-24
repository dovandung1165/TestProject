/* eslint-disable react/prop-types */
import React from "react";
import styles from "../css/main/background.module.css";
import Carousel from "react-bootstrap/Carousel";
function BackgroundRender() {
  return <BackgroundCarousel />;
}

function BackgroundCarousel() {
  return (
    <Carousel className={styles.mainBanner}>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='/img/banner@2x.png'
          alt='First slide'
        />
        <Carousel.Caption className={styles.carouselCaption}>
          <div className={styles.bannerSubtitle}>thời gian có hạn</div>
          <h1>
            Crazy sale <br /> đến 70%
          </h1>
          <div className={styles.bannerDiscription}>
            Sở hữu ngay những sản phẩm với mức giá trong mơ!
          </div>
          <div className={styles.bannerLinkbutton}>
            <a href='null'>Tìm hiểu thêm</a>
          </div>
        </Carousel.Caption>
        <div className={styles.bannerNote}>
          <em>*Sản phẩm trong chương trình không được hoàn trả.</em>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='/img/product/dam-banner@3x.png'
          alt='First slide'
        />
        <Carousel.Caption className={styles.carouselCaption}>
          <h1>đầm</h1>
          <div className={styles.bannerDiscription}>
            Luôn là tâm điểm với những kiểu đầm đẹp trong bộ sưu tập đầm nữ thời
            trang dù bạn ở bất cứ đâu, đi làm, dự tiệc, hay dạo phố.
          </div>
          <div className={styles.bannerLinkbutton}>
            <a href='null'>Tìm hiểu thêm</a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default BackgroundRender;
