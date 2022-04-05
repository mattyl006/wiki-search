import React from 'react';
import {FlexRow} from '../utils/containers';
import styled from 'styled-components';

const ButtonHover = styled(FlexRow)`
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: ${({theme}) => theme.colors.blue};
  }
`;

function Button(props) {
  return (
      <ButtonHover as={'button'} setCursor={'pointer'} setGap={props.gap} onClick={props.action}
                   setBackgroundColor={props.setBackgroundColor}
                   setBorderRadius={props.setBorderRadius}
                   setMargin={props.setMargin}
                   setWidth={props.setWidth} setHeight={props.setHeight}>
        {props.children}
      </ButtonHover>
  );
}

export default Button;