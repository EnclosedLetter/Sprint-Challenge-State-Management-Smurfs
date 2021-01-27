import React, { useEffect } from "react";
import { connect } from "react-redux";
import SmurfCard from "./SmurfCard";

import { fetchSmurfs } from "../actions/index";

const SmurfList = (props) => {
  //    console.log(props)
  useEffect(() => {
    props.fetchSmurfs()
  }, []); //to prevent constant API call requests

  return (
    <div>
      <h1>Smurf List</h1>
      <div className="card-container">
        {props.smurfs.map((smurf) => (
          <SmurfCard key={smurf.id} smurf={smurf} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchSmurfs })(SmurfList);
//done?
