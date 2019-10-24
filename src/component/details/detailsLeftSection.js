/* eslint-disable react/prop-types */
import React from "react";
import styles from "../css/details/detailsleftsection.module.css";
import { connect } from "react-redux";
class DetailsLeftSection extends React.Component {
  // componentDidMount() {
  //   this.props.fetchProducts();
  // }
  render() {
    const { productDetails } = this.props;
    return (
      <React.Fragment>
        <div className={styles.info}>
          <h3>{productDetails.title}</h3>
          <p>
            {new Intl.NumberFormat("de-DE").format(productDetails.price)}{" "}
            <span>VNĐ</span>
          </p>

          <div className={styles.describe}>{productDetails.describe}</div>
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
        <div className={styles.detailsImage}>
          <img
            className={styles.mainImg}
            src={productDetails.img}
            alt='Product'
          />
          <img
            className={styles.subImg}
            src={productDetails.imgChild1}
            alt='Product Sub'
          />
          <img
            className={styles.subImg}
            src={productDetails.imgChild2}
            alt='Product Sub'
          />
          <img
            className={styles.subImg}
            src={productDetails.imgChild3}
            alt='Product Sub'
          />
        </div>
      </React.Fragment>
    );
  }
}
function mapStateToProps({ detailsProducts }) {
  console.log("map Product Details To Props:", detailsProducts);
  return {
    productDetails: detailsProducts
  };
}
export default connect(mapStateToProps)(DetailsLeftSection);
