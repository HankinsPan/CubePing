import React, {Component} from 'react';
import {
    Animated,
} from 'react-native';

class FadeAnim extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fadeValue: new Animated.Value(0),
        }
    };


    componentDidMount() {
        let timer = setTimeout(()=>{
            clearTimeout(timer);
            Animated.timing(
                this.state.fadeValue,
                {toValue: 1},
            ).start()

        },2000);
    };


    render() {


        return (
            <Animated.View style={{
                ...this.props.style,
                opacity: this.state.fadeValue
            }}>
                {this.props.children}
            </Animated.View>
        )
    }
}

export default FadeAnim