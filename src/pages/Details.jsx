/* eslint-disable react/prop-types */
import React from "react";
import styles from "../assets/details/detailsrender.module.css";
import DirectLink from "../component/details/directLink";
import DetailsSection from "../component/details/detailsSection";
import { connect } from "react-redux";
import Dynamics from "../component/details/dynamicsTable";
import { fetchProductDetails } from "../action/detailsAction";
class Details extends React.Component {
  componentDidMount() {
    this.props.fetchProductDetails(this.props.match.params.id);
  }
  render() {
    console.log("Params:", this.props.match.params.id);
    return (
      <main>
        <div className={`${styles.detailsContainer} marginToHeader`}>
          <DirectLink />
          <DetailsSection />
          <Dynamics />
        </div>
      </main>
    );
  }
}
const mapDispatchToProps = {
  fetchProductDetails
};

export default connect(
  null,
  mapDispatchToProps
)(Details);
