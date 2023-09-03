import React, { useEffect, useState } from 'react';
// import knob from '../../public/js/knob';
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function ProgressCounter({value}) {

  return (
    <CircularProgressbar styles={buildStyles({
        pathColor: `#ff7425`,
        textColor: '#fff',
        trailColor: '#f9f9f9',
        backgroundColor: '#f9f9f9',
    })} value={value} text={`${value}%`}  />
  );
}

export default ProgressCounter;
