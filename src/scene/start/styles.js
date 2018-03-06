import {StyleSheet, Platform, Dimensions} from 'react-native';

const window = Dimensions.get('window');

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FDFDFD',
    },


});