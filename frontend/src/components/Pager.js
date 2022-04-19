import React from 'react';
import { FlexRow } from '../utils/containers';
import styled from 'styled-components';
import polygon from '../assets/polygon.svg';

const PagerButton = styled.button`
  padding: 0;
  margin: 0;
  cursor: pointer;
  background: transparent;
  border: none;
`;

const PagerArrowLeft = styled.img`
  margin-top: 4px;
  width: 16px;
  height: 16px;
  transform: rotate(90deg);
`;

const PagerArrowRight = styled(PagerArrowLeft)`
  transform: rotate(-90deg);
`;

class Pager extends React.Component {
    state = {
        pageNr: 1,
    }

    increasePageNr = () => {
        let pageCount = 0;
        if(Math.floor(this.props.resultsLen / 10) == 0)
            pageCount = Math.floor(this.props.resultsLen / 10);
        else pageCount = Math.floor(this.props.resultsLen / 10) + 1;

        if(this.state.pageNr < pageCount) {
            let newPageNr = this.state.pageNr + 1;
            this.setState({
                pageNr: newPageNr
            });
        }
    }

    decreasePageNr = () => {
        if(this.state.pageNr > 1) {
            let newPageNr = this.state.pageNr - 1;
            this.setState({
                pageNr: newPageNr
            });
        }
    }

    render() {
        return (
            <FlexRow setGap={'20px'}>
                <PagerButton onClick={this.decreasePageNr}>
                    <PagerArrowLeft src={polygon} />
                </PagerButton>
                <FlexRow>
                    {this.state.pageNr}
                </FlexRow>
                <PagerButton onClick={this.increasePageNr}>
                    <PagerArrowRight src={polygon} />
                </PagerButton>
            </FlexRow>
        );
    }
}

export default Pager;