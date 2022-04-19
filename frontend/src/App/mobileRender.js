import React from 'react';
import Logo from '../components/Logo';
import Icon from '../components/Icon';
import document from '../assets/document.svg';
import Search from '../components/Search';
import {FlexColumn, FlexRow, Grid} from '../utils/containers';
import {H2} from '../utils/fonts';
import theme from '../utils/theme';
import Pager from '../components/Pager';
import Category from '../components/Category';

const mobileRender = (component) => {
    return (
        <Grid setWidth={'100%'} setMinHeight={'100vh'} setTemplateRows={'auto 1fr'}>
          <FlexColumn setWidth={'100%'} setMargin={'0 0 32px 0'} >
              <Logo setBackgroundColor={theme.colors.darkBlue} 
                    setWidth={'100%'} setHeight={'172px'} setFontSize={'62px'} />
              <Search setMargin={'32px 0 12px 0'} setWidth={'90%'}
                      setHeight={'52px'} action={(e) => component.queryAction(e)} 
                      setQuery={(e) => component.setQuery(e)} />
              <Category name={'alphabetical sort'} setAlphabetSort={component.setAlphabetSort} />
          </FlexColumn>
          <FlexRow>
            <FlexColumn>
              <H2 onClick={component.queryAction}
                         setDisplay={component.state.searchLabel.display}
                         setOpacity={component.state.searchLabel.opacity}
                         setMargin={'0 0 48px 0'}>
                Let's search!
              </H2>
              <Icon src={document} alt={'Document icon.'} 
                    setWidth={'90px'} setHeight={'90px'}
                    setDisplay={component.state.documentIcon.display} 
                    animation={component.state.documentIcon.animation} />
              {component.resultsRender('page1')}
              {(component.state.results.length !== 0) ? <Pager 
                pageNr={component.state.pageNr} 
                decreasePageNr={component.decreasePageNr}
                increasePageNr={component.increasePageNr} /> : ''}
            </FlexColumn>
          </FlexRow>
        </Grid>
    );
}

export default mobileRender;