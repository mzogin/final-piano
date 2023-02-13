import { Link } from 'react-router-dom'
import img from '../assets/images/other/not-found.svg'
import Wrapper from '../assets/wrappers/ErrorPage'

export const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={img} alt='not found' />
        <h3>Ohh! page not found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link className='btn' to='/'>
          back home
        </Link>
      </div>
    </Wrapper>
  )
}
