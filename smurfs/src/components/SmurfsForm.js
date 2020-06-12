import React, { useState } from "react";
import Axios from "axios";

export const SmurfsForm = (props) => {
    const [smurf, setSmurf] = useState({ //wee are setting the state to an object
        name: "",
        age: "",
        height: "",
    });

    const submit = (e) => {
        e.preventDefault(); //prevent refresh

        Axios
        .post("http://localhost:3333/smurfs")
        .then((res) => {
        })
        .catch((err) => console.log(err.response));
        setSmurf({ //we are setting the state of Smurf to blank name, age, and height
            name: "",
            age: "",
            height: ""
        })
    };

    return (
        <div>
            <form onSubmit={handleChanges}>
                <input
                    type="text"
                    value={name}
                    name="name"
                    onChange={handleChanges}
                />
                <button type="submit">BUTTON</button>
            </form>
        </div>
    );
};
//done?