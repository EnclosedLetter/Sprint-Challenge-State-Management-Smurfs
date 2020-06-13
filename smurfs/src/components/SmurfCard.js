import React from "react";

const SmurfCard = ({ smurf }) => {
  return (
    <div className="card">
      <h2>{smurf.name}</h2>
      <h2>{smurf.age}</h2>
      <h2>{smurf.height}</h2>
    </div>
  );
};

export default SmurfCard;
