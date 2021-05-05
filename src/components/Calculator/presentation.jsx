import { Wrapper } from './presentation.styled'
import ComputationScreen from './ComputationScreen'
import Keypad from './Keypad'
import { useState } from 'react'

const Calculator = () => {
  const final = {
    equation: '',
    result: ''
  }
  const [calculate, setCalculate] = useState(final)
  const handleClick = (e) => {
    const pressedButton = e.target.innerHTML
    if (pressedButton === 'C'){
      setCalculate(final)
    }
    else if (pressedButton === 'back') {
      if(calculate.equation) {
        const newEquation = calculate.equation.slice(0, calculate.equation.length-1)
        setCalculate({ equation: newEquation, result: ''})
      }
    }
    else if((pressedButton >= 0 && pressedButton <= 9) || pressedButton === '.') {
      setCalculate((prev) => {
        const newEquation = prev.equation + pressedButton
        return { ...prev, equation: newEquation}
      })
    } else if (['+', '-', '*', '/', '%'].indexOf(pressedButton) !== -1) {
        setCalculate((prev) => {
          const newEquation = prev.equation + ' ' + pressedButton + ' '
          return { ...prev, equation: newEquation }
        })
    } else if (pressedButton === '=') {
      try {
        const evalResult = eval(calculate.equation);
        const result = Number.isInteger(evalResult) ? evalResult : evalResult.toFixed(2);
        setCalculate(prev=> ({ ...prev, result }));
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
