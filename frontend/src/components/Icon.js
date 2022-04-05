import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Container } from '../utils/containers';

const bouncing = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-100px);
  }
  100% {
    transform: translateY(0);
  }
`;

const BouncingIcon = styled(Container)`
  animation: ${({animation}) => animation ? css`${bouncing} 1s ease-in-out infinite` : 'none'}
`;

function Icon(props) {
    return (
        <BouncingIcon as={'img'} src={props.src} alt={props.alt} animation={props.animation}
               setMargin={props.setMargin} setDisplay={props.setDisplay}
               setWidth={props.setWidth} setHeight={props.setHeight} />
    );
};

export default Icon;