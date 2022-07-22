import styled from "styled-components";



export const StyledModal = styled.div`
.block {
    position: relative;
    color: #fff;
   }



    .modal-popup-active {
        opacity: 1;
        display: block;
        width: 396px;
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        box-shadow: 0px 16px 64px -48px rgba(31, 47, 70, 0.4);
        border-radius: 24px;
        padding: 40px 32px 0 32px;
        z-index: 2;
        position: absolute;
        right: 487px;
        top: 177px;
        transition: 0.8s ease;

        /* background: linear-gradient( rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.5) Красивый градиент */
    }

    .modal-popup{
        display: none;
        opacity: 0;
        transition: 0.5s ease;
    }

    .header-modal {
        display: flex;
        flex-direction: column;
        align-items: center;
      padding-bottom: 16px;

        & span {
            font-weight: 700;
            font-size: 32px;
            line-height: 40px;
            color: #23262F;
            letter-spacing: -0.01em;
        }
    }

    .info-card {
        display: flex;
        width: 200px;
        justify-content: space-between;
        
    }

    .products-card {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 335px;
        padding: 13px 0;
    }

    .img {
        width: 64px;
        height: 64px;
    }

    .modal-title {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #141416;
    }

    .modal-subtitle {
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: #353945;
    }

    span {
            font-weight: 400;
            font-size: 12px;
            line-height: 20px;
            color: #777E91;
        }
    

`

export const BtnModal = styled.button`
            padding: 16px 146px;
            color: white;
            border-radius: 90px;
            border-color: rgba(0, 0, 0, 0.2);
            background-color: #1e90ff;
            margin: 10px 0 18px 0;
            cursor: pointer;
            font-weight: 700;
            font-size: 16px;
            line-height: 16px;
            transition: transform .5s, box-shadow .5s;

            :hover {
                transform: scale(1.02);
                box-shadow: 5px 5px 5px #777E91;
            }

`
