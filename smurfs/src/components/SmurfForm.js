import React, { useState } from "react";
import { connect } from "react-redux";
import { newSmurf } from "../actions/actions";

const SmurfForm = (props) => {
  const [smurf, setSmurf] = useState({
    //we are setting smurf to an empty object which will be the initial state
    name: "",
    age: "",
    height: "",
  });

  const submitHandler = (e) => {
    e.preventDefault(); //this will prevent the refresh on the page
    props.addSmurf(newSmurf);
    document.getElementById("smurfForm").reset();
  };

  const inputHandler = (e) => {
    event.preventDefault();
    setSmurf({
      ...smurf,
      [e.target.name]: e.ta,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} name="name" onChange={handleChanges} />
        <button type="submit">BUTTON</button>
      </form>
    </div>
  );
};

export default connect(mapStateToProps, { newSmurf })(SmurfForm);
