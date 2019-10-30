/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import styles from "../../assets/details/detailsleftsection.module.css";

import DetailsRightSection from "./detailsRightSection";

import { addToCart } from "../../action/cartActions";
import { connect } from "react-redux";

class DetailsSection extends React.Component {
  static propTypes = {
    addToCart: PropTypes.func.isRequired
  };
  handleAddToCart = id => {
    console.log(this.props.productDetails.id);
    if (this.props.productDetails.id === id)
      this.props.addToCart(this.props.productDetails);
  };

  render() {
    const { productDetails } = this.props;
    return (
      <section className={styles.detailsContent}>
        <div className={styles.info} id={`${productDetails.id}`}>
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
        <DetailsRightSection
          onAddToCart={this.handleAddToCart}
          {...productDetails}
        />
      </section>
    );
  }
}
function mapStateToProps({ detailsReducers }) {
  return {
    productDetails: detailsReducers.items
  };
}
const mapDispatchToProps = {
  addToCart
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailsSection);
