/* eslint-disable react/prop-types */
import React from "react";
import styles from "../../assets/main/maintainGYPC.module.css";

function GoiYPhongCachRender() {
  return <GoiYPhongCach />;
}

function GoiYPhongCach() {
  return (
    <section>
      <div className={styles.maintain}>
        <div className={styles.maintainTitle}>Gợi Ý Phong Cách</div>
        <GoiYPhongCachFrames />
      </div>
    </section>
  );
}
function GoiYPhongCachFrames() {
  return (
    <div className={styles.maintainFrame}>
      <GoiYPhongCachIn data={dataGoiYPhongCach} />
    </div>
  );
}

function GoiYPhongCachIn({ data }) {
  return (
    <React.Fragment>
      {data.map(item => (
        // eslint-disable-next-line react/jsx-key
        <GoiYPhongCachChildren key={item.id} {...item} />
      ))}
    </React.Fragment>
  );
}
function GoiYPhongCachChildren({ subTitle, title, bgItem }) {
  return (
    <div className={styles.maintainChildren} style={bgItem}>
      <div>
        <p className={`${styles.maintainChildrenSubTitle}`}>{subTitle}</p>
        <p className={styles.maintainChildrenTitle}>{title}</p>
      </div>
    </div>
  );
}
const dataGoiYPhongCach = [
  {
    id: "hoaTiet",
    subTitle: "Trang phục",
    title: "hoạ tiết",
    bgItem: {
      width: "509px",
      height: "233px",
      backgroundImage: "url(/img/model/m-croptop-@3x.png)"
    }
  },
  {
    id: "nuTinh",
    subTitle: "cô nàng",
    title: "nữ tính",
    bgItem: {
      width: "167px",
      height: "233px",
      backgroundImage: "url(/img/model/m-vay-@3x.png)"
    }
  },
  {
    id: "phongCach",
    subTitle: "Phong cách",
    title: "khỏe khoắn",
    bgItem: {
      width: "227px",
      height: "233px",
      backgroundImage: "url(/img/model/img-8240-copy-copy-2111@3x.png)"
    }
  },
  {
    id: "bohemian",
    subTitle: "Phong cách",
    title: "Bohemian",
    bgItem: {
      width: "167px",
      height: "233px",
      backgroundImage: "url(/img/model/m-black-@3x.png)"
    }
  },
  {
    id: "toiGian",
    subTitle: "Thời trang",
    title: "tối giản",
    bgItem: {
      width: "227px",
      height: "233px",
      backgroundImage: "url(/img/model/mg-0359-8040@3x.png)"
    }
  },
  {
    id: "congSo",
    subTitle: "Thời trang",
    title: "công sở",
    bgItem: {
      width: "509px",
      height: "233px",
      backgroundImage: "url(/img/model/m-crop-blue-@3x.png)"
    }
  }
];

export default GoiYPhongCachRender;
