/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from "react";
import styles from "../../assets/main/shopsuggest.module.css";

function ShopSuggestRender() {
  return <ShopSuggest data={dataShopSuggestion} />;
}

function ShopSuggest({ data }) {
  return (
    <div className={styles.suggest}>
      {data.map(item => {
        console.log(item.id);
        return <ShopSuggestItem key={item.id} {...item} />;
      })}
    </div>
  );
}

function ShopSuggestItem({ bgimg, title, discription }) {
  return (
    <div className={styles.suggestEl}>
      <div className={styles.suggestFrame}>
        <div className={styles.overflow}>
          <div className={styles.suggestImg} style={bgimg}></div>
        </div>
      </div>
      <div className={styles.suggestTextArea}>
        <p className={styles.suggestTitle}>{title}</p>
        <p className={styles.suggestDiscription}>{discription}</p>
      </div>
    </div>
  );
}
const dataShopSuggestion = [
  {
    id: "beigiSuggest",
    bgimg: {
      backgroundImage: "url(/img/model/m-beigi-n@3x.png)",
      width: "100%",
      height: "305px"
    },
    title:
      "BẠN ĐANG TÌM NHỮNG MẪU THỜI TRANG, QUẦN ÁO, GIÀY DÉP VÀ PHỤ KIỆN MỚI NHẤT TRÊN MẠNG? HÃY MUA SẮM NGAY HÔM NAY TẠI honganstore",
    discription:
      "honganstore sẽ mang lại cho khách hàng những trải nghiệm mua sắm thời trang trực tuyến thú vị từ các thương hiệu thời trang quốc tế và trong nước danh tiếng. Thời trang honganstore luôn đổi mới từng ngày với những bộ sưu tập thời trang nam nữ khổng lồ từ giày dép, trang phục, phụ kiện đến mỹ phẩm cho cả nam, nữ."
  },
  {
    id: "greenSuggest",
    bgimg: {
      backgroundImage: "url(/img/model/m-green-n-@3x.png)",
      width: "100%",
      height: "310px"
    },
    title: "THỜI TRANG 2016 HOT NHẤT TẠI honganstore",
    discription:
      "Mua sắm thời trang là nhu cầu thiết yếu của cả phái mạnh và phái đẹp. Thấu hiểu điều này, honganstore sẽ mang đến cho bạn nhiều bộ sưu tập thời trang 2016 hot nhất từ các thương hiệu trong và ngoài nước. Bên cạnh đó, thời trang cao cấp Hàn Quốc từ các nhãn hàng nổi tiếng cũng là một thế mạnh của trang web mua sắm thời trang hàng đầu này. Ngoài ra, honganstore cũng sẽ gợi ý cho bạn những món quà thật ý nghĩa để tặng người thân, bạn bè. Chúng tôi sẽ làm bạn hài lòng với sự lựa chọn của mình bằng giá tốt nhất và chất lượng dịch vụ hoàn hảo."
  }
];

export default ShopSuggestRender;
