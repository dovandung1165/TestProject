import React from "react";
import styles from "../css/details/detailsleftsection.module.css";

export default class DetailsLeftSection extends React.Component {
  render() {
    return (
      <div className={styles.info}>
        <h3>Đầm ôm hở vai</h3>
        <p>
          1.150.000 <span>VNĐ</span>
        </p>

        <div className={styles.describe}>
          Bạn đã có chiếc đầm hở vai đang làm mưa gió trong mùa hè thu năm nay
          chưa. Hãy sắm ngay 1 chiếc từ thương hiệu De Leah với 2 mầu đen tuyền
          và hồng thạch anh siêu hot này nhé:
        </div>
        <div className={styles.note}>
          <p>Miễn phí giao hàng từ 449.000 đ</p>
          <p>30 NGÀY ĐỔI TRẢ (*)</p>
          <p>Thanh toán khi nhận hàng </p>
          <div className={`${styles.note} ${styles.subNote}`}>
            <span>Sẽ có tại nhà bạn</span>
            <span>trong 3-5 ngày làm việc</span>
          </div>
        </div>
      </div>
    );
  }
}
