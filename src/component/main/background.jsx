/* eslint-disable react/prop-types */
import React from "react";
import styles from "../css/main/background.module.css";

function BackgroundRender() {
  return <Background dataBackground={dataBackground} />;
}

function Background({ dataBackground }) {
  return (
    <section>
      <div className={styles.mainBanner}>
        {dataBackground.map(children => (
          // eslint-disable-next-line react/jsx-key
          <BackgroundChildren key={children.id} {...children} />
        ))}
      </div>
    </section>
  );
}

function BackgroundChildren({
  subTitle,
  title,
  disctiption,
  linkButton,
  note,
  buttonLeft,
  buttonRight
}) {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerSubtitle}>{subTitle}</div>
      <h1>{title}</h1>
      <div className={styles.bannerDiscription}>{disctiption}</div>
      <div className={styles.bannerLinkbutton}>
        <a href='null'>{linkButton}</a>
      </div>
      <div className={styles.bannerNote}>
        <em>{note}</em>
      </div>
      <div className={styles.buttonClick}>
        <button className={styles.buttonClickClick}>
          <i className={buttonLeft}></i>
        </button>
        <button className={styles.buttonClickClick}>
          <i className={buttonRight}></i>
        </button>
      </div>
    </div>
  );
}

const dataBackground = [
  {
    id: "banner",
    subTitle: "Thời gian có hạn",
    title: "CRAZY SALE GIẢM ĐẾN 70%",
    disctiption: "Sở hữu ngay những sản phẩm với mức giá trong mơ!",
    linkButton: "Tìm hiểu thêm",
    note: "*Sản phẩm trong chương trình không được hoàn trả.",
    buttonLeft: "fas fa-chevron-left",
    buttonRight: "fas fa-chevron-right"
  }
  // {
  //     subTitle: null,
  //     title: 'Đầm',
  //     disctiption: 'Luôn là tâm điểm với những kiểu đầm đẹp trong bộ sưu tập đầm nữ thời trang dù bạn ở bất cứ đâu, đi làm, dự tiệc, hay dạo phố.',
  //     linkButton: null,
  //     note: null,
  //     buttonLeft: '<',
  //     buttonRight: '>'
  // }
];

export default BackgroundRender;
