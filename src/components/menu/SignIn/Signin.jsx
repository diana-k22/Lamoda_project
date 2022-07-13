// import styled from 'styled-components'
// import {Container} from '../../styles/Container.styled'
// import {Link} from 'react'
// import { StyledSignin } from './Signin.styled'

// const Background = styled.div`
  
//     width: 100%;
//     height: 100%;
//     position: fixed;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `

// const ModalWrapper = styled.div`
//     min-width: 450px;
//     min-height: 500px;
//     box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
//     background: #fff;
 
//     z-index: 10;
//     border-radius: 10px;
// `

// const ModalContent = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     color: #141414;
// `

// const CloseModalButton = styled.div`
//     cursor: pointer;
//     position: absolute;
//     top: 20px;
//     right: 20px;
//     width: 32px;
//     height: 32px;
//     padding: 0;
//     z-index: 10;
// `
// export const Signin = ({showModal, setShowModal}) => {
//     return(
//         <>
//         <StyledSignin>
//           <Container>
//               {showModal ? (
//               <Background>
//                   <ModalWrapper showModal={showModal}>
//                       <ModalContent>
//                       <h2 className="popup__title">Вход</h2>
//                       <input type="text" />
//                       <input type="text" />
//                       </ModalContent>
//                       <CloseModalButton aria-label='Close modal' onClick={() => setShowModal
//                       (prev => !prev)}/>
//                     </ModalWrapper>
//               </Background>
//             ) : null} 
//           </Container>
//           </StyledSignin>
//         </>
//     )
// }

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

      <h2 className="popup__title">Login with</h2>
      <div className="popup__social">
        <img className="popup__img" src={twitter} alt="twitter" />
        <img className="popup__img" src={instagram} alt="instagram" />
        <img className="popup__img" src={facebook} alt="facebook" />
      </div>
      <h2 className="popup__subtitle">or</h2>
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
        <Link to='store-page-for-women'>
          <button type="submit" className="popup__submit">Login</button>
        </Link>
        <Link to='/' className='popup__link'>Sign up</Link>
      </form>
      </div>
    </div>

    </StyledSignin>
  )
}

export default Signin