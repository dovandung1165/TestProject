import React from "react";
import styles from "../css/details/detailsrender.module.css";
import DirectLink from "./directLink";
import DetailsLeftSection from "./detailsLeftSection";
import DetailsRightSection from "./detailsRightSection";
import { Provider } from "react-redux";
import store from "../../store/index";
import Dynamics from "./dynamicsTable";
// import CTBST from "../CTBST/CTBST";
export default class Details extends React.Component {
  render() {
    return (
      <div className={`${styles.detailsContainer} marginToHeader`}>
        <DirectLink />
        <section className={styles.detailsContent}>
          <Provider store={store}>
            <DetailsLeftSection />
          </Provider>
          <DetailsRightSection />
        </section>
        <Dynamics />
        {/* <CTBST /> */}
      </div>
    );
  }
}
