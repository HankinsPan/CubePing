import * as color from '../../utils/colors';
import {StyleSheet, Platform, Dimensions} from 'react-native';

const window = Dimensions.get('window');
const mHeight = Platform.OS === 'ios' ? 60 : 45;

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F2F2F2',
    },

    pageTitle: {
        flexDirection: 'row',
        backgroundColor: color.LINE_NOMAL_COLOR,
    },

    leftIcon: {
        flex: 1,
        height: mHeight,
        justifyContent: 'flex-end',
        paddingBottom: 10,
        paddingLeft: 15,
    },

    titleView: {
        flex: 4,
        height: mHeight,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },

    rightIcon: {
        flex: 1,
        height: mHeight,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingBottom: 10,
        paddingRight: 15,
    },

    rightSearch: {
        width: 22,
        height: 22,
        tintColor: color.TEXT_INFO_COLOR,
    },

    rightSearchSmall: {
        width: 18,
        height: 18,
        tintColor: color.TEXT_INFO_COLOR,
    },

    leftBack: {
        width: 15,
        height: 20,
        tintColor: color.TEXT_INFO_COLOR,
    },

    leftBackSmall: {
        width: 13,
        height: 18,
        tintColor: color.TEXT_INFO_COLOR,
    },

    proTxtTitle: {
        fontSize: 18,
        paddingBottom: 10,
        color: color.HANKINS_DARK
    },


    loadFooterView: {
        flex: 1,
        justifyContent: 'center',
    },

    footerLoadView: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FFF',
        justifyContent: 'center',
        paddingBottom: 20,
        paddingTop: 20,
    },


    areaItemView: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',

    },

    areaItemViewV2: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },

    areaItemViewV3: {
        width: window.width,
        height: window.width * 0.11,
        justifyContent: 'center',
        paddingLeft: 10,
        backgroundColor: '#FFF',

        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.05)',
    },

    areaTitleTxt: {
        fontSize: window.width === 320 ? 13 : 15,
        color: color.TEXT_INFO_COLOR,
        marginLeft: 5,
    },


    areaTitleTxtV2: {
        fontSize: window.width === 320 ? 14 : 16,
        color: color.TEXT_MAIN_COLOR,
        padding: 10,
    },

    areaTitleTxtV3: {
        fontSize: window.width === 320 ? 14 : 16,
        color: color.TEXT_MAIN_COLOR,
    },


});