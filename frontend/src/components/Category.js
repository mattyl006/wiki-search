import React from 'react';
import { FlexRow, Container } from '../utils/containers';
import { Text_strong } from '../utils/fonts';

function Category(props) {
    return (
        <FlexRow setGap={'16px'}>
            <Container setWidth={'16px'} setHeight={'16px'}
                       as={'input'} type={'checkbox'} 
                       id={props.name} name={props.name} />
            <Text_strong as={'label'} for={props.name}>
                {props.name}
            </Text_strong>
        </FlexRow>
    );
}

export default Category;