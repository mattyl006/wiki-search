import React from 'react';
import { FlexColumn } from '../utils/containers';
import { H2, Text } from '../utils/fonts';
import styled from 'styled-components';
import Media from "react-media";
import theme from '../utils/theme'
import Button from '../components/Button';

const Line = styled.div`
  width: 85%;
  height: 1px;
  background-color: ${({theme}) => theme.colors.blue};
`;

const ShowLessMore = styled(Text)`
  font-size: 12px;
  line-height: 20px;
  text-decoration: underline;
`;

const TagText = styled(Text)`
  font-family: 'Roboto', sans-serif;
`;

class Article extends React.Component {
    state = {
        showMore: false,
    }

    textHighlight = (text) => {
        let queryTerms = this.props.query.split(' ');
        let regex = '';
        queryTerms.map((term) => {
            regex = new RegExp(term, "ig");
            text = text.replaceAll(regex, `<b>${term.toUpperCase()}</b>`)
        })
        return text;
    }

    describeShowing = () => {
        let describe =  this.props.describe;
        if(describe.length < 500 || this.state.showMore)
            return {__html: this.textHighlight(describe)};
        return {__html: this.textHighlight(describe).slice(0, 500) + '...'};
    }

    showMoreSwitcher = () => {
        let newShowMore = !this.state.showMore;
        this.setState({
            showMore: newShowMore
        });
    }

    moreButtonRender() {
        if(this.props.describe.length >= 500) {
            return (
                <Button setBorderRadius={'4px'} setMargin={'0 0 24px 0'} 
                        setBackgroundColor={theme.colors.light2}
                        setWidth={'100px'} setHeight={'24px'} onClick={this.showMoreSwitcher}>
                    <ShowLessMore onClick={this.showMoreSwitcher}>
                        {this.state.showMore ? 'Show less' : 'Show more'}
                    </ShowLessMore>
                </Button>
            );
        }
    }

    mobileRender() {
        return (
            <FlexColumn as={'article'} setMaxWidth={'90%'} alignment={'flex-start'} 
                        setMargin={'0 0 24px 0'}>
                <H2 as='h2' setMargin={'0 0 12px 0'} 
                    dangerouslySetInnerHTML={{__html: this.textHighlight(this.props.name)}} />
                <Text setMaxWidth={'90%'} setMargin={'0 0 12px 0'} 
                      dangerouslySetInnerHTML={this.describeShowing()} />
                {this.moreButtonRender()}
                <TagText setMargin={'0 0 12px 0'} 
                         dangerouslySetInnerHTML={{__html: 
                         this.textHighlight(this.props.tags.replaceAll(',', ', '))}} />
                <Text setMargin={'0 0 24px 0'}>
                    {this.props.date}
                </Text>
                <Line />
            </FlexColumn> 
        );
    }

    desktopRender() {
        return (
            <FlexColumn as={'article'} setMaxWidth={'90%'} alignment={'flex-start'} 
                        setMargin={'0 0 32px 0'}>
                <H2 as='h2' setMargin={'0 0 24px 0'}
                    dangerouslySetInnerHTML={{__html: this.textHighlight(this.props.name)}} />
                <Text dangerouslySetInnerHTML={this.describeShowing()} 
                      setMaxWidth={'90%'} setMargin={'0 0 12px 0'} />
                {this.moreButtonRender()}
                <TagText setMargin={'0 0 12px 0'} 
                         dangerouslySetInnerHTML={{__html: 
                         this.textHighlight(this.props.tags.replaceAll(',', ', '))}} />
                <Text setMargin={'0 0 32px 0'}>
                    {this.props.date}
                </Text>
                <Line />
            </FlexColumn> 
        );
    }

    render () {
        return (
            <>
                <Media query={theme.mobile}>
                    {this.mobileRender()}
                </Media>
                <Media query={theme.desktop}>
                    {this.desktopRender()}
                </Media>
            </>
        );
    }
}

export default Article;