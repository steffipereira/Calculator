import styled from 'styled-components'
import { COLORS } from './../../../colors'

const Wrapper = styled.div`
  height: 55vh;
  width: 100%;
`
const Button = styled.button`
  width: 25%;
  height: 100%;
  font-size: 3rem;
  font-family: inherit;
  background-color: ${COLORS.white};
  border: 1px solid ${COLORS.gray};
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .2s;

  &[type="equal"]{
    width: 50%;
    background-color: ${COLORS.orange};
  }

  &:hover {
    color: ${COLORS.lightGray};
    background-color: ${COLORS.orange};
  }
  &:active {
    transform: scale(.95);
  }
`
const KeypadRow = styled.div`
  height: 11vh;
  width: 100%;
  display: flex;
  color: white;
  `
export { Wrapper, Button, KeypadRow }
