import React, { useState } from 'react';
import Buttons from './Buttons';
import calculate from '../logic/calculate';

function Calculator() {
  const [obj, updateObj] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (event) => {
    updateObj(calculate(obj, event.target.textContent));
  };

  return (
    <div className="calculator">
      <input type="text" placeholder="0" className="input" value={obj.next || obj.total || '0'} readOnly />
      <Buttons handleClick={handleClick} />
    </div>
  );
}
export default Calculator;
