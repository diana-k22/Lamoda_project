import { Button, ReversedButton } from './NotFoundPage.styled';
import styled from 'styled-components';
import { StyledNotFound } from './NotFoundPage.styled';
import { keyframes } from 'styled-components';

// Инпуты можно делать динамичными за счет пропсов указаных ниже
export const Input = styled.input.attrs(props => ({
    type: 'text',
    size: props.size || "1em",
}))`
    border: 2 px solid palevioletred;
    margin: ${props => props.size};
    padding: ${props => props.size};
`
export const PasswordInput = styled(Input).attrs({
    type: 'password',
})`
    border: 2px solid aqua;
 `

 export const AnyInput = styled(Input)`
    border: 2px solid green;
 `


 // Анимация
export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const Rotate = styled.div`
    display: flex;
    justify-content: center;
    animation: ${rotate} 2s linear infinite;
    padding: 2rem 1rem;
    font-size: 1.2rem;
`

// Стилизовать можно любой компонент через родителя к ребенка. Пример ниже.
// Не используя классы мы можем менять стили 
export const LinkPage = ({ className, children}) => (
    <a className={className}>
        {children}
    </a>
)

const StyledLinkPage = styled(LinkPage)`
    color: 'orange';
`
const StyledLinkPagePrimary = styled(LinkPage)`
    color: '#561db3';
`


export const NotFoundPage = () => {
    return(
        <StyledNotFound>
            <div className='notFoundPage'>
                <p className='notFoundPage-oops'>Oops!</p>
                <p className='notFoundPage-text'>404 - Page not found</p>
                <p className='notFoundPage-description'>The page you are looking for might have been removed had its name changed or is temporarily unavailable. </p>
               
                <Button ><StyledLinkPagePrimary to='/'>GO TO HOMEPAGE</StyledLinkPagePrimary></Button>
                <Button primary><StyledLinkPage to='/'>GO TO HOMEPAGE</StyledLinkPage></Button>
                <Button as={ReversedButton}>Custom Button with Normal Button styles</Button>
            </div>

            <form action="#">
                <Input placeholder="A bigger text input"/>
                <Input placeholder="A bigger text input" size='2em'/>
                <PasswordInput placeholder="A bigger password input" size='3em'/>
                <AnyInput placeholder="Bla bla bla bla" size='4em'/>
            </form>

            <Rotate>&lt; 💅🏾 &gt;</Rotate> 

      
            
        
        </StyledNotFound>
    )
}

