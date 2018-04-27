import {StyleSheet, Platform, Dimensions} from 'react-native';

const window = Dimensions.get('window');

import * as color from '../../utils/colors';

module.exports = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
    },

    closeText: {
        color: 'white',
        textAlign: 'right',
        padding: 10,
    },
    footerText: {
        color: 'white',
        textAlign: 'center',
    },
    image: {
        marginRight: 2,
        height: 100,
    },

    imgCarouselView: {
        flex: 1,
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.05)',

    },
});