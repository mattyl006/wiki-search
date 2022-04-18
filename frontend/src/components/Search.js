import React from 'react';
import { FlexRow } from '../utils/containers';
import theme from '../utils/theme';
import { Text } from '../utils/fonts';
import polygon from '../assets/polygon.svg';
import search from '../assets/search.svg';
import Button from './Button';
import Icon from './Icon';
import Media from "react-media";

function Search(props) {
  
  const mobileRender = () => {
    return (
      <FlexRow as={'form'} onSubmit={props.action} 
               setWidth={props.setWidth} setHeight={props.setHeight} shadow
               setBorderRadius={'4px'} setBackgroundColor={theme.colors.light1}
               alignment='space-between' setMargin={props.setMargin}>
          <Button setWidth={'32px'} setHeight={'100%'}
                  setBackgroundColor={theme.colors.light3} setBorderRadius={'4px 0 0 4px'}>
            <Icon src={polygon} setWidth={'12px'} setHeight={'8px'} />
          </Button>
          <Text as='input' setWidth={'75%'} setPadding={'4px'} onChange={(e) => props.setQuery(e)}/>
          <Button setWidth={'32px'} setHeight={'100%'} action={props.action}
                  setBackgroundColor={theme.colors.light3} setBorderRadius={'0 4px 4px 0'}>
            <Icon src={search} setWidth={'16px'} setHeight={'16px'} />
          </Button>
      </FlexRow>
    );
  }

  const desktopRender = () => {
    return (
      <FlexRow as={'form'} onSubmit={props.action} 
               setWidth={props.setWidth} setMaxWidth={props.setMaxWidth} 
               setHeight={props.setHeight} shadow
               setBorderRadius={'4px'} setBackgroundColor={theme.colors.light1}
               alignment='space-between' setMargin={props.setMargin}>
          <Text as='input' setWidth={'calc(100% - 100px)'} setPadding={'16px'}/>
          <Button setWidth={'64px'} setHeight={'100%'} action={props.action}
                  setBackgroundColor={theme.colors.light3} setBorderRadius={'0 4px 4px 0'}>
            <Icon src={search} setWidth={'24px'} setHeight={'24px'} 
                  onChange={(e) => props.setQuery(e)}/>
          </Button>
      </FlexRow>
    );  
  }

  return (
    <>
      <Media query={theme.mobile}>
        {mobileRender()}
      </Media>
      <Media query={theme.desktop}>
        {desktopRender()}
      </Media>
    </>
  );
};

export default Search;