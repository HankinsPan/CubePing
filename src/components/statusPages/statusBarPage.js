import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';

import * as color from '../../utils/colors'

const styles = require('./styles');

class StatusBarPage extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        console.log("StatusBarPage props ->", this.props);

        return (
            <View style={styles.container}>
                <Text>
                    hello
                </Text>
            </View>
        )
    }
}

export default StatusBarPage