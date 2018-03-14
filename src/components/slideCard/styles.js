import {StyleSheet, Platform, Dimensions} from 'react-native';

import * as color from '../../utils/colors';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

function wp(percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FFF',
        paddingVertical: 30,

    },

    slideCardView: {
        width: 120,
        height: 120,
        paddingBottom: 18,
        backgroundColor: 'rgba(0,0,0,0.05)',

    },

    slider: {
        marginTop: 15,
        overflow: 'visible' // for custom animations
    },

    sliderContentContainer: {
        paddingVertical: 10 // for custom animation
    },

    title: {
        fontSize: 16,
        color: '#FFF',
    },
});