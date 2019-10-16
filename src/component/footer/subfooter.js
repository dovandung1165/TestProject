import React from "react";
import styles from "../css/footer/subfooter.module.css";

function SubFooterRender() {
  return (
    <div className={styles.subFooter}>
      <div className={styles.subFooterFrame}>
        <div className={styles.subFooterTitle}>
          Hệ Thống Cửa Hàng HongAn Store
        </div>
        <p className={styles.operationHours}>(09:00 a.m - 10:00 p.m)</p>
        <ul>
          <li className={styles.subFooterSubTitle}>
            <b>Store 1</b>
          </li>
          <li className={styles.subFooterSubTitle}>
            88 Quang Trung, P.10, Gò Vấp
          </li>
          <li className={styles.subFooterSubTitle}>08.6275.3304</li>
          <li className={styles.subFooterSubTitle}>
            <b>Store 2</b>
          </li>
          <li className={styles.subFooterSubTitle}>
            1009B CMT8, P.7, Q.Tân Bình
          </li>
          <li className={styles.subFooterSubTitle}>08.6268.0602</li>
          <li className={styles.subFooterSubTitle}>
            <b>Store 3</b>
          </li>
          <li className={styles.subFooterSubTitle}>
            208 Quang Trung, P.10, Gò Vấp
          </li>
          <li className={styles.subFooterSubTitle}>08.6274.5304</li>
        </ul>
      </div>
      <div className={styles.subFooterFrame}>
        <div className={styles.subFooterFrameIn}>
          <div className={styles.subFooterTitle}>Bạn là khách hàng mới?</div>
          <p className={styles.subFooterTitle}>NHẬN NGAY VOUCHER TRỊ GIÁ </p>
          <div className={styles.valueVoucher}>120.000 VNĐ</div>
          <p className={styles.subFooterTitle}>
            NHẬN NGAY NHỮNG ƯU ĐÃI HẤP DẪN VÀ CÁC XU HƯỚNG MỚI NHẤT
          </p>
          <form>
            <input className={styles.subFooterEmail} placeholder='email' />
          </form>
        </div>
      </div>
      <div className={styles.subFooterFrame}>
        <div className={styles.subFooterTitle}>Hỗ trợ khách hàng</div>
        <a href='/' className={styles.subFooterSubTitle}>
          Hỏi Đáp
        </a>
        <a href='/' className={styles.subFooterSubTitle}>
          Liên Hệ
        </a>
        <a href='/' className={styles.subFooterSubTitle}>
          Biểu Phí Giao Hàng
        </a>
        <a href='/' className={styles.subFooterSubTitle}>
          Danh Mục Sản Phẩm
        </a>
        <a href='/' className={styles.subFooterSubTitle}>
          Thẻ quà tặng
        </a>
        <a href='/' className={styles.subFooterSubTitle}>
          Kiểm Tra Đơn Hàng
        </a>
        <a href='/' className={styles.subFooterSubTitle}>
          Điều Kiện & Điều Khoản
        </a>
        <a href='/' className={styles.subFooterSubTitle}>
          Chính Sách Bảo Mật
        </a>
      </div>
    </div>
  );
}

export default SubFooterRender;
