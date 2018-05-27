import React, { Component } from "react";
import {
    View,
    Text,
    BackHandler,
    Platform
} from "react-native";

import * as color from "../../utils/colors";

const styles = require("./styles");

class CallBackPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            retMsg: "back succ"
        };
    }

    componentWillUnmount() {
        this.props.navigation.state.params.retBack(this.state.retMsg);
        console.log("componentWillUnmount ");
    }

    // _onAndroidBack = () => {
    //     console.log("_onAndroidBack ");
    // };

    render() {
        console.log("CallBackPage props -=->", this.props);
        const { alertTxt } = this.props.navigation.state.params;

        return (
          <View style={styles.container}>
              <Text style={styles.txtInfo}>
                  {alertTxt || "CallBackPage"}
              </Text>

          </View>
        );
    }
}

export default CallBackPage;