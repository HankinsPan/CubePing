import {StyleSheet, Platform, Dimensions} from 'react-native';

const window = Dimensions.get('window');

import * as color from '../../utils/colors';

module.exports = StyleSheet.create({

    container: {
        flex: 1,
    },

    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },

    image: {
        width: 250,
        height: 250,
    },

    resizeButton: {
        color: '#333333',
        fontWeight: 'bold',
        marginBottom: 5,
    }
});