import React, {Component} from 'react';
import {
    View,
    Text,
    Slider,
    Dimensions,
    Platform,
} from 'react-native';

import * as color from '../../utils/colors';
import FadeAnimPage from './fadeAnim';

const styles = require('./styles');
const window = Dimensions.get('window');

class AnimViewPage extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        console.log("AnimViewPage props ->", this.props);

        return (
            <View style={styles.container}>

                <FadeAnimPage style={{
                    width: window.width * 0.4,
                    height: window.width * 0.1,
                    backgroundColor: color.STATE_TIPS,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Text style={{fontSize: 18, color: '#FFF'}}>
                        hello
                    </Text>
                </FadeAnimPage>


                <Slider
                    style={{width: window.width * 0.9}}
                    minimumTrackTintColor="red"
                    maximumTrackTintColor="blue"
                />


            </View>
        )
    }
}

export default AnimViewPage