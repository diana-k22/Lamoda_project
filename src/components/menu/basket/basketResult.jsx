import { BtnModal, StyledModal } from './basketResult.styled'




export const BasketResult = ({showModal}) => {

    return (
        <StyledModal  >
             
        {<div  className={showModal ? 'modal-popup-active block' : 'modal-popup'}>
           
            <div className="header-modal">
                <span>Your purchases</span>
                <BtnModal>Buy</BtnModal>
            </div>   
  
        </div>}
    </StyledModal>
    )
}