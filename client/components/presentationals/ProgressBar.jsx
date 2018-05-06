import React from 'react';
import { Line } from 'rc-progress';

const ProgressBar = ({ percent, color }) => (
  <div>
    <Line percent={percent} strokeWidth="4" strokeColor={color}/>
  </div>
);

export default ProgressBar;
