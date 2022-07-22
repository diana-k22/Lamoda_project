import {StyledSignin} from "./Signin.styled.js"
import Logo from "../logo/logo"
import twitter from "./imgSignIn/card-twitter-btn.svg"
import instagram from "./imgSignIn/card-instagram-btn.svg"
import facebook from "./imgSignIn/card-facebook-btn.svg" 
import {useRef, useState, Navigate} from "react"
import { Link, useNavigate } from 'react-router-dom'
// import {authBD} from '../../../authBD'


const Signin = () => {
  const modalRef = useRef()
  let history = useNavigate();

  // const userInfo = () => {
  //   fetch('http://localhost:4001/users')
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //   });
  
  // }

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
  console.log(formParams)


  const onSubmit = (event) => {
    event.preventDefault()
  
    // if(!formParams.email === authBD.email && !formParams.password === authBD.password){
    //   return console.log('err');
    // }
    // <Link to='/store-page-for-children'/>

    // <Redirect to='/store-page-for-children'></Redirect>
  }

  const closeModal = e => {
    console.log(modalRef.current)
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
        <Link to='/'>
          <button onClick={onSubmit} type="submit" className="popup__submit">Войти</button>
        </Link>
        <Link to='/signup' className='popup__link'>Зарегистрироваться</Link>
      </form>
      </div>
    </div>

    </StyledSignin>
  )
}

export default Signin