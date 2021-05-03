import { Wrapper, Button, KeypadRow } from './presentation.styled'

const Keypad = ({ handleClick }) => {
  return (
    <Wrapper>
      <KeypadRow>
        <Button onClick={(e)=> handleClick(e)} type="primary">C</Button>
        <Button onClick={(e)=> handleClick(e)} type="primary">back</Button>
        <Button onClick={(e)=> handleClick(e)} type="operator">%</Button>
        <Button onClick={(e)=> handleClick(e)} type="operator">/</Button>
      </KeypadRow>
      <KeypadRow>
        <Button onClick={(e)=> handleClick(e)}>9</Button>
        <Button onClick={(e)=> handleClick(e)}>8</Button>
        <Button onClick={(e)=> handleClick(e)}>7</Button>
        <Button onClick={(e)=> handleClick(e)} type="operator">*</Button>
      </KeypadRow>
      <KeypadRow>
        <Button onClick={(e)=> handleClick(e)}>6</Button>
        <Button onClick={(e)=> handleClick(e)}>5</Button>
        <Button onClick={(e)=> handleClick(e)}>4</Button>
        <Button onClick={(e)=> handleClick(e)} type="operator">-</Button>
      </KeypadRow>
      <KeypadRow>
        <Button onClick={(e)=> handleClick(e)}>3</Button>
        <Button onClick={(e)=> handleClick(e)}>2</Button>
        <Button onClick={(e)=> handleClick(e)}>1</Button>
        <Button onClick={(e)=> handleClick(e)} type="operator">+</Button>
      </KeypadRow>

      <KeypadRow>
        <Button onClick={(e)=> handleClick(e)}>0</Button>
        <Button onClick={(e)=> handleClick(e)}>.</Button>
        <Button onClick={(e)=> handleClick(e)} type="equal">=</Button>
      </KeypadRow>
    </Wrapper>
   );
}

export default Keypad;
