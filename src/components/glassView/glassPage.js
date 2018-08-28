import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Slider,
    Dimensions,
    Platform,
    findNodeHandle,
    StyleSheet
} from "react-native";

import { BlurView } from "react-native-blur";

const window = Dimensions.get("window");

class GlassPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewRef: null,
            blurValue: 0
        };
    }

    imageLoaded() {
        this.setState({
            viewRef: findNodeHandle(this.backgroundImage)
        });
    }

    _sliderValue = (value) => {
        // console.log("_sliderValue value ->", (value * 100).toFixed(2));

        this.setState({
            blurValue: Math.floor(value * 100),
            blurNum: Math.floor(value * 25)
        });
    };

    render() {
        console.log("GlassPage props ->", this.props);
        console.log("GlassPage state ->", this.state);


        return (
          <View style={styles.container}>
              <Image
                ref={(img) => {
                    this.backgroundImage = img;
                }}
                source={require("../../images/pic/pic_five.jpeg")}
                style={{ width: window.width }}
                resizeMode={"contain"}
                onLoadEnd={this.imageLoaded.bind(this)}
              />

              {
                  this.state.viewRef == null
                    ?
                    null
                    :
                    <BlurView
                      style={styles.absolute}
                      viewRef={this.state.viewRef}
                      blurType='light'
                      blurAmount={this.state.blurValue}
                      blurRadius={20}
                    />
              }

              <Text>{`blur value is ${this.state.blurValue}`}</Text>

              <Slider
                style={{ width: window.width * 0.9 }}
                minimumTrackTintColor={"rgba(0,0,0,0.05)"}
                maximumTrackTintColor={"rgba(0,0,0,0.15)"}
                onSlidingComplete={(value) => this._sliderValue(value)}
                // onValueChange={(value) => this._sliderValue(value)}
              />

          </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFF"
    },

    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    }
});

export default GlassPage;