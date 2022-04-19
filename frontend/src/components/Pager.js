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
    render() {
        return (
            <FlexRow setGap={'20px'}>
                <PagerButton onClick={this.props.decreasePageNr}>
                    <PagerArrowLeft src={polygon} />
                </PagerButton>
                <FlexRow>
                    {this.props.pageNr}
                </FlexRow>
                <PagerButton onClick={this.props.increasePageNr}>
                    <PagerArrowRight src={polygon} />
                </PagerButton>
            </FlexRow>
        );
    }
}

export default Pager;