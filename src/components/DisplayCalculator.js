import Buttons from './Buttons';

function DisplayCalculator() {
  return (
    <div className="calculator">
      <input type="text" placeholder="0" className="input" />
      <Buttons />
    </div>
  );
}
export default DisplayCalculator;
