import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    ART,
    Alert,
    TouchableOpacity,
    TouchableWithoutFeedback,

} from 'react-native'

import * as color from '../../utils/colors'
import Canvas from 'react-native-canvas';
import ViewShot from "react-native-view-shot";

const styles = require('./styles');

class SignPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comImgUri: '',
        }
    }

    // componentDidMount() {
    // this.refs.viewShot.capture().then(uri => {
    //     console.log("do something with ", uri);
    //     this.setState({
    //         comImgUri: uri,
    //     })
    //
    // });

    // console.log("**** canvas ->", canvas.getContext('2d'));
    // }


    // handleCanvas = (canvas) => {
    //     const ctx = canvas.getContext('2d');
    //     ctx.fillStyle = 'purple';
    //     ctx.fillRect(0, 0, 100, 100);
    // };

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    _getView2Img = () => {
        console.log("_getView2Img ")
        this.refs.viewShot
            .capture()
            .then(uri => {
                console.log("make shotView uri -> ", uri);
                this.setState({
                    comImgUri: uri,
                })
            });

        this.timer = setTimeout(() => {
            Alert.alert(
                'Long Press Alert',
                'you can choose shotView to save your album',
                [
                    {text: 'Save', onPress: () => this._turnToAlbum()},
                    {text: 'cancel'}
                ],
                {cancelable: false}
            );
        }, 500);

    };

    _turnToAlbum = () =>{
        console.log("_turnToAlbum ")
    };


    render() {
        console.log('SignPage props ->', this.props);


        return (
            <TouchableWithoutFeedback onLongPress={() => this._getView2Img()}>
                <View style={styles.container}>
                    <ViewShot
                        ref="viewShot"
                        options={{format: "jpg", quality: 0.9}}>

                        <View style={{width: 120, height: 45, backgroundColor: color.STATE_HEALTH}}/>


                    </ViewShot>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

export default SignPage


// <ViewShot
// ref="viewShot"
// options={{format: "jpg", quality: 0.9}}
// style={styles.container}>

// < /ViewShot>