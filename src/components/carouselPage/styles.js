import {StyleSheet, Platform, Dimensions} from 'react-native';

const window = Dimensions.get('window');

import * as color from '../../utils/colors';

module.exports = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
    },

    cardView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.STATE_TIPS,

        borderRadius: 15,
        shadowColor: 'rgba(0,0,0,0.15)',
    },


});