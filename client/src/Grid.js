import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { requestHouses, selectHouses } from "./store";

import './Grid.scss';

const Grid = () => {
  const colors = {
    '0-5p': '#cc0000',
    '5-25p': '#cc3300',
    '25-75p': '#cccc66',
    '75-95p': '#00cc00',
    '95-100p': '#33cccc'
  }

  const dispatch = useDispatch();
  const houses = useSelector(selectHouses);

  useEffect(() => {
    !houses.length ? dispatch(requestHouses()) : void 0
  }, [houses, dispatch]);

  return (
    <div className="grid-container">
      <svg viewBox="-5 -5 110 110" xmlns="http://www.w3.org/2000/svg">
          {houses.map(d => <circle fill={colors[d.range]} cx={d.x} cy={d.y} r={1} />)}
      </svg>
    </div>
  );
}

export default Grid;
