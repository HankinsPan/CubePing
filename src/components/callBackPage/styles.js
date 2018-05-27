import {StyleSheet, Dimensions, Platform} from 'react-native'
import * as color from '../../utils/colors';

const window = Dimensions.get('window');

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    txtInfo: {
        fontSize: 18,
        color: color.TEXT_INFO_COLOR,
    },


});