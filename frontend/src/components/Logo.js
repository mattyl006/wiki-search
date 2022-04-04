import React from 'react';
import styled from 'styled-components';
import { FlexRow } from '../utils/containers';
import { H1_mobile } from '../utils/fonts';

const MainHeader = styled(H1_mobile)`
  font-size: ${({setFontSize}) => setFontSize ? setFontSize : '64px'};
  line-height: ${({setFontSize}) => setFontSize ? setFontSize : '64px'};
`;

function Logo(props) {
    return (
       <FlexRow setBackgroundColor={props.setBackgroundColor} 
                setWidth={props.setWidth} setHeight={props.setHeight}>
           <MainHeader as={'h1'} setFontSize={props.setFontSize}>
               WikiSearch
           </MainHeader>
       </FlexRow> 
    );
}

export default Logo;
