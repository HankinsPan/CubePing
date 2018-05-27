import React, { Component } from "react";
import {
    View,
    Text,
    Alert,
    TouchableOpacity
} from "react-native";
import * as colors from "../../utils/colors";
import * as startAction from "../../actions/startAction";
import { connect } from "react-redux";

const styles = require("./styles");

@connect(({ start }) => ({ ...start }))
class StartPageV3 extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    _btnClick = () => {
        this.props.navigation.navigate("CallBackPage");
    };

    render() {
        console.log("StartPageV3 props -=->", this.props);

        return (
          <View style={styles.container}>
              <TouchableOpacity style={styles.clickBtnView}
                                onPress={() => this._btnClick()}>
                  <Text style={styles.btnTxt}>
                      BTN TO ANDROID
                  </Text>
              </TouchableOpacity>

          </View>
        );
    }
}

export default StartPageV3;