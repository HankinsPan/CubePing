import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback,
    StatusBar,
    StyleSheet,
    Dimensions,
    Platform,
} from 'react-native';

import * as color from '../../utils/colors';
import ImageCarousel from 'react-native-image-carousel';

const styles = require('./styles');
const images = [
    'https://i.imgur.com/UYiroysl.jpg',
    'https://i.imgur.com/UPrs1EWl.jpg',
    'https://i.imgur.com/MABUbpDl.jpg',
    'https://i.imgur.com/KZsmUi2l.jpg',
    'https://i.imgur.com/2nCt3Sbl.jpg',
];

class ImageCarouselPage extends Component {
    imageCarousel: React$Element<*>;

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount() {
        StatusBar.setBarStyle('dark-content');
    }

    captureImageCarousel = (imageCarousel: React$Element<*>) => {
        this.imageCarousel = imageCarousel;
    };


    // handleHeaderPress = () => (this.imageCarousel: $FlowFixMe).close();
    //
    // renderHeader = (): React$Element<*> => (
    //     <TouchableWithoutFeedback onPress={this.handleHeaderPress}>
    //         <View>
    //             <Text style={styles.closeText}>Exit</Text>
    //         </View>
    //     </TouchableWithoutFeedback>
    // );
    //
    // renderFooter = (): React$Element<*> => (
    //     <Text style={styles.footerText}>Footer!</Text>
    // );

    renderImage = (idx: number) => (
        <Image
            style={StyleSheet.absoluteFill}
            resizeMode="contain"
            source={{uri: images[idx]}}
        />
    );


    render() {
        console.log("ImageCarouselPage props ->", this.props);


        return (
            <View style={styles.container}>
                <ImageCarousel
                    ref={this.captureImageCarousel}
                    renderContent={this.renderImage}
                    style={styles.imgCarouselView}
                >
                    {images.map(url => (
                        <Image
                            style={styles.image}
                            key={url}
                            source={{uri: url, width: 200}}
                            resizeMode="contain"
                        />
                    ))}
                </ImageCarousel>
            </View>
        )
    }
}

export default ImageCarouselPage