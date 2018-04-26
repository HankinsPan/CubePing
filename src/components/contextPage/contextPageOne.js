import React, {Component, createContext} from 'react';
import {
    View,
    Text,

} from 'react-native';


const styles = require('./styles');

class ContextPageOne extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount() {
        console.log("get Context -=-=--->", createContext);
    }


    render() {
        console.log("ContextPageOne props ->", this.props);

        return (
            <View style={styles.container}>

            </View>
        )
    }
}

export default ContextPageOne