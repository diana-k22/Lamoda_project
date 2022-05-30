import styled from 'styled-components'

export const StyledPageForWomen = styled.div`
    padding-bottom: 15px;

    .collection-subtitle__text {
        color: black;
        font-size: 24px;
    }

    .collection-main {
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
    }

    .collection-navigation {
        display: flex;
        flex-direction: column;
        align-items:flex-start;
        position: sticky;
        top: 0;
        height: 250px;
    }

    .collection-link {
        padding: 6px 25px 6px 7px;
        width: 160px;
        margin-bottom: 10px;
        height: 18px;

        &:hover {
            background-color: rgb(236, 236, 236);
            cursor: pointer;
        }

        &__text {
            text-decoration: none;
            font-size: 13px;
            text-transform: uppercase;
            color: black;
            font-weight: 700;
            letter-spacing: 1px;
        }
    }


`