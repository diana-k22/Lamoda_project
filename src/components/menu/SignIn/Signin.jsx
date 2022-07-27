import {StyledSignin} from "./Signin.styled.js"
import Logo from "../logo/logo"
import twitter from "./imgSignIn/card-twitter-btn.svg"
import instagram from "./imgSignIn/card-instagram-btn.svg"
import facebook from "./imgSignIn/card-facebook-btn.svg" 
import {useRef, useState, useEffect} from "react"
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { authorization } from "../../../api/api.js"



const Signin = () => {
  const modalRef = useRef()
  let history = useNavigate();


// useEffect(() => {
//   fetch('http://localhost:4001/login')
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });
// }, [])
  
  

  const [formParams, setFormParams] = useState({ 
    email:'', 
    password:''
  })
  const hendleChange = (event) => { //это функция отслеживает что написано в инпуте и записывает в переменные в стейте
    const {name, value} = event.target

    setFormParams((data) => ({
      ...data, 
      [name]: value
    }))

  }
 
  const handleLogin = ({ email, password }) => {
    return authorization(email, password)
      .then((data) => { //в дате получаем токен
        localStorage.setItem('token', data.accessToken); // в браузере сохр токен
      })
      .catch ((err) => console.log(err))
  }


  const onSubmit = (event) => {
    event.preventDefault()
    console.log('Onsubmit Start')
    handleLogin({email: formParams.email, password: formParams.password})
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
        {/* <Link to='/'> */}
          <button type="submit" className="popup__submit">Войти</button>
        {/* </Link> */}
        <Link to='/signup' className='popup__link'>Зарегистрироваться</Link>
      </form>
      </div>
    </div>

    </StyledSignin>
  )
}

export default Signin