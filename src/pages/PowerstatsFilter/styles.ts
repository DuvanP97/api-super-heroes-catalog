import styled from 'styled-components';
import { Container, Label } from 'reactstrap';
import { FONT_A_LIGHT, TERTIARY } from '../../assets/styles/colors';

export const HomeContainer = styled(Container)`
  flex: 1;
`;

export const NavBarContainer = styled.div`
  width: 100%;
  padding: 30px;
  background-color: ${FONT_A_LIGHT};
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 200px;
`;

export const Title = styled(Label)`
  color: ${TERTIARY};
  font-family: NotoSansJPBold, sans-serif;
  font-size: 40px;
`;
