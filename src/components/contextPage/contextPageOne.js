import React, {Component} from 'react';
import {
    CameraRoll,
    Text,
    View,
    Image,
    Alert,
    TouchableOpacity,
    Dimensions,
    ScrollView,
} from 'react-native';

import Spinner from 'react-native-gifted-spinner';
import ImageResizer from 'react-native-image-resizer';

const styles = require('./styles');
const window = Dimensions.get('window');

const images = [
    'https://i.imgur.com/UYiroysl.jpg',
    'https://i.imgur.com/UPrs1EWl.jpg',
    'https://i.imgur.com/MABUbpDl.jpg',
    'https://i.imgur.com/KZsmUi2l.jpg',
    'https://i.imgur.com/2nCt3Sbl.jpg',
];

class ContextPageOne extends Component {

    constructor(props) {
        super(props);
        this.state = {
            resizedImageUri: '',
            loading: true,
        }
    }

    componentDidMount() {
        CameraRoll.getPhotos({first: 1})
            .then((photos) => {
                if (!photos.edges || photos.edges.length === 0) {
                    return Alert.alert('Unable to load camera roll',
                        'Check that you authorized the access to the camera roll photos and that there is at least one photo in it');
                }

                this.setState({
                    image: photos.edges[0].node.image,
                })
            }).catch(() => {
            return Alert.alert('Unable to load camera roll',
                'Check that you authorized the access to the camera roll photos');
        });
    }

    resize() {
        ImageResizer.createResizedImage(
            this.state.image.uri,
            window.width,
            window.height,
            'JPEG',
            100).then(({uri}) => {
            this.setState({
                resizedImageUri: uri,
            });
        }).catch((err) => {
            console.log(err);
            return Alert.alert('Unable to resize the photo',
                'Check the console for full the error message');
        });
    }

    render() {
        console.log("ContextPageOne props ->", this.props);
        console.log("ContextPageOne state ->", this.state);


        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.welcome}>
                        Image Resizer example
                    </Text>
                    <Text style={styles.instructions}>
                        This is the original image:
                    </Text>
                    {
                        this.state.image ?
                            <Image style={styles.image} source={{uri: this.state.image.uri}}/> :
                            <Spinner/>
                    }
                    <Text style={styles.instructions}>
                        Resized image:
                    </Text>
                    <TouchableOpacity onPress={() => this.resize()}>
                        <Text style={styles.resizeButton}>
                            Click me to resize the image
                        </Text>
                    </TouchableOpacity>
                    {
                        this.state.resizedImageUri ?
                            <Image style={{width: window.width, height: window.height,}}
                                   source={{uri: this.state.resizedImageUri}}/> : null
                    }

                </ScrollView>
            </View>
        );
    }
}

export default ContextPageOne