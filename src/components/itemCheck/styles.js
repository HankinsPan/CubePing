import {StyleSheet, Platform, Dimensions} from 'react-native';

import * as color from '../../utils/colors';

module.exports = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F2F2F2',

    },

    checkItemView: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FFF',
        alignItems: 'center',
        marginTop: 5,
        padding: 10,
        paddingRight: 40,
    },

    checkItemTxt: {
        fontSize: 16,
        color: color.HANKINS_BG,
    },

    itemIcon: {
        width: 25,
        height: 25,
        tintColor: color.TEXT_INFO_COLOR,
        marginRight: 10,
    },

});