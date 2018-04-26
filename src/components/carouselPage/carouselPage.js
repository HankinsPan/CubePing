import React, {Component} from 'react';
import {
    View,
    Text,
    Dimensions,
    Platform,

} from 'react-native';

import * as color from '../../utils/colors';

import CarouselCard from 'react-native-card-carousel'

const itemArr = ['hello', 'hankins', 'how', 'are', 'you'];
const styles = require('./styles');
const window = Dimensions.get('window');

class CarouselPage extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    _renderCardView = (item) => {
        // console.log("_renderCardView item ->", item);

        return (
            <View style={styles.cardView}>
                <Text>
                    {item}
                </Text>
            </View>
        )
    };

    _cardClick = (item) => {
        console.log("_cardClick item ->", item);
    };

    render() {
        console.log("CarouselPage props ->", this.props);

        return (
            <View style={styles.container}>

                <View style={{marginTop: 25,}}/>

                <CarouselCard
                    height={window.width * 0.45}
                    autoplay
                    interval={6000}
                    cRadius={15}
                    data={itemArr}
                    onPress={item => this._cardClick(item)}
                    contentRender={item => this._renderCardView(item)}
                />

            </View>
        )
    }
}

export default CarouselPage