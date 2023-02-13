import styled from 'styled-components'

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
  background: var(--clr-pastel-lavender);
  box-shadow: var(--dark-shadow);
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .nav-btn {
    font-size: 1.5rem;
    color: var(--clr-light-black);
    background: transparent;
    border-color: transparent;
    transition: var(--transition);
    cursor: pointer;
    padding-top: 0.9rem;
    padding-bottom: 0.9rem;
    padding: 0.9rem 1rem;
  }
  .nav-btn:hover {
    color: var(--clr-black);
  }
  .active-nav-btn {
    transform: rotate(90deg);
  }

  .nav-items {
    list-style-type: none;
    max-height: 0;
    overflow: hidden;
    transition: var(--transition);
  }

  .nav-link {
    color: var(--clr-old-lavender-dark);
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: var(--spacing);
    font-weight: bold;
    display: block;
    padding: 0.5rem 2rem;
    transition: var(--transition);
  }
  .nav-link:hover {
    background: var(--clr-pastel-lavender-dark);
    padding-left: 2.5rem;
  }
  .nav-link.active {
    background: var(--clr-pastel-lavender-darkest);
    padding-left: 2.5rem;
  }
  .show-items {
    max-height: 20rem;
  }
  @media screen and (min-width: 826px) {
    .nav-center {
      max-width: 1170px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .nav-btn {
      display: none;
    }
    .nav-items {
      max-height: fit-content;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .nav-link {
      letter-spacing: var(--spacing-smaller);
      padding: 0.9rem;
      padding: 1.2rem;
    }
    .nav-link:hover {
      padding: 1.2rem;
    }
    .nav-link.active {
      padding: 1.2rem;
    }
    .flex-container {
      justify-content: space-between;
    }
  }
`
export default Wrapper
