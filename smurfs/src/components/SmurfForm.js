import React, { useState } from "react";
import Axios from "axios";

export const SmurfsForm = (props) => {
  const [smurf, setSmurf] = useState({
    //we are setting smurf to an empty object which will be the initial state
    name: "",
    age: "",
    height: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault(); //this will prevent the refresh on the page

    Axios.post("http://localhost:3333/smurfs")
      .then((res) => {})
      .catch((err) => console.log(err.response));
    setSmurf({
      //here we are setting the state to start off with an empty string
      name: "",
      age: "",
      height: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleChanges}>
        <input type="text" value={name} name="name" onChange={handleChanges} />
        <button type="submit">BUTTON</button>
      </form>
    </div>
  );
};
