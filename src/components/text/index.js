import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { appStyles } from '../../services';

// Title Texts
export const LargeTitle = props => {
    return (
        <Text 
            style={[styles.largeTitleStyle, props.style]}
            >
            {props.children}
        </Text>
    );
}
export const MediumTitle = props => {
    return (
        <Text 
            style={[styles.mediumTitleStyle, props.style]}
            >
            {props.children}
        </Text>
    );
}
export const SmallTitle = props => {
    return (
        <Text 
            style={[styles.smallTitleStyle, props.style]}
            >
            {props.children}
        </Text>
    );
}
export const TinyTitle = props => {
    return (
        <Text 
            style={[styles.tinyTitleStyle, props.style]}
            >
            {props.children}
        </Text>
    );
}
// Normal Texts
export const LargeText = props => {
    return (
        <Text 
            style={[styles.largeTextStyle, props.style]}
            >
            {props.children}
        </Text>
    );
}
export const MediumText = props => {
    return (
        <Text 
            style={[styles.mediumTextStyle, props.style]}
            >
            {props.children}
        </Text>
    );
}
export const RegularText = props => {
    return (
        <Text 
            style={[styles.regularTextStyle, props.style]}
            >
            {props.children}
        </Text>
    );
}
export const SmallText = props => {
    return (
        <Text 
            style={[styles.smallTextStyle, props.style]}
            >
            {props.children}
        </Text>
    );
}
export const TinyText = props => {
    return (
        <Text 
            style={[styles.tinyTextStyle, props.style]}
            >
            {props.children}
        </Text>
    );
}

const styles = StyleSheet.create({
    largeTitleStyle: {
        ...appStyles.h3
    },
    mediumTitleStyle: {
        ...appStyles.h4
    },
    smallTitleStyle: {
        ...appStyles.h5
    },
    tinyTitleStyle: {
        ...appStyles.h6
    },
    largeTextStyle: {
        ...appStyles.textLarge
    },
    mediumTextStyle: {
        ...appStyles.textMedium
    },
    regularTextStyle: {
        ...appStyles.textRegular
    },
    smallTextStyle: {
        ...appStyles.textSmall
    },
    tinyTextStyle: {
        ...appStyles.textTiny
    }

});

