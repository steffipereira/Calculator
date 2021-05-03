import styled from 'styled-components'
import { COLORS } from './../../colors'

const Wrapper = styled.div`
  color: ${COLORS.lightGray};
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 12.5% 87.5%;
  height: 100vh;
  width: 80%;
  margin: 0 auto;
  padding: 20px 0;
`
export { Wrapper }
  // grid-template-columns: repeat(4, 25%);
  // grid-template-rows: 12.5% repeat(5, 17.5%);
  // .grid-item-1 {
  //   grid-column: span 4;
  //   background: ${COLORS.gray};
  // }

  // .grid-item-2, .grid-item-3, .grid-item-4, .grid-item-5,
  // .grid-item-6 {
  //   background: ${COLORS.lightGray};
  //   color: ${COLORS.black};
  //   text-align: center;
  //   border: 1px solid ${COLORS.gray};
  //   font-size: 2rem;
  //   font-weight:bold;
  // }
  // .grid-item-5 {
  //   background: ${COLORS.orange};
  // }
  // .row-items-1 {
  //   display: flex;
  //   justify-content: space-around;
  //   color: #000;
  // }
  // .row-item {
  //   border: 1px solid #000;
  // }
