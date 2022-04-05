import styled from 'styled-components';
import { Container } from './containers';

const H1_mobile = styled(Container)`
  font-family: 'Anton', sans-serif;
  font-weight: 400;
  font-size: 64px;
  line-height: 64px;
  color: ${({theme}) => theme.colors.white};
`;

const H2_mobile = styled(Container)`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  color: ${({theme}) => theme.colors.dark};
`;

const Text_mobile = styled(Container)`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: ${({theme}) => theme.colors.dark};
`;

const Text_strong_mobile = styled(Container)`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  color: ${({theme}) => theme.colors.dark};
`;

const Text_button_mobile = styled(Container)`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  text-decoration: underline;
  color: ${({theme}) => theme.colors.dark};
`;

export {H1_mobile, H2_mobile, Text_mobile, Text_strong_mobile, Text_button_mobile};