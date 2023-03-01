import React, { FunctionComponent } from 'react';
import { Text, StyleSheet } from 'react-native';

export type HeadlineProps = {
    level?: string;
}



const styles = StyleSheet.create({
    fontStyle: {
    }
})

const Headline: FunctionComponent<HeadlineProps> = (props) => {
    if (props.level) {

    }
    
    return <></>
}

export default Headline;