import styled from 'styled-components';

const sets = styled.div`
  padding: ${({setPadding}) => setPadding ? setPadding : '0'};
  margin: ${({setMargin}) => setMargin ? setMargin : '0'};
  width: ${({setWidth}) => setWidth ? setWidth : 'auto'};
  max-width: ${({setMaxWidth}) => setMaxWidth ? setMaxWidth : 'auto'};
  min-width: ${({setMinWidth}) => setMinWidth ? setMinWidth : 'auto'};
  height: ${({setHeight}) => setHeight ? setHeight : 'auto'};
  max-height: ${({setMaxHeight}) => setMaxHeight ? setMaxHeight : 'auto'};
  min-height: ${({setMinHeight}) => setMinHeight ? setMinHeight : 'auto'};
  background-color: ${({setBackgroundColor}) => setBackgroundColor ? setBackgroundColor : 'transparent'};
`;

const FlexRow = styled(sets)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FlexColumn = styled(FlexRow)`
  flex-direction: column;
`;

export {FlexRow, FlexColumn};