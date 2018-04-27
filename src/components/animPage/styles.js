import {StyleSheet, Platform, Dimensions} from 'react-native';

const window = Dimensions.get('window');

import * as color from '../../utils/colors';

module.exports = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        alignItems: 'center',
        justifyContent: 'center',
    },

    fadeView: {
        width: window.width * 0.4,
        height: window.width * 0.1,
        backgroundColor: color.STATE_TIPS,
        alignItems: 'center',
        justifyContent: 'center',

    },

});