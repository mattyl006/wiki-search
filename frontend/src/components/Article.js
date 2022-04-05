import React from 'react';
import { FlexColumn } from '../utils/containers';
import { H2, Text } from '../utils/fonts';
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
            <H2 setMargin={'0 0 12px 0'}>
                Article
            </H2>
            <Text setMaxWidth={'90%'} setMargin={'0 0 24px 0'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Duis pellentesque fringilla tortor quis tincidunt. 
                Donec risus tortor, faucibus vel nisi sed, viverra molestie metus. 
                Integer ac eleifend ante.
            </Text>
            <Line />
        </FlexColumn>    
    );
}

export default Article;