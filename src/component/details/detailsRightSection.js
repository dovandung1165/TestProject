import React from "react";
import styles from "../css/details/detailsrightsection.module.css";

export default class DetailsRightSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rdColor: "",
      rdSize: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className={styles.detailsOption}>
        <form className={styles.formToCart}>
          Màu sắc: <br />
          <div className={styles.radio}>
            <label className={styles.formLabel}>
              <input
                type='radio'
                name='rdColor'
                value='black'
                onChange={this.handleChange}
              />
              <span className={`${styles.checkMark} ${styles.black}`}></span>
            </label>
            <label className={styles.formLabel}>
              <input
                type='radio'
                name='rdColor'
                value='pink'
                onChange={this.handleChange}
              />
              <span className={`${styles.checkMark} ${styles.pink}`}></span>
            </label>
          </div>
          Kích cỡ: <br />
          <div className={styles.radio}>
            <label className={styles.formLabel}>
              <input
                type='radio'
                name='rdSize'
                value='XS'
                onChange={this.handleChange}
              />
              <span className={`${styles.checkMark}`}>XS</span>
            </label>
            <label className={styles.formLabel}>
              <input
                type='radio'
                name='rdSize'
                value='S'
                onChange={this.handleChange}
              />
              <span className={`${styles.checkMark}`}>S</span>
            </label>
            <label className={styles.formLabel}>
              <input
                type='radio'
                name='rdSize'
                value='M'
                onChange={this.handleChange}
              />
              <span className={`${styles.checkMark}`}>M</span>
            </label>
            <label className={styles.formLabel}>
              <input
                type='radio'
                name='rdSize'
                value='L'
                onChange={this.handleChange}
              />
              <span className={`${styles.checkMark}`}>L</span>
            </label>
          </div>
          <p className={styles.noteStore}>
            Có sẵn tất cả kích cỡ. Sắp hết hàng
          </p>
          <button onSubmit={this.handleSubmit} className={styles.btnSubmit}>
            Cho vào giỏ hàng
          </button>
        </form>
        <div className={styles.share}>
          <p>Chia sẽ</p>
        </div>
        <div className={styles.question}>
          <p>BẠN CÓ THẮC MẮC?</p>
          <p>Hãy truy cập trang HỎI ĐÁP</p>
          <p>
            <u>Thời gian làm việc:</u>
          </p>
          <p>Điện thoại: 8:00 - 18:00</p>
          <p> (Thứ 2 đến CN)</p>
          <p>Ngày Lễ: 9:00 - 18:00 </p>
        </div>
      </div>
    );
  }
}
