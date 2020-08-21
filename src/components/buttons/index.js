import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Icon } from 'react-native-elements';
import { height, totalSize, width } from 'react-native-dimension';
import { colors,appStyles,fontSize,sizes } from '../../services';

export const ButtonColored = props => {
    const { text, onPress, buttonStyle, textStyle, iconName, iconType, iconSize, iconColor, iconStyle, tintColor } = props
    return (
        <TouchableOpacity onPress={onPress} style={[appStyles.buttonColord, { marginHorizontal: width(5), borderRadius: sizes.buttonRadius, height: height(6) }, appStyles.shadowColored, buttonStyle]}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {
                    iconName ?
                        <Icon
                            name={iconName ? iconName : "email-outline"}
                            type={iconType ? iconType : "material-community"}
                            size={iconSize ? iconSize : totalSize(3)}
                            color={tintColor ? tintColor : colors.appTextColor6}
                            iconStyle={[{ marginRight: width(2.5) }, iconStyle]}

                        />
                        :
                        null
                }
                <Text style={[appStyles.buttonText, { color: tintColor ? tintColor : colors.appTextColor6, fontSize: fontSize.regular }, textStyle]}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}

export const ButtonColoredSmall = props => {
    const { text, onPress, buttonStyle, customIcon,direction, textStyle, iconName, iconType, iconSize, iconColor, iconStyle } = props
    return (
        <TouchableOpacity onPress={onPress} style={[{ borderRadius: 15, paddingHorizontal: width(5), paddingVertical: height(1), backgroundColor: colors.appColor1 }, buttonStyle]}>
        <View style={{ flexDirection: direction ? direction : 'row', alignItems: 'center' }}>
            {
                customIcon ?
                    <CustomIcon
                    icon={customIcon}
                    size={iconSize ? iconSize : totalSize(2)}
                    color={iconColor ? iconColor : colors.appTextColor6}
                    />
                    :
                    iconName ?
                        <Icon
                            name={iconName ? iconName : "email-outline"}
                            type={iconType ? iconType : "material-community"}
                            size={iconSize ? iconSize : totalSize(2)}
                            color={iconColor ? iconColor : colors.appTextColor6}
                            iconStyle={[{  }, iconStyle]}
                        />
                        :
                        null
            }
            <Text style={[appStyles.buttonText, { color: colors.appTextColor6, fontSize: fontSize.regular }, textStyle]}>  {text}  </Text>
        </View>
    </TouchableOpacity>
    );
}

export const ButtonBordered = props => {
    const { text, onPress, buttonStyle, textStyle, iconName, iconType, iconSize, iconColor, iconStyle,tintColor } = props
    return (
        <TouchableOpacity  onPress={onPress} style={[appStyles.buttonBorderd,{ borderRadius: sizes.buttonRadius ,height:height(6),borderColor:tintColor?tintColor:colors.appColor1}, buttonStyle]}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {
                        iconName ?
                            <Icon
                                name={iconName ? iconName : "email-outline"}
                                type={iconType ? iconType : "material-community"}
                                size={iconSize ? iconSize : totalSize(3)}
                                color={tintColor ? tintColor : colors.appColor1}
                                iconStyle={[{ marginRight: width(2.5) }, iconStyle]}

                            />
                            :
                            null
                    }
                    <Text style={[appStyles.buttonText, { color:tintColor?tintColor: colors.appColor1 ,fontSize:fontSize.regular}, textStyle]}>{text}</Text>
                </View>
            </TouchableOpacity>
    );
}

export const ButtonBorderedSmall = props => {
    const { text, onPress, buttonStyle,rowReverse, textStyle, iconName, iconType, iconSize, iconColor, iconStyle,tintColor } = props
    return (
        <TouchableOpacity  onPress={onPress} style={[ { borderRadius: 15 ,paddingHorizontal:width(5),paddingVertical:height(1),borderColor:tintColor?tintColor:colors.appColor1,borderWidth:1}, buttonStyle]}>
                <View style={{ flexDirection: rowReverse?'row-reverse':'row', alignItems: 'center' }}>
                    {
                        iconName ?
                            <Icon
                                name={iconName ? iconName : "email-outline"}
                                type={iconType ? iconType : "material-community"}
                                size={iconSize ? iconSize : totalSize(2)}
                                color={tintColor ? tintColor : colors.appColor1}
                                iconStyle={[{ marginHorizontal: width(2) }, iconStyle]}
                            />
                            :
                            null
                    }
                    <Text style={[appStyles.buttonText, { color:tintColor?tintColor: colors.appColor1 ,fontSize:fontSize.regular}, textStyle]}>{text}</Text>
                </View>
            </TouchableOpacity>
    );
}


