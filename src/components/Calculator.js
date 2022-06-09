import React from 'react';

const onClickHandler = (e) => {
  const buttonName = e.target.innerText;
  console.log(buttonName);
};
// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator-div">
        <input className="displayNum" type="text" id="result" placeholder="0" disabled />
        <div className="calculatorButtons">
          <button className="color-first" type="submit" onClick={onClickHandler}>AC</button>
          <button className="color-first" type="submit" onClick={onClickHandler}>+/-</button>
          <button className="color-first" type="submit" onClick={onClickHandler}>%</button>
          <button className="color-first" type="submit" onClick={onClickHandler}>÷</button>
          <button className="color-second" type="submit" onClick={onClickHandler}>7</button>
          <button className="color-second" type="submit" onClick={onClickHandler}>8</button>
          <button className="color-second" type="submit" onClick={onClickHandler}>9</button>
          <button className="color-first" type="submit" onClick={onClickHandler}>x</button>
          <button className="color-second" type="submit" onClick={onClickHandler}>4</button>
          <button className="color-second" type="submit" onClick={onClickHandler}>5</button>
          <button className="color-second" type="submit" onClick={onClickHandler}>6</button>
          <button className="color-first" type="submit" onClick={onClickHandler}>-</button>
          <button className="color-second" type="submit" onClick={onClickHandler}>1</button>
          <button className="color-second" type="submit" onClick={onClickHandler}>2</button>
          <button className="color-second" type="submit" onClick={onClickHandler}>3</button>
          <button className="color-first" type="submit" onClick={onClickHandler}>+</button>
          <button className="color-second zero" type="submit" onClick={onClickHandler}>0</button>
          <button className="color-second" type="submit" onClick={onClickHandler}>.</button>
          <button className="color-first" type="submit" onClick={onClickHandler}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
