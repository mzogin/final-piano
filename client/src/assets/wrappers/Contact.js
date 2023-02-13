import styled from 'styled-components'
import img from '../images/background/blossom.jpg'

const Wrapper = styled.section`
  .contact-info-text {
    padding: 1.5rem 3rem;
  }
  .facebook-btn {
    margin-top: 1rem;
  }
  .contact-item {
    margin-bottom: 1.25rem;
    margin-bottom: 2rem;
  }
  .contact-title {
    color: var(--clr-pastel-dark-blue);
    font-weight: 500;
    margin-bottom: 0.25rem;
  }
  .contact-icon {
    padding-right: 1rem;
  }
  .contact-text {
    text-transform: uppercase;
  }
  .card-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    max-width: 60rem;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    box-shadow: var(--dark-shadow);
    background-color: var(--clr-white);
  }
  .card-column {
    display: flex;
    justify-content: center;
    margin: 1rem;
  }
  .card-image {
    background: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),
      url(${img}) center/cover no-repeat;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .card-image h3 {
    padding: 3rem;
    color: white;
    text-shadow: 0px 2px 2px var(--clr-pastel-dark-blue);
  }
`
export default Wrapper
