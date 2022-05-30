import styled from 'styled-components'

export const StyledClothingCollection = styled.div`
    .collection-gallery {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 24px 5px;
        padding: 25px 0 25px;
    }

    .catalog-gallery__item {
        width: 238px;
        height: 342px;
    }

    .catalog-wrapper {
        border: 1px solid transparent;
        padding: 5px 5px 5px 5px;

        &:hover {
            box-shadow:  5px 10px 18px #b6b6b6;
            padding: 5px 5px 5px 5px;
            border: 1px solid transparent;
            border-radius: 1px;
            background-color: white;
            transition: all 0s 0s;
        }
    }

    .catalog-text {
        display: flex;
        flex-direction: column;
        padding-bottom: 10px;
    }

    .catalog-subtitle {
        color: black;
        font-size: 14px;
        font-weight: 600;
        padding: 7px 0;
    }

    .catalog-title {
        font-size: 13px;
        text-decoration: none;
        color: black;
    }
`