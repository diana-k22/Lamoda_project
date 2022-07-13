import styled from "styled-components";

export const StyledSignin = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: visibility 0.5s, opacity 0.5s linear;
    z-index: 10;

    .popup {
     
        &__container {
            width: 448px;
            border-radius: 20px;
            background-color: #FCFCFD;
            display: flex;
            flex-direction: column;
            position: relative;
        }


        &__logo {
            padding: 30px 0 30px 40px;
        }

        &__cross {
            width: 17px;
            height: 17px;
            position: absolute;
            right: 45px;
            top: 35px;
            cursor: pointer;
            transition: opacity .3s linear;
        }
        
        &__cross:hover {
            opacity: 0.7;
        }

        &__cross:before,
        &__cross:after {
            position: absolute;
            left: 15px;
            content: ' ';
            height: 14px;
            width: 2px;
            background-color: #23262F;
        }

        &__cross:before {
            transform: rotate(45deg);
        }

        &__cross:after {
            transform: rotate(-45deg);
        }

        &__title {
            margin: 0;
            text-align: center;
            font-weight: 700;
            font-size: 32px;
            line-height: 40px;
            color: #23262F;
            padding-bottom: 20px;
        }

        &__social {
            display: flex;
            justify-content: center;
            cursor: pointer;
        }

        &__img {
            padding: 10px 20px;
        }

        &__img:hover {
            transform: scale(1.2);
        }

        &__subtitle {
            text-align: center;
            font-weight: 500;
        }

        &__form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &__input {
        margin: 0 0 15px 0;
        padding: 0;
        padding-bottom: 3px;
        padding-left: 15px;
        box-sizing: border-box;
        border: 2px solid transparent;
        width: 384px;
        height: 48px;
        font-size: 14px;
        line-height: 17px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.4);
        border-radius: 15px;
        background-color: #fff;

        :hover {
            border: 2px solid black;
        }
    }

    &__submit {
        width: 384px;
        height: 48px;
        color: white;
        border-radius: 90px;
        border-color: rgba(0, 0, 0, 0.2);
        background-color: #e8eaf3;
        margin-bottom: 10px;
        cursor: pointer;
        font-weight: 700;
        font-size: 16px;
        line-height: 16px;
        margin-top: 10px;
        transition: transform .5s, box-shadow .5s;
        background-color: #3772FF;
    }

    &__link {
        text-decoration: none;
        margin-bottom: 20px;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: #777E91;
        transition: color .3s linear;
    }

        &__link:hover {
            color: #23262F;
        }

    }
 
`