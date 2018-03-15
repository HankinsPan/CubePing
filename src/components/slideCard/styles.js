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

    },

    headSlideCard: {
        width: viewportWidth,
        height: viewportWidth * 0.75,
        flexDirection: 'column',
        backgroundColor: 'rgba(0,0,0,0.05)'
    },

    slideCardView: {
        width: viewportWidth * 0.8,
        height: 210,
        paddingBottom: 18,
        marginTop: 35,

    },

    slideCardBgView: {
        width: viewportWidth * 0.8,
        height: 210,
        borderRadius: 12,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },

    cardTipsView: {
        width: viewportWidth * 0.8,
        height: 70,
        marginTop: 125,
        backgroundColor: '#FFF',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        position: 'absolute',
        padding: 10,
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

    slideTxt: {
        fontSize: 16,
        color: color.TEXT_INFO_COLOR,
    },
});