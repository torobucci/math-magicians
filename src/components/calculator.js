function Calculator() {
  return (
    <div className="calculator">
      <input type="text" placeholder="0" className="input" />
      <button type="button" className="button">A/C</button>
      <button type="button" className="button">+/-</button>
      <button type="button" className="button">%</button>
      <button type="button" className="button operator">÷</button>
      <button type="button" className="button">7</button>
      <button type="button" className="button">8</button>
      <button type="button" className="button">9</button>
      <button type="button" className="button operator">x</button>
      <button type="button" className="button">4</button>
      <button type="button" className="button">5</button>
      <button type="button" className="button">6</button>
      <button type="button" className="button operator">-</button>
      <button type="button" className="button">1</button>
      <button type="button" className="button">2</button>
      <button type="button" className="button">3</button>
      <button type="button" className="button operator">+</button>
      <button type="button" className="button zero">0</button>
      <button type="button" className="button">.</button>
      <button type="button" className="button operator">=</button>
    </div>
  );
}
export default Calculator;
