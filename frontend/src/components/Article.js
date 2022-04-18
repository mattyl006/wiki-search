import React from 'react';
import { FlexColumn } from '../utils/containers';
import { H2, Text } from '../utils/fonts';
import styled from 'styled-components';
import Media from "react-media";
import theme from '../utils/theme'

const Line = styled.div`
  width: 85%;
  height: 1px;
  background-color: ${({theme}) => theme.colors.blue};
`;

function Article(props) {
    return (
        <>
            <Media query={theme.mobile}>
                <FlexColumn as={'article'} setMaxWidth={'90%'} alignment={'flex-start'} 
                            setMargin={'0 0 24px 0'}>
                    <H2 setMargin={'0 0 12px 0'}>
                        {props.name}
                    </H2>
                    <Text setMaxWidth={'90%'} setMargin={'0 0 24px 0'}>
                        {props.describe}
                    </Text>
                    <Line />
                </FlexColumn> 
            </Media>
            <Media query={theme.desktop}>
                <FlexColumn as={'article'} setMaxWidth={'90%'} alignment={'flex-start'} 
                            setMargin={'0 0 32px 0'}>
                    <H2 setMargin={'0 0 24px 0'}>
                        {props.name}
                    </H2>
                    <Text setMaxWidth={'90%'} setMargin={'0 0 32px 0'}>
                        {props.describe}
                    </Text>
                    <Line />
                </FlexColumn> 
            </Media>
        </>
    );
}

export default Article;