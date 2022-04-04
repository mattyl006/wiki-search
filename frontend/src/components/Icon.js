import React from 'react';
import styled, { keyframes, css } from 'styled-components';

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

const Image = styled.img`
  width: ${({setWidth}) => setWidth ? setWidth : 'auto'};
  height: ${({setHeight}) => setHeight ? setHeight : 'auto'};
  animation: ${({animation}) => animation ? css`${bouncing} 1s ease-in-out infinite` : 'none'}
`;

function Icon(props) {
    return (
        <Image src={props.src} alt={props.alt} animation={props.animation}
       setWidth={props.setWidth} setHeight={props.setHeight} />
    );
};

export default Icon;