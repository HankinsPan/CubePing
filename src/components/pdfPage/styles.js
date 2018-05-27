import {StyleSheet, Platform, Dimensions} from 'react-native';

const window = Dimensions.get('window');

module.exports = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
    },

    pdf: {
        flex: 1,
        width: window.width === 320 ? window.width + 50 : window.width + 80,
    },

});