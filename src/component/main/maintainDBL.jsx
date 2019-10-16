/* eslint-disable react/prop-types */
import React from "react";
import styles from "../css/main/maintainDBL.module.css";

function DungBoLoRender() {
  return <DungBoLo dataDungBoLo={dataDungBoLo} />;
}
function DungBoLo({ dataDungBoLo }) {
  return (
    <section className={styles.maintainFrame}>
      <div className={styles.maintainTitle}>ĐỪNG BỎ LỠ DEAL HOT TRONG NGÀY</div>
      <div className={styles.maintain}>
        {dataDungBoLo.map(children => {
          // eslint-disable-next-line react/jsx-key
          return <DungBoLoChildren key={children.id} {...children} />;
        })}
      </div>
    </section>
  );
}

function DungBoLoChildren({ subTitle, title, discription, caret, img }) {
  return (
    <div className={styles.maintainEl}>
      <div className={styles.maintainElWord}>
        <p className={styles.maintainElSubtitle}>{subTitle}</p>
        <p className={styles.maintainElTitle}>{title}</p>
        <p className={styles.maintainElDiscription}>{discription}</p>
      </div>
      <div className={styles.maintainElImg}>
        <img src={img} alt='Image_product' />
        <div className={styles.maintainElCaret}>
          <i className={caret}></i>
        </div>
      </div>
    </div>
  );
}

const dataDungBoLo = [
  {
    id: "giam20",
    subTitle: "giảm 20%",
    title: "các sản phẩm áo",
    discription: "đến hết 20/12",
    caret: "fas fa-caret-down",
    img: "/img/model/m-white-@2x.png"
  },
  {
    id: "merry xmas",
    subTitle: "18/12 - 26/12",
    title: "merry xmas",
    discription: "Đồng giá 199k - 299k - 499k",
    caret: null,
    img: null
  },
  {
    id: "dreamcatcher",
    subTitle: "sở hữu ngay",
    title: "dreamcatcher siêu đẹp",
    discription: "cho đơn hàng trên 2 triệu",
    caret: "fas fa-caret-up",
    img: "/img/model/dreamcartcher@3x.png"
  }
];

export default DungBoLoRender;
