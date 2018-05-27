import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    BackHandler,
    Platform,
} from 'react-native';

const styles = require('./styles');

class DomPage extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount() {
        if (Platform.OS === 'android') {
            BackHandler.addEventListener("back", this.onBackClicked);
        } else {

        }
    }

    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackHandler.removeEventListener("back", this.onBackClicked);
        } else {

        }
    }

    onBackClicked = () => {
        console.log("onBackClicked ")
    };

    _androidBack = () => {
        console.log("_androidBack ");

    };

    render() {


        return (
            <View style={styles.container}>


                <TouchableOpacity style={styles.touchBack}
                                  onPress={() => this._androidBack()}>
                    <Text style={styles.touchTxt}>
                        Android back
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default DomPage