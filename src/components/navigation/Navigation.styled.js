import styled from 'styled-components'

export const StyledNavigation = styled.div`

    .navigation-item {
        height: 50px;
        display: flex;
        align-items: center;
    }

    .navigation-link__first {
        text-decoration: none;
        color: #000;
        padding: 0 6px 0 0;
        font-size: 16px;
        overflow: visible;

        &:hover .nav-none {
            display: block;
        }
    }

    .navigation-link {
        text-decoration: none;
        color: #000;
        padding: 0 6px;
        font-size: 16px;
        overflow: visible;

        &:hover {
            color: #888;
        }

        &:hover .nav-none {
            display: block;
        }
    }

    .navigation-link__red {
        text-decoration: none;
        font-size: 16px;
        padding: 0 6px;
        color: red;
    }

    .nav-none {
        display: none;
        z-index: 32;
        padding: 15px;
        position: absolute;
        top: 67px;
        right: 0;
        left: 0;
        width: 100%;
        background-color: white;
        box-shadow: 0 6px 8px 0 rgb(0 0 0 / 16%);
        /* box-sizing: border-box; */

        &__wrapper {
            display: flex;
            flex-direction: column;
        }

        &__columns {
            display: flex;
            justify-content: space-between;
        }

        &__column {
            margin: 0 15px;
        }
    }

    .nav-column__subtitle {
        text-decoration: none;
        color: black;
        font-weight: 700;
        line-height: 18px;
        padding-bottom: 8px;
        font-size: 13px;        
    }

    .nav-column__title {
        display: flex;
        flex-direction: column;
    }

    .nav-column__link {
        text-decoration: none;
        color: black;
        padding: 8px 0;
        font-size: 13px;

        &__text {
            font-weight: 700;
            line-height: 18px;
            padding-bottom: 8px;
            color: black;
        }
    }




`