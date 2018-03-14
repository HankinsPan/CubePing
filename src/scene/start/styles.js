import {
    StyleSheet,
    Platform,
    Dimensions
} from 'react-native';
import * as color from '../../utils/colors';

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

    startView: {
        width: window.width * 0.45,
        height: window.width * 0.125,
        borderWidth: 1,
        borderRadius: window.width * 0.07,
        borderColor: color.STATE_HEALTH,
        alignItems: 'center',
        justifyContent: 'center',
    },


    startTxt: {
        fontSize: 16,
        color: color.STATE_HEALTH,
    },

});