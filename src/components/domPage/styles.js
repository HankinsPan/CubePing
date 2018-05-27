import {StyleSheet, Platform, Dimensions} from 'react-native';

const window = Dimensions.get('window');

import * as color from '../../utils/colors';

module.exports = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F2F2F2',
        alignItems: 'center',
        justifyContent: "center",

    },

    touchBack: {
        width: window.width * 0.35,
        height: window.width * 0.12,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.STATE_TIPS,
    },

    touchTxt: {
        fontSize: 16,
        color: '#FFF',
    },

});