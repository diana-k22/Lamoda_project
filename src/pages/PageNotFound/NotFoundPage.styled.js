import styled from "styled-components";

export const StyledNotFound = styled.div`
    .notFoundPage {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 80px 0 150px 0;

        &-oops {
            font-size: 128px;
            font-weight: 800;
            color: rgb(130, 85, 203);
            text-align: center;
            margin: 0;
        }

        &-text {
            font-size: 18px;
            text-transform: uppercase;
            font-weight: 700;
            color: black;
            text-align: center;
            margin: 6px 0;
        }

        &-description {
            width: 343px;
            font-size: 13px;
            color: black;
            text-align: center;
            margin: 15px 0 22px;
        }

        /* &-link {
            text-transform: uppercase;
            text-decoration: none;
            align-items: center;
            font-size: 12px;
            letter-spacing: 0.5px;
        }        */
    }


    .styledLinkName {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    `



export const Button = styled.button`
    background-color: ${props => props.primary ? "rgb(171,140,245)  " : "orange"};
    color: ${props => props.primary ? "orange" : "#561db3"};
    
    border: none;
    padding: 13px;
    border-radius: 29px;
    margin: 10px;

    &:hover {
        color: green;
        background-color: rgb(214 177 249);
        cursor: pointer;
    }
`



export const ReversedButton = props => <Button {...props} children={props.children.split('').reverse()} />