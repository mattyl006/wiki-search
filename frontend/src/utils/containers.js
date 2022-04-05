import styled from 'styled-components';

const Container = styled.div`
  padding: ${({setPadding}) => setPadding ? setPadding : '0'};
  margin: ${({setMargin}) => setMargin ? setMargin : '0'};
  width: ${({setWidth}) => setWidth ? setWidth : 'auto'};
  max-width: ${({setMaxWidth}) => setMaxWidth ? setMaxWidth : 'auto'};
  min-width: ${({setMinWidth}) => setMinWidth ? setMinWidth : 'auto'};
  height: ${({setHeight}) => setHeight ? setHeight : 'auto'};
  max-height: ${({setMaxHeight}) => setMaxHeight ? setMaxHeight : 'auto'};
  min-height: ${({setMinHeight}) => setMinHeight ? setMinHeight : 'auto'};
  background-color: ${({setBackgroundColor}) => setBackgroundColor ? setBackgroundColor : 'transparent'};
  border-radius: ${({setBorderRadius}) => setBorderRadius ? setBorderRadius : '0'};
  box-shadow: ${({shadow}) => shadow ? '0 4px 4px rgba(30, 30, 30, 0.25)' : 'none'};
  gap: ${({setGap}) => setGap ? setGap : '0'};
  border: ${({setBorder}) => setBorder ? setBorder : 'none'};
  cursor: ${({setCursor}) => setCursor ? setCursor : 'auto'};
`;

const FlexRow = styled(Container)`
  display: flex;
  justify-content: ${({alignment}) => alignment ? alignment : 'center'};
  align-items: center;
`;

const FlexColumn = styled(FlexRow)`
  flex-direction: column;
`;

const Grid = styled(Container)`
  display: grid;
  grid-template-columns: ${({setTemplateColumns}) => setTemplateColumns ? setTemplateColumns : 'auto'};
  grid-template-rows: ${({setTemplateRows}) => setTemplateRows ? setTemplateRows : 'auto'};
`;

export {Container, FlexRow, FlexColumn, Grid};