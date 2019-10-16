import React from "react";
import styles from "../css/details/detailsrender.module.css";
import DirectLink from "./directLink";
import DetailsLeftSection from "./detailsLeftSection";
import DetailsImage from "./detailsImage";
import DetailsRightSection from "./detailsRightSection";
import CTBST from "../CTBST/CTBST";
export default class Details extends React.Component {
  render() {
    return (
      <div className={`${styles.detailsContainer} marginToHeader`}>
        <DirectLink />
        <section className={styles.detailsContent}>
          <DetailsLeftSection />
          <DetailsImage />
          <DetailsRightSection />
        </section>
        <CTBST />
      </div>
    );
  }
}
