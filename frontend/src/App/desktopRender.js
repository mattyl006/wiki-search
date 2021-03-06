import React from 'react';
import Logo from '../components/Logo';
import Icon from '../components/Icon';
import document from '../assets/document.svg';
import Search from '../components/Search';
import {FlexColumn, FlexRow} from '../utils/containers';
import Category from '../components/Category';
import Pager from '../components/Pager';
import theme from '../utils/theme';

const desktopRender = (component) => {
    return (
        <FlexColumn setPadding={'24px'} setGap={'64px'} setWidth={'100%'} setMinHeight={'100vh'} 
                    alignmentY={component.state.desktopView.alignmentY}>
          <Logo setDisplay={component.state.desktopView.logoDisplay} 
                setBackgroundColor={theme.colors.darkBlue} 
                setWidth={'400px'} setHeight={'100px'} setFontSize={'48px'} />
          <FlexRow alignmentY='flex-start' alignment='space-between' setGap={'32px'}>
            <Logo setDisplay={component.state.desktopView.miniLogoDisplay} 
                  setBackgroundColor={theme.colors.darkBlue} 
                  setWidth={'144px'} setHeight={'72px'} setFontSize={'24px'} />
            <FlexColumn setGap={'20px'}>
              <Search setWidth={'940px'} setMaxWidth={component.state.desktopView.searchMaxWidth} 
                      setHeight={'64px'} action={(e) => component.queryActionDesktop(e)} 
                      setQuery={(e) => component.setQuery(e)}/>
              <FlexRow setWidth={'940px'} setMaxWidth={component.state.desktopView.searchMaxWidth}  
                       alignment={'flex-start'} setGap={'32px'}>
                <Category name={'alphabetical sort'} setAlphabetSort={component.setAlphabetSort} />
              </FlexRow>
            </FlexColumn>
          </FlexRow>
          <Icon src={document} alt={'Document icon.'}
                setMargin={'200px 0 0 0'} 
                setWidth={'80px'} setHeight={'120px'}
                setDisplay={component.state.documentIconDesktop.display} 
                animation={component.state.documentIconDesktop.animation} />
          <FlexColumn alignment={'flex-start'} setWidth={'80%'}>
            {component.resultsRender('page1')}
          </FlexColumn>
          {(component.state.results.length !== 0) ? <Pager 
            pageNr={component.state.pageNr} 
            decreasePageNr={component.decreasePageNr}
            increasePageNr={component.increasePageNr} /> : ''}
        </FlexColumn>
    );
}

export default desktopRender;