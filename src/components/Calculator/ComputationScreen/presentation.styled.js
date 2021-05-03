import styled from 'styled-components'
import { COLORS } from './../../../colors'

const Wrapper = styled.div`
    grid-column: span 4;
    background: ${COLORS.gray};
`
const Computation = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 1.4rem;
`
const Result = styled.div`
    display: flex;
    justify-content: flex-end;
    height: 9vh;
    font-size: 5rem;
`
export { Wrapper, Computation, Result }
