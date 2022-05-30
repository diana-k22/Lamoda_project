import styled from 'styled-components'

export const StyledSwiperSlide = styled.div`

.swiper-wrapper {
  display: flex;
  padding: 10px 0 20px 0;
}

.swiper-slider {
    font-size: 12px;

    &::after {
        content: "/";
        margin: 0 8px;
        color: #888;
    }

    &:last-child::after {
        content: '';
    }

    &__text {
        text-decoration: none;
        color: #888;
    }

    &  :hover {
        cursor: pointer;
        color: black;
    }

  }
`