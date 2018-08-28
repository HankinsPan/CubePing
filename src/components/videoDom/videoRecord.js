import React, { Component } from "react";
import {
    View,
    Text
} from "react-native";

const styles = require("./styles");

class VideoRecord extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        console.log("VideoRecord props ->", this.props);

        return (
          <View style={styles.container}>
              <Text>
                  hello VideoRecord
              </Text>
          </View>
        );
    }
}

export default VideoRecord;