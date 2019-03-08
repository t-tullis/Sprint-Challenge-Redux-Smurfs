import React from "react";

const Smurf = props => {
  return(
    <div>
        <p>
            <strong>NAME: </strong>{props.smurf.name} <span><strong>AGE: </strong> {props.smurf.age} </span> 
            <span><strong>Height: </strong>{props.smurf.height} </span>
        </p>
  </div>
  );
};

export default Smurf;