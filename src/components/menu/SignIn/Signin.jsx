import {StyledSignin} from "./Signin.styled.js"
import Logo from "../logo"
import twitter from "./imgSignIn/card-twitter-btn.svg"
import instagram from "./imgSignIn/card-instagram-btn.svg"
import facebook from "./imgSignIn/card-facebook-btn.svg" 
import {useRef} from "react"
import { Link, useNavigate } from 'react-router-dom'

const Signin = () => {
  const modalRef = useRef()
  let history = useNavigate();


  const onSubmit = (event) => {
    event.preventDefault()
  }

  const closeModal = e => {
    if(modalRef.current === e.target) {
      history("/");
    }
  }


  return (
    <StyledSignin>
      <div className="popup" ref={modalRef} onClick={closeModal}>
        <div className="popup__container">
          <div className='popup__logo'>
              <Logo/>
          </div>
          <Link to='/'>
            <div className="popup__cross"></div>
          </Link>

      <h2 className="popup__title">Войти </h2>
      <span className="popup__title-small">с помощью</span>
     
      <div className="popup__social">
        <img className="popup__img" src={twitter} alt="twitter" />
        <img className="popup__img" src={instagram} alt="instagram" />
        <img className="popup__img" src={facebook} alt="facebook" />
      </div>
      <span className="popup__subtitle">или</span>
      <form 
        onSubmit={onSubmit}
        className="popup__form">
        <input 
          type="email"
          className='popup__input'
          placeholder='email'/>
        <input
          type='password'
          className='popup__input'
          placeholder='password' />
        <Link to='/'>
          <button type="submit" className="popup__submit">Войти</button>
        </Link>
        <Link to='/signup' className='popup__link'>Зарегистрироваться</Link>
      </form>
      </div>
    </div>

    </StyledSignin>
  )
}

export default Signin