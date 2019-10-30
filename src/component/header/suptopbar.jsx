/* eslint-disable react/prop-types */
import React from "react";
import styles from "../../assets/header/suptopbar.module.css";

function SupTopBarRender() {
  return <SupTopBar dataSupTopBar={dataIcon} />;
}

function SupTopBar({ dataSupTopBar }) {
  return (
    <section>
      <div className={`${styles.supTopBarMain} marginToHeader`}>
        {dataSupTopBar.map(item => {
          return <SupTopBarChildren key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}

function SupTopBarChildren({ icon, title, discription, alt }) {
  return (
    <div className={styles.supChildren}>
      <div className={styles.supChildrenIcon}>
        <img src={icon} alt={alt}></img>
      </div>
      <ul className={styles.supChildrenTitle}>
        <li>{title}</li>
        <li>{discription}</li>
      </ul>
    </div>
  );
}

const dataIcon = [
  {
    id: "1",
    icon: "img/giaohang/layer-1.png",
    title: "GIAO HÀNG MIỄN PHÍ",
    alt: "Free shipping",
    discription: "Trên 3 SP - Áp dụng cho TP HCM"
  },
  {
    id: "2",
    icon: "img/giaohang/layer-2.png",
    title: "GIAO HÀNG ONLINE TOÀN QUỐC",
    alt: "Shipping online",
    discription: "COD chỉ áp dụng cho TP HCM"
  },
  {
    id: "3",
    icon: "img/giaohang/layer-3.png",
    title: "SẢN PHẨM ĐỔI MIỄN PHÍ",
    alt: "Free change product",
    discription: "Đổi sản phẩm trong vòng 5 ngày"
  },
  {
    id: "4",
    icon: "img/giaohang/layer-4.png",
    title: "HÌNH ẢNH CHỤP ĐỘC QUYỀN",
    alt: "Exclusive shipping",
    discription: "Chất liệu mẫu mã như hình 100%"
  }
];

export default SupTopBarRender;
