import React from 'react';
import styled from 'styled-components';
import { FlexRow } from '../utils/containers';
import { H1 } from '../utils/fonts';

function Logo(props) {
    return (
       <FlexRow setDisplay={props.setDisplay} setBackgroundColor={props.setBackgroundColor} 
                setWidth={props.setWidth} setHeight={props.setHeight}>
           <H1 as={'h1'} setFontSize={props.setFontSize}>
               WikiSearch
           </H1>
       </FlexRow> 
    );
}

export default Logo;
