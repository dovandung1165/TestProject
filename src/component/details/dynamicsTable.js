import React from "react";
import styles from "../../assets/details/dynamicstable.module.css";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

export default function Dynamics() {
  return (
    <Tabs defaultActiveKey='chitiet' id='uncontrolled-tab-example'>
      <Tab eventKey='chitiet' title='CHI TIẾT'>
        <div className='row'>
          <div className='col-4'>
            <h6>
              <div className={styles.properties}>SKU(SIMPLE)</div>
            </h6>
            <h6>
              <div className={styles.properties}>HƯỚNG DẪN SỬ DỤNG</div>
            </h6>
          </div>
          <div className='col-8'>
            <div className={styles.propertiesDescribe}>
              <p>DE186AA27MAYVN</p>

              <p> - Lột mặt trái sản phẩm khi giặt, phơi</p>

              <p> - Nên giặt tay</p>

              <p> - Không sử dụng thuốc tẩy</p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-4'>
            <h6>
              <div className={styles.properties}>THÀNH PHẦN CHẤT LIỆU</div>
            </h6>
            <h6>
              <div className={styles.properties}>XUẤT XỨ</div>
            </h6>
            <h6>
              <div className={styles.properties}>SẢN PHẦM KHÔNG GIẢM GIÁ</div>
            </h6>
          </div>
          <div className='col-8'>
            <div className={styles.properties}>
              <p>Polyester</p>
              <p>Việt Nam</p>
              <p>
                Sản phẩm này không được áp dụng với voucher hoặc các khuyến mại
                khác.
              </p>
            </div>
          </div>
        </div>
      </Tab>
      <Tab eventKey='chitietkichco' title='CHI TIẾT KÍCH CỠ'></Tab>
      <Tab eventKey='nhanxet' title='NHẬN XÉT'></Tab>
      <Tab eventKey='chinhsachhoantra' title='CHÍNH SÁCH HOÀN TRẢ'></Tab>
      <Tab eventKey='thongtinvanchuyen' title='THÔNG TIN VẬN CHUYỂN'></Tab>
    </Tabs>
  );
}
