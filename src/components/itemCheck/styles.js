import {StyleSheet, Platform, Dimensions} from 'react-native';

import * as color from '../../utils/colors';

export const AVATOR_IMG = 46;

module.exports = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F2F2F2',

    },

    itemRightView: {
        flex: 1,
        flexDirection: 'row',
        paddingRight: 10,
        backgroundColor: 'rgba(0,0,0,0.05)',
    },

    checkItemView: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FFF',
        alignItems: 'center',
        marginTop: 10,
        padding: 10,
    },

    itemContentView: {
        flex: 7,
        flexDirection: 'column',
        backgroundColor: 'rgba(132,165,83,0.05)',
        alignItems: 'center',

    },

    itemContentLastView: {
        flex: 3,
        flexDirection: 'column',
        backgroundColor: 'rgba(232,18,169,0.05)',
        alignItems: 'center',

    },

    checkItemTxt: {
        fontSize: 16,
        color: color.HANKINS_BG,
    },

    itemIcon: {
        width: 20,
        height: 20,
    },

    itemHeadImg: {
        width: AVATOR_IMG,
        height: AVATOR_IMG,
        borderRadius: AVATOR_IMG / 2,
        backgroundColor: '#FFF',
        marginLeft: 10,
    }

});