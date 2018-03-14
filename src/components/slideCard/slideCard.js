import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StatusBar,

} from 'react-native';

import * as constants from '../../utils/constants';
import Carousel from 'react-native-snap-carousel'
import {sliderWidth, itemWidth} from './styles';


const styles = require('./styles');
const SLIDER_1_FIRST_ITEM = 1;

class SlideCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM
        }
    }

    _renderItem({item, index}) {
        console.log("_renderItem item ->", item);

        return (
            <View style={styles.slideCardView}>
                <Text style={styles.title}>
                    {item.title}
                </Text>
            </View>
        );
    }


    render() {
        console.log("SlideCard props ->", this.props);


        return (
            <View style={styles.container}>
                <Carousel
                    data={constants.slideArray}
                    renderItem={this._renderItem}
                    sliderWidth={360}
                    itemWidth={120}
                />

            </View>
        )
    }
}

export default SlideCard