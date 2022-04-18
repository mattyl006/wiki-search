import React from 'react';
import Logo from '../components/Logo';
import Icon from '../components/Icon';
import document from '../assets/document.svg';
import Search from '../components/Search';
import Button from '../components/Button';
import {FlexColumn, FlexRow, Grid} from '../utils/containers';
import {H2, Text_button} from '../utils/fonts';
import theme from '../utils/theme';

const mobileRender = (component) => {
    return (
        <Grid setWidth={'100%'} setMinHeight={'100vh'} setTemplateRows={'auto 1fr'}>
          <FlexColumn setWidth={'100%'}>
              <Logo setBackgroundColor={theme.colors.darkBlue} 
                    setWidth={'100%'} setHeight={'200px'} setFontSize={'64px'} />
              <Search setMargin={'32px 0 48px 0'} setWidth={'90%'} 
                      setHeight={'52px'} action={(e) => component.queryAction(e)} />
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
              {component.state.results.page1 ? component.resultsRender('page1') : ''}
              {component.state.results.page1 && !component.state.results.page2 
                ? <Button setBorderRadius={'4px'} setMargin={'8px 0 32px 0'} 
                          action={component.showMoreResults} setBackgroundColor={theme.colors.light2}
                          setWidth={'160px'} setHeight={'32px'}>
                  <Text_button>
                    See more
                  </Text_button>
                </Button> : ''}
              {component.state.results.page2 ? component.resultsRender('page2') : ''}
            </FlexColumn>
          </FlexRow>
        </Grid>
    );
}

export default mobileRender;