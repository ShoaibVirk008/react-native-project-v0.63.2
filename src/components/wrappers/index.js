import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import { height, totalSize, width } from 'react-native-dimension';
import { colors, appStyles } from '../../services';

export const MainWrapper = props => {
    const { children, style } = props
    return (
        <View style={[appStyles.mainContainer,style]}>
            {children}
        </View>
    );
}

export const ComponentWrapper = props => {
    const { children, style } = props
    return (
        <View style={[appStyles.compContainer,styles.removerMarginVertical,style]}>
            {children}
        </View>
    );
}

export const RowWrapper = props => {
    const { children, style } = props
    return (
        <View style={[appStyles.rowCompContainer,styles.removerMarginVertical,style]}>
            {children}
        </View>
    );
}
export const RowWrapperBasic = props => {
    const { children, style } = props
    return (
        <View style={[appStyles.rowView,style]}>
            {children}
        </View>
    );
}

const styles=StyleSheet.create({
    removerMarginVertical:{
        marginVertical:null
    }
})