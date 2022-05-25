import styled from 'styled-components'

export const StyledContent = styled.div`

.main-sale__content {
            padding-left: 44px;
        }
        .main-slider {
            position: relative;
            margin: 0 auto;
        

            &__img {
                height: 563px;
                width: 870px;
            }

            &__text {
                position: absolute;
                top: 273px;
                left: 147px;
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            &__subtitle {
                font-size: 90px;
                color: #fff;
            }

            &__title {
                font-size: 60px;
                color: #fff;
            }
        }

        .main-slider__text--bottom {
            display: flex;
            flex-direction: column;
        }

        figure {
            margin: 0 auto;
            padding: 0;
        }

        .main-section {
            padding-bottom: 45px;

            &__img {
                width: 283px;
                height: 225px;
            }

            &__text {
                display: flex;
                flex-direction: column;
            }

            &__subtitle {
                color: black;
                font-size: 24px;
                margin-top: 5px;
                margin-bottom: 2px;
            }

            &__title {
                color: #888;
                font-size: 24px;
            }
        

    }

`