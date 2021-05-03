import { Wrapper, Computation, Result } from './presentation.styled'

const ComputationScreen = ({ screen: { result, equation} }) => {
  return (
    <Wrapper>
      <Result>
        {result}
      </Result>
      <Computation>
        {equation}
      </Computation>
    </Wrapper>
   );
}

export default ComputationScreen;
