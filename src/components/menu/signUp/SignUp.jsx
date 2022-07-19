import {StyledSignUp} from "./SignUp.styled"
import Logo from "../logo"
import twitter from "../SignIn/imgSignIn/card-twitter-btn.svg"
import instagram from "../SignIn/imgSignIn/card-instagram-btn.svg"
import facebook from "../SignIn/imgSignIn/card-facebook-btn.svg" 
import {useRef, useState} from "react"
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {
  const modalRef = useRef()
  let history = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const onSubmit = (event) => {
    event.preventDefault()
  }

  const closeModal = e => {
    if(modalRef.current === e.target) {
      history("/");
    }
  }


  return (
    <StyledSignUp>
      <div className="popup" ref={modalRef} onClick={closeModal}>
        <div className="popup__container">
          <div className='popup__logo'>
              <Logo/>
          </div>
          <Link to='/'>
            <div className="popup__cross"></div>
          </Link>

            <h2 className="popup__title-registr">Регистрация </h2>
            <form 
                onSubmit={onSubmit}
                className="popup__form">
                <input 
                type="text"
                className='popup__input'
                placeholder='name'/>
                <input 
                type="email"
                className='popup__input'
                placeholder='email'/>
                value={email}
                setValue={setEmail}
                <input
                type='password'
                className='popup__input'
                placeholder='password' />
                value={password}
                setValue={setPassword}
                <input
                type='password'
                className='popup__input'
                placeholder='repeat password' />
                <div className='popup__checkbox-block'>
                    <input
                    type="checkbox"
                    className="custom-checkbox"
                    id="license"
                    name="license"
                    value="true"/>
                    <label for="license" className='popup__license'>accept the license agreement</label>
                </div>
                <Link to='/signin'>
                <button type="submit" className="popup__submit">Зарегистрироваться</button>
                </Link>
                <div className="popup__social">
                <img className="popup__img" src={twitter} alt="twitter" />
                <img className="popup__img" src={instagram} alt="instagram" />
                <img className="popup__img" src={facebook} alt="facebook" />
            </div>
            <Link to='/signin' className="popup__link"> Войти</Link>
            
            </form>
            </div>
            </div>

            </StyledSignUp>
  )
}

export default SignUp;