import styled from 'styled-components'

export const StyledMenu = styled.div`
 
    .menu-wrapper {
        display: flex;
        align-items: center;
        list-style-type: none;
        height: 90px;
    }

    .menu-link {
        text-decoration: none;
        padding-bottom: 5px;
        margin-right: 20px;
        color: #888;
        border: 1.5px solid transparent;
        font-size: 16px;

        &:hover {
            transition: color .2s linear;
            color: var(--secondaryLabelColor);
            border-bottom: 1.5px solid #000;
        }
    }
    
    .active-menu-link {
        text-decoration: none;
        padding-bottom: 5px;
        margin-right: 20px;
        color: black;
        border: 1.5px solid transparent;
        font-size: 16px;
        border-bottom: 1.5px solid #000;

        &:hover {
            transition: color .2s linear;
            color: var(--secondaryLabelColor);
            border-bottom: 1.5px solid #000;
        }
    }
`