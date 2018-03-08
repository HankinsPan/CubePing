import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';

const styles = require('./styles');
import Draggable from 'react-native-draggable';

class DragPage extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <View style={styles.container}>
                <Draggable
                    renderSize={56}
                    renderColor='black'
                    offsetX={-100}
                    offsetY={-200}
                    renderText='A'
                    pressDrag={() => alert('touched!!')}
                />
                <Draggable
                    reverse={false}
                    renderColor='red'
                    renderShape='square'
                    offsetX={0}
                    offsetY={0}
                    renderText='B'
                />
            </View>
        )
    }
}

export default DragPage