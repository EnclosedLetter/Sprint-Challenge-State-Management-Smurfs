import React from "react"

export const Smurfs = (props) => {
    return (
        <div>
            <h1>{props.data.name}</h1>
            <h2>{props.data.age}</h2>
            <p>{props.data.height}</p>
        </div>
    )
};
//smurfs data/character done