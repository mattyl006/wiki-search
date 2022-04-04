import styled from 'styled-components';

const H1_mobile = styled.h1`
  font-family: 'Anton', sans-serif;
  font-weight: 400;
  font-size: 64px;
  line-height: 64px;
  color: ${({theme}) => theme.colors.dark}
`;

export {H1_mobile};