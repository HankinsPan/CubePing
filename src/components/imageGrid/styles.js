import {StyleSheet, Platform, Dimensions} from 'react-native';

const window = Dimensions.get('window');

import * as color from '../../utils/colors';

module.exports = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
    },

    showImages: {
        height: window.width * 0.38,
        marginLeft: 2.5,
        marginRight: 2.5,
        marginTop: 3,
        backgroundColor: color.LINE_COLOR,
    },

    gridViewContainer: {
        width: window.width,
        height: window.width * 1.2,
        backgroundColor: 'rgba(0,0,0,0.05)',
        marginTop: 25,
    },


});