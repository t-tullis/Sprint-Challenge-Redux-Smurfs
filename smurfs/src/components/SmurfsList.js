import React from "react";

import Smurf from "./Smurf";

const SmurfsList = props => {
  return (
    <ul className='smurf-list'>
      {props.smurfs.map(smurf => {
        return <Smurf key={smurf.name} smurf={smurf} />;
      })}
    </ul>
  );
};

export default SmurfsList;