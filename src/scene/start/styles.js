import {
    StyleSheet,
    Platform,
    Dimensions
} from 'react-native';

const window = Dimensions.get('window');

module.exports = StyleSheet.create({
    originView: {
        flex: 1,
    },

    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },

    imgBgView: {
        marginTop: 30,
        width: window.width * 0.75,
        height: window.width * 0.5,

    },

    shotView: {
        width: window.width,
        height: window.width * 2 / 3,
        backgroundColor: 'rgba(0,0,0,0.05)',
    },
});