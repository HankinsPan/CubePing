import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import * as color from '../../utils/colors';
import VideoPlayer from 'react-native-video';

const styles = require('./styles');

class VideoPlayerV2 extends Component {

    constructor(props) {
        super(props);
        this._onLoad = this._onLoad.bind(this);
        this._onProgress = this._onProgress.bind(this);
        this.state = {
            paused: false,
            duration: 0.0,
            currentTime: 0.0,
        }
    }

    _onLoad(data) {
        console.log('VideoPlayerV2 data ->', data);

        this.setState({
            duration: data.duration
        });
    }

    _onProgress(data) {
        this.setState({
            currentTime: data.currentTime
        });
    }

    _setVideoRun = () => {
        console.log("_setVideoRun ")
        this.setState({
            paused: !this.state.paused,
        })
    };

    render() {
        console.log("VideoPlayerV2 props ->", this.props);
        console.log("VideoPlayerV2 state ->", this.state);


        return (
            <View style={styles.videoView}>
                <TouchableOpacity style={styles.videoWindow}
                                  onPress={() => this._setVideoRun()}>

                    <VideoPlayer
                        source={require('./broadchurch.mp4')}
                        style={styles.videoSize}
                        resizeMode={'contain'}
                        paused={this.state.paused}
                        onLoad={this._onLoad}
                        onProgress={this._onProgress}
                        repeat={true}
                    />


                </TouchableOpacity>

            </View>
        )
    }
}

export default VideoPlayerV2