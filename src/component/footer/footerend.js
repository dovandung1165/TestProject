import React from "react";
import styles from "../../assets/footer/footerend.module.css";

function FooterEndRender() {
  return <FooterEnd />;
}
function FooterEnd() {
  return (
    <React.Fragment>
      <div className={styles.footer} id='footerEnd'>
        <div className={styles.footerEl}>
          <div className={styles.footerTitle}>Thanh toán</div>
          <div className={styles.footerItem}>
            <img
              src='/img/thanhtoan/payment-method-master-card.png'
              alt='Payment Master Card'
            />
            <img
              src='/img/thanhtoan/payment-method-card-visa.png'
              alt='Payment card visa'
            />
            <img src='/img/thanhtoan/dollar-bills.png' alt='Payment dollars' />
          </div>
        </div>
        <div className={styles.footerEl}>
          <div className={styles.footerTitle}>Dịch vụ vận chuyển</div>
          <div className={styles.footerItem}>
            <div className={styles.footerItemIn}>
              <img
                src='/img/donvi-giaohang/kerry-express.png'
                alt='Kerry express'
              />
              <img
                src='/img/donvi-giaohang/viettel-post.png'
                alt='Viettel post'
              />
              <img src='/img/donvi-giaohang/vnpost.png' alt='Viet Nam post' />
            </div>
          </div>
        </div>
        <div className={styles.footerEl}>
          <div className={styles.footerTitle}>Dịch vụ vận chuyển</div>
          <div className={styles.footerItem}>
            <div className={styles.footerItemIn}>
              <img src='/img/chungnhan/dathongbao.png' alt='Da thong bao' />
              <img src='/img/chungnhan/tin-dung-02-01.png' alt='Tin dung' />
            </div>
          </div>
        </div>
        <div className={styles.footerEl}>
          <div className={styles.footerTitle}>HỆ THỐNG BẢO MẬT</div>
          <div className={styles.footerItem}>
            <div className={styles.footerItemIn}>
              <p>
                <i className='fas fa-check-circle'></i>Chuẩn bảo mật PCI
              </p>
              <p>
                <i className='fas fa-check-circle'></i>Bảo vệ chủ thẻ
              </p>
              <p>
                <i className='fas fa-check-circle'></i>Mạng mã hóa
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
    </React.Fragment>
  );
}

export default FooterEndRender;
