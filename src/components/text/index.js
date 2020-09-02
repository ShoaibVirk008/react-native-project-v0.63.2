import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { appStyles, colors, fontFamily, sizes, appIcons } from '../../services';
import { RowWrapperBasic, Wrapper } from '../wrappers';
import { Spacer } from '../spacers';
import { LineHorizontal } from '../lines';
import { width, height, totalSize } from 'react-native-dimension';
import { CustomIcon } from '../icons';

// Title Texts
export const XXLTitle = props => {
    return (
        <Text
            style={[styles.xxlTitleStyle, props.style]}
            onPress={props.onPress}
        >
            {props.children}
        </Text>
    );
}
export const XLTitle = props => {
    return (
        <Text
            style={[styles.xlTitleStyle, props.style]}
            onPress={props.onPress}
        >
            {props.children}
        </Text>
    );
}
export const LargeTitle = props => {
    return (
        <Text
            style={[styles.largeTitleStyle, props.style]}
            onPress={props.onPress}
        >
            {props.children}
        </Text>
    );
}
export const MediumTitle = props => {
    return (
        <Text
            style={[styles.mediumTitleStyle, props.style]}
            onPress={props.onPress}
        >
            {props.children}
        </Text>
    );
}
export const SmallTitle = props => {
    return (
        <Text
            style={[styles.smallTitleStyle, props.style]}
            onPress={props.onPress}
        >
            {props.children}
        </Text>
    );
}
export const TinyTitle = props => {
    return (
        <Text
            style={[styles.tinyTitleStyle, props.style]}
            onPress={props.onPress}
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
            onPress={props.onPress}
        >
            {props.children}
        </Text>
    );
}
export const MediumText = props => {
    return (
        <Text
            style={[styles.mediumTextStyle, props.style]}
            onPress={props.onPress}
        >
            {props.children}
        </Text>
    );
}
export const RegularText = props => {
    return (
        <Text
            numberOfLines={props.numberOfLines}
            style={[styles.regularTextStyle, props.style]}
            onPress={props.onPress}
        >
            {props.children}
        </Text>
    );
}
export const SmallText = props => {
    return (
        <Text
            style={[styles.smallTextStyle, props.style]}
            onPress={props.onPress}
        >
            {props.children}
        </Text>
    );
}
export const TinyText = props => {
    return (
        <Text
            style={[styles.tinyTextStyle, props.style]}
            onPress={props.onPress}
        >
            {props.children}
        </Text>
    );
}
export const InputTitle = props => {
    return (
        <Text
            style={[styles.inputTitleStyle, props.style]}
        >
            {props.children}
        </Text>
    );
}

export const DrawerLable = props => {
    return (
       <Wrapper style={{width:width(60),backgroundColor:'transparent'}}>
            <RowWrapperBasic style={[{ justifyContent: 'space-between', backgroundColor: 'transparent' }]}>
            <Wrapper>
                <Text
                    style={[styles.drawerLableStyle, props.focused?styles.focusedDrawerLableStyle:null, props.style]}
                >
                    {props.children}
                </Text>
                <Spacer height={sizes.smallMargin} />
                {
                    props.focused ?
                        <LineHorizontal
                            style={{ backgroundColor: colors.appColor1, width: width(6),borderRadius:25 }}
                            height={height(0.5)}
                        />
                        :
                        null
                }
            </Wrapper>
            {
                props.focused ?
                    <CustomIcon
                        icon={appIcons.arrow_right}
                        color={props.color}
                        size={sizes.icons.xl}
                    />
                    :
                    null
            }
        </RowWrapperBasic>
       </Wrapper>
    );
}

export const TitleWithInfo = props => {
    const { containerStyle, titleStyle, infoStyle, title, info, onPressInfo } = props
    return (
        <Wrapper>
            <RegularText style={[appStyles.textPrimaryColor, appStyles.textBold, titleStyle]}>{title}</RegularText>
            <Spacer height={sizes.TinyMargin} />
            <RegularText onPress={onPressInfo} style={[infoStyle]}>{info}</RegularText>
        </Wrapper>
    );
}





const styles = StyleSheet.create({
    xxlTitleStyle: {
        ...appStyles.h1
    },
    xlTitleStyle: {
        ...appStyles.h2
    },
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
        ...appStyles.h6,
        fontFamily: fontFamily.appTextBold
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
    },
    inputTitleStyle: {
        ...appStyles.textTiny,
        //color: colors.appColor1
    },
    drawerLableStyle: {
        ...appStyles.textRegular,
        color: colors.appTextColor5
    },
    focusedDrawerLableStyle: {
        ...appStyles.h6,
        ...appStyles.textWhite,
        fontFamily:fontFamily.appTextBold,
        
    },
    

});

