/* eslint-disable react/prop-types */
import React from "react";
import Minicart from "../cart/Minicart";
import { NavLink } from "react-router-dom";
import styles from "../css/header/header.module.css";
import store from "../../store/index";

export default class HeadMenuRender extends React.Component {
  state = {
    cartItemCount: store.getState().cartItemCount
  };

  componentDidMount() {
    store.subscribe(() => {
      const { cartItemCount } = store.getState();
      this.setState({
        cartItemCount
      });
    });
  }
  dataHeadder = {
    trangChu: "Trang chủ",
    tapChi: "Tạp chí",
    theoDoiDonHang: "Theo dõi đơn hàng",
    dangNhap: "Đăng nhập",
    dangKi: "Đăng kí",
    troGiup: "Trợ giúp",
    searchIcon: "fas fa-search",
    fbIcon: "fab fa-facebook-f",
    cartIcon: "fas fa-shopping-cart"
  };
  render() {
    this.props = this.dataHeadder;
    const stored = JSON.parse(localStorage.getItem("productCart"));
    return (
      <div className={styles.headMenu}>
        <ul>
          <li>
            <NavLink to='/' activeClassName='active'>
              {this.props.trangChu}
            </NavLink>
          </li>
          <li>
            <a href='null'>{this.props.tapChi}</a>
          </li>
          <li>
            <a href='null'>{this.props.theoDoiDonHang}</a>
          </li>
          <li>
            <a href='null'>{this.props.dangNhap}</a>
          </li>
          <li>
            <a href='null'>{this.props.dangKi}</a>
          </li>
          <li>
            <a href='null'>{this.props.troGiup}</a>
          </li>
          <li>
            <a href='null'>
              <i className={this.props.searchIcon}></i>
            </a>
          </li>
          <li>
            <a href='null'>
              <i className={this.props.fbIcon}></i>
            </a>
          </li>
          <li className={styles.cartIconLink}>
            <a href='null'>
              <i className={this.props.cartIcon}></i>
              <sup className={styles.cartCount}>{this.state.cartItemCount}</sup>
            </a>
            <Minicart />
          </li>
        </ul>
      </div>
    );
  }
}
