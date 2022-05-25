import styled from 'styled-components'

export const StyledFooter = styled.div`
background-color: rgb(234, 234, 234);

.footer {
    display: flex;
    justify-content: space-between;
    padding: 30px 0px;
}


.footer-title {
    color: black;
    font-size: 13px;
    padding-bottom: 10px;
    font-weight: 700;
}


.footer-item {
    display: flex;
    flex-direction: column;
}


.footer-link {
  text-decoration: none;
  color: black;
  padding-bottom: 7px;
  font-size: 13px;
}

.footer-icon__img {
  width: 25px;
  height: 25px;
  margin: 10px 6px 10px 0;
}

.footer-item__link {
  display: flex;
  flex-direction: column;
}


.footer-link__subtitle {
  font-size: 13px;
  font-weight: 700;
  padding: 10px 0 10px 0;
}

.footer-icon__card {
  width: 43px;
  height: 31px;
  padding-top: 7px;
}

.footer-card__text {
  padding-top: 10px;
  width: 250px;
  font-size: 13px;
  cursor: pointer;
}

.footer-pay {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.footer-icon__pay {
  width: 85px;
  height: 25px;
  color: white;
  background-color: black;
  margin-top: 10px;
}


`