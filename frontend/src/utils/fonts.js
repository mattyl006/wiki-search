import styled from 'styled-components';
import { Container } from './containers';

const H1 = styled(Container)`
  font-family: 'Anton', sans-serif;
  font-weight: 400;
  font-size: ${({setFontSize}) => setFontSize ? setFontSize : '64px'};
  line-height: ${({setFontSize}) => setFontSize ? setFontSize : '64px'};
  color: ${({theme}) => theme.colors.white};
`;

const H2 = styled(Container)`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  color: ${({theme}) => theme.colors.dark};

  @media (min-width: ${({theme}) => theme.overMobile}) {
    font-size: 32px;
    line-height: 32px;
  }
`;

const Text = styled(Container)`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: ${({theme}) => theme.colors.dark};

  @media (min-width: ${({theme}) => theme.overMobile}) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const Text_strong = styled(Container)`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  color: ${({theme}) => theme.colors.dark};

  @media (min-width: ${({theme}) => theme.overMobile}) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const Text_button = styled(Container)`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  text-decoration: underline;
  color: ${({theme}) => theme.colors.dark};

  @media (min-width: ${({theme}) => theme.overMobile}) {
    font-size: 18px;
    line-height: 18px;
  }
`;

export {H1, H2, Text, Text_strong, Text_button};