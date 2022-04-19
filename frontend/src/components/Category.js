import React from 'react';
import { FlexRow, Container } from '../utils/containers';
import { Text_strong } from '../utils/fonts';

function Category(props) {
    return (
        <FlexRow setGap={'16px'}>
            <Container setWidth={'16px'} setHeight={'16px'}
                       as={'input'} type={'checkbox'} 
                       onChange={(e) => props.setAlphabetSort(e)}
                       id={props.name} name={props.name} />
            <Text_strong as={'label'} htmlFor={props.name}>
                {props.name}
            </Text_strong>
        </FlexRow>
    );
}

export default Category;