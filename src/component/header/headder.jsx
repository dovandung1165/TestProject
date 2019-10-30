import React from "react";
import styles from "../../assets/header/header.module.css";

import Minicart from "../cart/Minicart";

import { NavLink } from "react-router-dom";
import { Provider } from "react-redux";

import store from "../../store/index";

export default class HeadMenuRender extends React.Component {
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
    return (
      <div className={styles.headMenu}>
        <ul>
          <li>
            <NavLink to='/' activeClassName='active'>
              {this.dataHeadder.trangChu}
            </NavLink>
          </li>
          <li>
            <a href='null'>{this.dataHeadder.tapChi}</a>
          </li>
          <li>
            <a href='null'>{this.dataHeadder.theoDoiDonHang}</a>
          </li>
          <li>
            <a href='null'>{this.dataHeadder.dangNhap}</a>
          </li>
          <li>
            <a href='null'>{this.dataHeadder.dangKi}</a>
          </li>
          <li>
            <a href='null'>{this.dataHeadder.troGiup}</a>
          </li>
          <li>
            <a href='null'>
              <i className={this.dataHeadder.searchIcon}></i>
            </a>
          </li>
          <li>
            <a href='null'>
              <i className={this.dataHeadder.fbIcon}></i>
            </a>
          </li>
          <li className={styles.cartIconLink}>
            <a href='null'>
              <i className={this.dataHeadder.cartIcon}></i>
              <Provider store={store}>
                <Minicart />
              </Provider>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
