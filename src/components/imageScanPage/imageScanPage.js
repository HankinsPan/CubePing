import React, { Component } from "react";
import {
    View,
    Text,
    Animated,
    PanResponder,
    TouchableOpacity
} from "react-native";

import * as color from "../../utils/colors";

const CIRCLE_SIZE = 80;

const styles = require("./styles");


class ImageScanPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cubColor: "rgba(0,0,0,0.05)",
            marginTop: 100,
            marginLeft: 100
        };

        this.lastX = this.state.marginLeft;
        this.lastY = this.state.marginTop;
    }

    componentWillMount() {
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => {
                return true;
            },

            onMoveShouldSetPanResponder: (evt, gestureState) => {
                return true;
            },

            onPanResponderGrant: (evt, gestureState) => {
                this._highlight();
            },

            onPanResponderMove: (evt, gestureState) => {
                // console.log(`locationX:${evt.nativeEvent.pageX} `);
                // console.log(`locationY:${evt.nativeEvent.pageY} `);

                // console.log(`locationX:${gestureState.moveX} `);
                // console.log(`locationY:${gestureState.moveY} `);

                console.log(`gestureState.dx:${gestureState.dx} `);
                console.log(`gestureState.dy:${gestureState.dy} `);

                this.setState({
                    marginTop: this.lastY + gestureState.dy,
                    marginLeft: this.lastX + gestureState.dx
                });
            },

            onPanResponderRelease: (evt, gestureState) => {
                this._unhighlight();
                this.lastX = this.state.marginLeft;
                this.lastY = this.state.marginTop;
            },

            onPanResponderTerminate: (evt, gestureState) => {

            }
        });
    }

    _highlight = () => {
        this.setState({
            cubColor: "rgba(0,0,0,0.5)"
        });
    };

    _unhighlight = () => {
        this.setState({
            cubColor: "rgba(0,0,0,0.05)"
        });
    };


    render() {
        console.log("ImageScanPage props ->", this.props);

        return (
          <View style={styles.container}>
              <View style={{ height: 200, width: 200, backgroundColor: color.STATE_TIPS }}>
                  <View style={[styles.cubeView,
                      {
                          backgroundColor: this.state.cubColor,
                          marginTop: this.state.marginTop,
                          marginLeft: this.state.marginLeft
                      }]}
                        {...this._panResponder.panHandlers}>

                  </View>

              </View>
          </View>
        );
    }
}

export default ImageScanPage;

