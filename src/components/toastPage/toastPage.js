import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
} from 'react-native';

import Toast from 'react-native-root-toast';

const window = Dimensions.get('window');
const styles = require('./styles');

class ToastPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        }
    }

    _toastClick = () => {
        console.log("_toastClick ")
        this.setState({
            visible: true,
        });

        let timer = setTimeout(() => {
            clearTimeout(timer);
            this.setState({
                visible: false,
            })
        }, 1500)
    };

    render() {
        console.log("ToastPage props ->", this.props);

        return (
            <View style={styles.container}>


                <TouchableOpacity style={styles.toastClickView}
                                  onPress={() => this._toastClick()}>
                    <Text style={styles.toastTxt}>
                        TOAST
                    </Text>
                </TouchableOpacity>

                <Toast
                    visible={this.state.visible}
                    position={window.height * 0.7}
                    shadow={false}
                    animation={false}
                    hideOnPress={true}>
                    This is a message
                </Toast>
            </View>
        )
    }
}

export default ToastPage