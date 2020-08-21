import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator, TextInput } from 'react-native'
import { Icon } from 'react-native-elements';
import { height, totalSize, width } from 'react-native-dimension';
import { colors, appStyles } from '../../services';
import TextInputBordered from './textInputBordered'
const TextInputColored = props => {
    const { iconName, iconType, placeholder, onFocus, onBlur, onChangeText, secureTextEntry, value, containerStyle } = props
    return (
        <View style={[appStyles.inputContainerColored, {
            borderRadius: 10,
            backgroundColor: colors.appBgColor2
        }, appStyles.shadow, containerStyle]}>
            <View style={{ flex: 2, alignItems: 'center' }}>
                <Icon name={iconName} type={iconType} size={totalSize(2.5)} color={colors.appTextColor5} iconStyle={{}} />
            </View>
            <View style={{ flex: 8 }}>
                <TextInput
                    onChangeText={onChangeText}
                    value={value}
                    placeholder={placeholder}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    secureTextEntry={secureTextEntry}
                    style={[appStyles.inputField, { width: null, height: height(7) }]}
                />
            </View>
        </View>
    );
}

export { TextInputColored, TextInputBordered }