import { Wrapper } from './presentation.styled'
import ComputationScreen from './ComputationScreen'
import Keypad from './Keypad'
import { useState } from 'react'

const Calculator = () => {
  const final = {
    equation: '',
    result: ''
  }
  let newEquation
  const [calculate, setCalculate] = useState(final)
  const handleClick = (e) => {
    const pressedButton = e.target.innerHTML
    switch (pressedButton) {
      case 'C':
        setCalculate(final)
        break;
      case 'back':
        if(calculate.equation) {
          newEquation = calculate.equation.slice(0, calculate.equation.length-1)
          setCalculate({ equation: newEquation, result: ''})
        }
        break;
      default:
        break;
    }
    if((pressedButton >= 0 && pressedButton <= 9) || pressedButton === '.') {
      newEquation = calculate.equation
      newEquation += pressedButton;
      setCalculate({equation: newEquation, result: calculate.result})
    } else if (['+', '-', '*', '/', '%'].indexOf(pressedButton) !== -1) {
        newEquation = calculate.equation
        newEquation += ' ' + pressedButton + ' '
        setCalculate({equation: newEquation, result: calculate.result})
    } else if (pressedButton === '=') {
      try {
        const evalResult = eval(calculate.equation);
        const result = Number.isInteger(evalResult)? evalResult : evalResult.toFixed(2);
        setCalculate({result});
      } catch (error) {
        alert('Invalid Mathematical Equation');
      }
    }
  }
  return (
    <Wrapper>
      <ComputationScreen screen={calculate} />
      <Keypad handleClick={handleClick} />
    </Wrapper>
   );
}

export default Calculator;
