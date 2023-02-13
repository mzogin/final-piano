import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(90vw, 1fr));
  grid-gap: 5px;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 400px) {
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  }
`
export default Wrapper
