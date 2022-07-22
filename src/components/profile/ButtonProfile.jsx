import { Link } from "react-router-dom"
import styled from "styled-components";


export const StyledButtonProfile = styled.div`
.profile {
    text-decoration: none;
    color: #888888;
    padding-right: 7px;

    :hover {
        color: black;
        transition: color .2s linear;
    }
}`

export const ButtonProfile = () => {
    return(
        <StyledButtonProfile>
            <Link to='profile/page' className="profile">Профиль</Link>
        </StyledButtonProfile>
       
    )
}