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

function Article() {
    return (
        <>
            <Media query={theme.mobile}>
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
            </Media>
            <Media query={theme.desktop}>
                <FlexColumn as={'article'} setMaxWidth={'90%'} alignment={'flex-start'} 
                            setMargin={'0 0 32px 0'}>
                    <H2 setMargin={'0 0 24px 0'}>
                        Article
                    </H2>
                    <Text setMaxWidth={'90%'} setMargin={'0 0 32px 0'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Duis pellentesque fringilla tortor quis tincidunt. 
                        Donec risus tortor, faucibus vel nisi sed, viverra molestie metus. 
                        Integer ac eleifend ante. Donec faucibus dictum massa vel fringilla. 
                        Integer imperdiet mi non arcu lobortis, id feugiat sapien fringilla. 
                        Pellentesque commodo placerat accumsan. Aenean eget dolor at magna posuere 
                        pharetra non ut purus. Praesent semper condimentum lorem eu placerat. 
                        Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                        Etiam a euismod nisl, quis faucibus sapien. Cras id commodo ex. 
                        Suspendisse convallis maximus augue sed pulvinar. 
                        Donec efficitur volutpat mattis. Nam sit amet libero dolor.
                    </Text>
                    <Line />
                </FlexColumn> 
            </Media>
        </>
    );
}

export default Article;