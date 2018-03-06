import React, {Component} from 'react';
import {
    Text,
    View,
    Animated,
    Image,
    Easing,
    Dimensions,
    StyleSheet,
} from 'react-native';

import * as color from './src/utils/colors';

const window = Dimensions.get('window');
const sceneClub = 576;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clubArray: [],
        };
        // this.spinValue = new Animated.Value(0)
        this.animatedValue = new Animated.Value(0)
    }

    componentWillMount() {
        let mArray = [];
        for (let i = 0; i < sceneClub; i++) {
            const props = {
                i,
            };
            mArray.push(props);
        }
        this.setState({
            clubArray: mArray,
        })
    }

    componentDidMount () {
        // this.spin()
        this.animate()
    }

    // spin () {
    //     this.spinValue.setValue(0)
    //     Animated.timing(
    //         this.spinValue,
    //         {
    //             toValue: 1,
    //             duration: 4000,
    //             easing: Easing.linear
    //         }
    //     ).start(() => this.spin())
    // }

    animate () {
        this.animatedValue.setValue(0)
        Animated.timing(
            this.animatedValue,
            {
                toValue: 1,
                duration: 2000,
                easing: Easing.linear
            }
        ).start(() => this.animate())
    }

    render() {
        console.log("App props ->", this.props);
        console.log("App state ->", this.state);

        // const spin = this.spinValue.interpolate({
        //     inputRange: [0, 1],
        //     outputRange: ['0deg', '360deg']
        // });

        const opacity = this.animatedValue.interpolate({
            inputRange: [0.2, 0.5, 0.8],
            outputRange: [0.6, 0.9, 0.6]
        })

        

        return (
            <View style={styles.originView}>
                <View style={styles.container}>
                    {
                        this.state.clubArray.map((sMap, index) => {
                            return (
                                <View style={styles.clubBgView} key={index}>
                                </View>
                            )
                        })
                    }
                </View>


                <View style={styles.menuView}>
                    <View style={styles.headView}>
                        <Image
                            style={styles.logoView}
                            source={require('./src/images/iv_box_bg.png')}
                        />
                    </View>

                    <View style={styles.contentView}>
                        <Text style={styles.logoFont}>
                            - CUBE -
                        </Text>

                        <Animated.View style={{
                            width: window.width * 0.36,
                            height: window.width * 0.36,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: window.width * 0.2,
                            borderRadius: window.width * 0.18,
                            backgroundColor: color.STATE_TIPS,

                            shadowColor: color.STATE_TIPS,
                            shadowOffset: {h: 10, w: 0},
                            shadowRadius: 15,
                            shadowOpacity: 0.8,
                            elevation: 2,
                            opacity,
                        }}>
                            <Text style={styles.startTxt}>
                                START
                            </Text>
                        </Animated.View>
                    </View>

                </View>

            </View>
        )
    }
}

export default App

const styles = StyleSheet.create({
    originView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',

    },

    clubBgView: {
        width: window.width * 0.0555,
        height: window.height * 0.0313,
        backgroundColor: '#F2F2F2',

        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.05)',
        borderRightColor: 'rgba(0,0,0,0.05)',
    },

    menuView: {
        width: window.width,
        height: window.width * 1.2,
        flexDirection: 'column',
        position: 'absolute',
    },

    headView: {
        flex: 1,
        alignItems: 'center',
    },

    contentView: {
        flex: 3,
        flexDirection: 'column',
        alignItems: 'center',
    },

    logoView: {
        width: 95,
        height: 95,
    },

    logoFont: {
        fontSize: 25,
        color: color.TXT_SECONDARY_COLOR
    },

    startTxt: {
        fontSize: 20,
        color: '#FFF',
    },

});