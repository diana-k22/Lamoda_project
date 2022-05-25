import Main from "./Main";
import Content from "./Content";
import { StyledMainWrapper } from "./MainWrapper.styled";
import { Container } from '../../components/styles/Container.styled';
import { StyledContentWrapper } from "./ContentWrapper.styled";

export const MainContent = () => {
  return (
    <div>
      <Container>
        <StyledMainWrapper>
          <Main/>
        </StyledMainWrapper>
      </Container>

      <Container>
        <StyledContentWrapper>
          <Content/>
        </StyledContentWrapper>
      </Container>
    </div>

  )
}
