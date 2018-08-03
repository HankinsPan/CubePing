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
            // 0.触摸开始


            // 1.是否相应触摸
            onStartShouldSetPanResponder: (evt, gestureState) => {
                return true;
            },

            // 2. 是否相应触摸移动
            onMoveShouldSetPanResponder: (evt, gestureState) => {
                return true;
            },

            // 1.1 触摸开始的相应
            onPanResponderGrant: (evt, gestureState) => {
                this._highlight();
            },

            // 2.1 触摸移动中
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

            // 3. 触摸结束
            onPanResponderRelease: (evt, gestureState) => {
                this._unhighlight();
                this.lastX = this.state.marginLeft;
                this.lastY = this.state.marginTop;
            },

            // 2.2 触摸被其他响应者打断
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

