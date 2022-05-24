import styled from 'styled-components';

export const StyledHeader = styled.div `
    background-color: ${ ({theme}) => theme.colors.header};
    .header-wrapper {
        height: 40px;
        width: 100%;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 40px;
    }

    .header-delivery {
        padding-left: 5px;
        display: flex;
        align-items: center;
        left: -18px;
        height: 40px;
        position: relative;

        &:hover {
            background-color: dodgerblue;
            transition: 0.5s ease;
        }

        &__text {
            color: white;
            font-size: 13px;
            padding-right: 10px;
            letter-spacing: 0.1px;
            position: relative;
            left: -14;
            padding-left: 14px;
        }
    }

    .header-link__item {
        position: relative;
        right: -14px;
        padding-right: 20px;
        text-decoration: none;
        display: flex;
        align-items: center;
        height: 40px;
        overflow: visible;

        &:hover {
            background-color: dodgerblue;
            transition: 0.5s ease;
        }

        &:hover .header-modal__none {
            display: block;
        }
    }

    .header-link {
        display: flex;

        &__text {
            color: white;
            font-size: 13px;
            letter-spacing: 0.1px;
        }
    }

    .header-modal__none {
        display: none;
        position: absolute;
        width: 230px;
        padding: 20px 24px;
        text-align: left;
        box-shadow: 0 2px 8px 0 rgb(0 0 0 / 16%), 0 0 0 1px rgb(0 0 0 / 8%);
        top: 100%;
        right: 0;
        background-color: white;
        z-index: 100;
    }

    .modal-text {
        font-size: 13px;
        color: black;

        &_h {
            font-size: 13px;
            color: dodgerblue;
            font-family: sans-serif;
            padding-top: 5px;
        }

        &_h:hover {
            color: blue;
            font-family: sans-serif;
        }
    }
    .icon {
        color: white;
        align-items: center;
        margin: 0px 13px 0 10px;
    }

`
