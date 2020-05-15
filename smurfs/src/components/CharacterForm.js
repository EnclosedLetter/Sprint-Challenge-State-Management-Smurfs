import React, { useState } from "react";
import { connect } from "react-redux";
import { postCharacter } from "../actions";

const CharacterForm = () => {
    const [newCharacter, setNewCharacter] = useState ({
        name: "",
        location: "",
        id: Date.now()
    });
    const changeHandler = e => {
        setNewCharacter({ ...newCharacter, [e.target.name]: e.target.value});
    };
    const submitForm = e => {
        e.preventDefault(); //to avoid refresh
    };

    return (
        <div>
            <form onSubmit={submitForm}>
                <label>
                    Name:
                    <input
                    name="name"
                    id=""
                    type="text"
                    onChange={changeHandler}
                    value={newCharacter.name}
                    />
                </label>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return (
        addingCharacter: state.addingCharacter
    )
}

export default connect (mapStateToProps, {postCharacter})(ChracterForm);