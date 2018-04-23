import {StyleSheet, Platform, Dimensions} from 'react-native';

const window = Dimensions.get('window');

import * as color from '../../utils/colors';

module.exports = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F2F2F2',

    },

    toastClickView: {
        marginTop: window.width * 0.6,
        alignSelf: 'center',
        width: window.width * 0.4,
        height: window.width * 0.1,
        backgroundColor: color.STATE_TIPS,
        alignItems: 'center',
        justifyContent: 'center',

    },

    toastTxt: {
        fontSize: 18,
        color: '#FFF',
    },

});