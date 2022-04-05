import React from 'react';
import { FlexColumn } from '../utils/containers';
import { H2_mobile, Text_mobile } from '../utils/fonts';
import styled from 'styled-components';

const Line = styled.div`
  width: 85%;
  height: 1px;
  background-color: ${({theme}) => theme.colors.blue};
`;

function Article() {
    return (
        <FlexColumn as={'article'} setMaxWidth={'90%'} alignment={'flex-start'} 
                    setMargin={'0 0 24px 0'}>
            <H2_mobile setMargin={'0 0 12px 0'}>
                Article
            </H2_mobile>
            <Text_mobile setMaxWidth={'90%'} setMargin={'0 0 24px 0'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Duis pellentesque fringilla tortor quis tincidunt. 
                Donec risus tortor, faucibus vel nisi sed, viverra molestie metus. 
                Integer ac eleifend ante.
            </Text_mobile>
            <Line />
        </FlexColumn>    
    );
}

export default Article;