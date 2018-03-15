import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StatusBar,
    ScrollView,
    Dimensions,
    TouchableOpacity
} from 'react-native';

import * as constants from '../../utils/constants';
import Carousel from 'react-native-snap-carousel'
import {sliderWidth, itemWidth} from './styles';


const styles = require('./styles');
const SLIDER_1_FIRST_ITEM = 1;

const window = Dimensions.get('window');

class SlideCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM
        }
    }

    _slideClick = (item) => {
        alert(item.subtitle);
    };

    _renderItem = (item) => {
        console.log("_renderItem item ->", item);

        return (
            <TouchableOpacity style={styles.slideCardView}
                              activeOpacity={0.8}
                              onPress={() => this._slideClick(item)}>
                <Image
                    style={styles.slideCardBgView}
                    source={{uri: item.illustration}}
                />

                <View style={styles.cardTipsView}>
                    <Text style={styles.slideTxt}>
                        {item.title}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    };


    render() {
        console.log("SlideCard props ->", this.props);


        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.headSlideCard}>

                        <Carousel
                            data={constants.slideArray}
                            renderItem={({item}) => this._renderItem(item)}
                            sliderWidth={window.width}
                            itemWidth={window.width * 0.8}
                        />

                    </View>


                </ScrollView>
            </View>
        )
    }
}

export default SlideCard

// <Text style={styles.title}>
//{item.title}
//</Text>