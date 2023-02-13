import styled from 'styled-components'

const Wrapper = styled.div`
  .gallery-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    grid-gap: 0.5rem;
    justify-content: center;
  }

  @media screen and (max-width: 613px) {
    .gallery-wrapper {
      grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
    }
  }
  .gallery-wrapper .single-gallery-img {
    cursor: pointer;
    position: relative;
    padding-top: 66%;
    padding-top: 90%;
    aspect-ration: 1;
  }
  .gallery-wrapper .single-gallery-img img {
    transition: var(--transition);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    box-shadow: var(--light-shadow);
  }
  .gallery-wrapper .single-gallery-img img:hover {
    transform: scale(1.02);
    box-shadow: var(--dark-shadow);
  }
  .slide-wrapper {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9;
    background-color: rgba(0, 0, 0, 0.8);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .close-slide,
  .prev-slide,
  .next-slide {
    position: fixed;
    cursor: pointer;
    opacity: 0.6;
    color: white;
    z-index: 10;
    font-size: 30px;
    font-size: 2.5rem;
    transition: var(--transition);
  }
  .close-slide:hover,
  .prev-slide:hover,
  .next-slide:hover {
    opacity: 1;
  }
  .close-slide {
    top: 40px;
    right: 40px;
  }
  .prev-slide {
    top: 50%;
    transform: translateY(-50%);
    left: 40px;
  }
  .next-slide {
    top: 50%;
    transform: translateY(-50%);
    right: 40px;
  }
  .fullscreen-img img {
    max-width: 100%;
    max-height: 100%;
    bottom: 0;
    left: 0;
    margin: auto;
    overflow: auto;
    position: fixed;
    right: 0;
    top: 0;
    -o-object-fit: contain;
    object-fit: contain;
    pointer-events: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`
export default Wrapper
