import React from 'react';
import styled from 'styled-components';
import { FlexRow } from '../utils/containers';
import theme from '../utils/theme';
import { Text_mobile } from '../utils/fonts';
import polygon from '../assets/polygon.svg';
import search from '../assets/search.svg';
import Button from './Button';
import Icon from './Icon';

const Input = styled(Text_mobile)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75%;
  height: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 4px;
`;

function Search(props) {
  return (
      <FlexRow setWidth={props.setWidth} setHeight={props.setHeight} shadow
               setBorderRadius={'4px'} setBackgroundColor={theme.colors.light1}
               alignment='space-between' setMargin={props.setMargin}>
          <Button setWidth={'32px'} setHeight={'100%'} 
                  setBackgroundColor={theme.colors.light3} setBorderRadius={'4px 0 0 4px'}>
            <Icon src={polygon} setWidth={'12px'} setHeight={'8px'} />
          </Button>
          <Input as='input' />
          <Button setWidth={'32px'} setHeight={'100%'} 
                  setBackgroundColor={theme.colors.light3} setBorderRadius={'0 4px 4px 0'}>
            <Icon src={search} setWidth={'16px'} setHeight={'16px'} />
          </Button>
      </FlexRow>
  );
};

export default Search;