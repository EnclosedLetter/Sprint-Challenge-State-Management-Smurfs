import React, { useState } from "react";
import { connect } from "react-redux";
import { postSmurf } from "../actions/index";

const SmurfForm = (props) => {
  const [smurf, setSmurf] = useState({
    //we are setting smurf to an empty object which will be the initial state
    name: "",
    age: "",
    height: "",
  });

  const submitHandler = (e) => {
    e.preventDefault(); //this will prevent the refresh on the page
    props.postSmurf(smurf);
    document.getElementById("smurfForm").reset();
  };

  const inputHandler = (e) => {
    e.preventDefault();
    setSmurf({
      ...smurf,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="form">
      <form id="smurfForm">
        <input
          type="text"
          name="name"
          label="name"
          placeholder="Smurf Name"
          value={props.name}
          onChange={inputHandler}
        />
        <input
          type="text"
          name="age"
          label="age"
          placeholder="Smurf Age"
          value={props.age}
          onChange={inputHandler}
        />
        <input
          type="text"
          name="height"
          label="height"
          placeholder="Smurf Height"
          value={props.height}
          onChange={inputHandler}
        />
        <button onClick={submitHandler} className="btn">
          Add New Smurf
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    error: state.error,
  };
};

export default connect(mapStateToProps, { postSmurf })(SmurfForm);
