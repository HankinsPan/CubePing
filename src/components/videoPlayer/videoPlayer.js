import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    AlertIOS,
    TouchableOpacity,
    Platform,
    Dimensions,
} from 'react-native';


import Video from 'react-native-video';

const styles = require('./styles');

class VideoPlayer extends Component {
    constructor(props) {
        super(props);
        this.onLoad = this.onLoad.bind(this);
        this.onProgress = this.onProgress.bind(this);
        this.onBuffer = this.onBuffer.bind(this);

        this.state = {
            rate: 1,
            volume: 1,
            muted: false,
            resizeMode: 'contain',
            duration: 0.0,
            currentTime: 0.0,
            controls: false,
            paused: true,
            skin: 'custom',
            ignoreSilentSwitch: null,
            isBuffering: false,
        }
    }

    onLoad(data) {
        console.log('On load fired!');
        this.setState({duration: data.duration});
    }

    onProgress(data) {
        this.setState({currentTime: data.currentTime});
    }

    onBuffer({isBuffering}: { isBuffering: boolean }) {
        this.setState({isBuffering});
    }

    getCurrentTimePercentage() {
        if (this.state.currentTime > 0) {
            return parseFloat(this.state.currentTime) / parseFloat(this.state.duration);
        } else {
            return 0;
        }
    }

    renderSkinControl(skin) {
        const isSelected = this.state.skin == skin;
        const selectControls = skin == 'native' || skin == 'embed';
        return (
            <TouchableOpacity onPress={() => {
                this.setState({
                    controls: selectControls,
                    skin: skin
                })
            }}>
                <Text style={[styles.controlOption, {fontWeight: isSelected ? "bold" : "normal"}]}>
                    {skin}
                </Text>
            </TouchableOpacity>
        );
    }

    renderResizeModeControl(resizeMode) {
        const isSelected = (this.state.resizeMode == resizeMode);

        return (
            <TouchableOpacity onPress={() => {
                this.setState({resizeMode: resizeMode})
            }}>
                <Text style={[styles.controlOption, {fontWeight: isSelected ? "bold" : "normal"}]}>
                    {resizeMode}
                </Text>
            </TouchableOpacity>
        )
    }

    renderIgnoreSilentSwitchControl(ignoreSilentSwitch) {
        const isSelected = (this.state.ignoreSilentSwitch == ignoreSilentSwitch);

        return (
            <TouchableOpacity onPress={() => {
                this.setState({ignoreSilentSwitch: ignoreSilentSwitch})
            }}>
                <Text style={[styles.controlOption, {fontWeight: isSelected ? "bold" : "normal"}]}>
                    {ignoreSilentSwitch}
                </Text>
            </TouchableOpacity>
        )
    }


    renderVolumeControl(volume) {
        const isSelected = (this.state.volume == volume);

        return (
            <TouchableOpacity onPress={() => {
                this.setState({volume: volume})
            }}>
                <Text style={[styles.controlOption, {fontWeight: isSelected ? "bold" : "normal"}]}>
                    {volume * 100}%
                </Text>
            </TouchableOpacity>
        )
    }


    renderRateControl(rate) {
        const isSelected = (this.state.rate == rate);

        return (
            <TouchableOpacity onPress={() => {
                this.setState({rate: rate})
            }}>
                <Text style={[styles.controlOption, {fontWeight: isSelected ? "bold" : "normal"}]}>
                    {rate}x
                </Text>
            </TouchableOpacity>
        )
    }


    renderCustomSkin() {
        const flexCompleted = this.getCurrentTimePercentage() * 100;
        const flexRemaining = (1 - this.getCurrentTimePercentage()) * 100;

        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.fullScreen}
                                  onPress={() => {
                                      this.setState({paused: !this.state.paused})
                                  }}>
                    <Video
                        source={require('./broadchurch.mp4')}
                        style={styles.fullScreen}
                        rate={this.state.rate}
                        paused={this.state.paused}
                        volume={this.state.volume}
                        muted={this.state.muted}
                        ignoreSilentSwitch={this.state.ignoreSilentSwitch}
                        resizeMode={this.state.resizeMode}
                        onLoad={this.onLoad}
                        onBuffer={this.onBuffer}
                        onProgress={this.onProgress}
                        onEnd={() => {
                            AlertIOS.alert('Done!')
                        }}
                        repeat={true}
                    />
                </TouchableOpacity>

                <View style={styles.controls}>
                    <View style={styles.generalControls}>
                        <View style={styles.skinControl}>
                            {this.renderSkinControl('custom')}
                            {this.renderSkinControl('native')}
                            {this.renderSkinControl('embed')}
                        </View>
                    </View>
                    <View style={styles.generalControls}>
                        <View style={styles.rateControl}>
                            {this.renderRateControl(0.5)}
                            {this.renderRateControl(1.0)}
                            {this.renderRateControl(2.0)}
                        </View>

                        <View style={styles.volumeControl}>
                            {this.renderVolumeControl(0.5)}
                            {this.renderVolumeControl(1)}
                            {this.renderVolumeControl(1.5)}
                        </View>

                        <View style={styles.resizeModeControl}>
                            {this.renderResizeModeControl('cover')}
                            {this.renderResizeModeControl('contain')}
                            {this.renderResizeModeControl('stretch')}
                        </View>
                    </View>
                    <View style={styles.generalControls}>
                        {
                            (Platform.OS === 'ios') ?
                                <View style={styles.ignoreSilentSwitchControl}>
                                    {this.renderIgnoreSilentSwitchControl('ignore')}
                                    {this.renderIgnoreSilentSwitchControl('obey')}
                                </View> : null
                        }
                    </View>

                    <View style={styles.trackingControls}>
                        <View style={styles.progress}>
                            <View style={[styles.innerProgressCompleted, {flex: flexCompleted}]}/>
                            <View style={[styles.innerProgressRemaining, {flex: flexRemaining}]}/>
                        </View>
                    </View>
                </View>
            </View>
        );
    }

    renderNativeSkin() {
        const videoStyle = this.state.skin == 'embed' ? styles.nativeVideoControls : styles.fullScreen;
        return (
            <View style={styles.container}>
                <View style={styles.fullScreen}>
                    <Video
                        source={require('./broadchurch.mp4')}
                        style={videoStyle}
                        rate={this.state.rate}
                        paused={this.state.paused}
                        volume={this.state.volume}
                        muted={this.state.muted}
                        ignoreSilentSwitch={this.state.ignoreSilentSwitch}
                        resizeMode={this.state.resizeMode}
                        onLoad={this.onLoad}
                        onBuffer={this.onBuffer}
                        onProgress={this.onProgress}
                        onEnd={() => {
                            AlertIOS.alert('Done!')
                        }}
                        repeat={true}
                        controls={this.state.controls}
                    />
                </View>
                <View style={styles.controls}>
                    <View style={styles.generalControls}>
                        <View style={styles.skinControl}>
                            {this.renderSkinControl('custom')}
                            {this.renderSkinControl('native')}
                            {this.renderSkinControl('embed')}
                        </View>
                    </View>
                    <View style={styles.generalControls}>
                        <View style={styles.rateControl}>
                            {this.renderRateControl(0.5)}
                            {this.renderRateControl(1.0)}
                            {this.renderRateControl(2.0)}
                        </View>

                        <View style={styles.volumeControl}>
                            {this.renderVolumeControl(0.5)}
                            {this.renderVolumeControl(1)}
                            {this.renderVolumeControl(1.5)}
                        </View>

                        <View style={styles.resizeModeControl}>
                            {this.renderResizeModeControl('cover')}
                            {this.renderResizeModeControl('contain')}
                            {this.renderResizeModeControl('stretch')}
                        </View>
                    </View>
                    <View style={styles.generalControls}>
                        {
                            (Platform.OS === 'ios') ?
                                <View style={styles.ignoreSilentSwitchControl}>
                                    {this.renderIgnoreSilentSwitchControl('ignore')}
                                    {this.renderIgnoreSilentSwitchControl('obey')}
                                </View> : null
                        }
                    </View>
                </View>

            </View>
        );
    }


    render() {
        console.log("VideoPlayer props ->", this.props);

        return this.state.controls ? this.renderNativeSkin() : this.renderCustomSkin();
    }
}

export default VideoPlayer