import {StyledSignUp} from "./SignUp.styled"
import Logo from "../logo/logo"
import twitter from "../SignIn/imgSignIn/card-twitter-btn.svg"
import instagram from "../SignIn/imgSignIn/card-instagram-btn.svg"
import facebook from "../SignIn/imgSignIn/card-facebook-btn.svg" 
import {useRef, useState} from "react"
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {
  const modalRef = useRef()
  let history = useNavigate();

  const [params, setParams] = useState({name:'', email:'', password:'', repeatPassword:''})

  const hendleChange = (event) => { //это функция отслеживает что написано в инпуте и записывает в переменные в стейте
    const {name, value} = event.target // диструктуризируем объект евент(name- это класс в инпуте, value-это то что вводит пользователь в инпут)
   
    setParams((data) => ({ // data - это объект который находится в стейте(name:'', email:'', password:'', repeatPassword:'')
      ...data, 
      [name]: value
    }))
  }
  console.log(params)

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
                placeholder='name'
                name='name'
                onChange={hendleChange}/>
                <input 
                type="email"
                className='popup__input'
                placeholder='email'
                name='email'
                required
                onChange={hendleChange}/>
                <input
                type='password'
                className='popup__input'
                placeholder='password'
                name='password'
                required
                onChange={hendleChange} />
                <input
                type='password'
                className='popup__input'
                placeholder='repeat password'
                name='repeatPassword'
                required
                onChange={hendleChange} />
                <div className='popup__checkbox-block'>
                    <input
                    type="checkbox"
                    className="custom-checkbox"
                    id="license"
                    name="license"
                    value="true"/>
                    <label htmlFor="license" className='popup__license'>accept the license agreement</label>
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