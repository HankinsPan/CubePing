import React, { Component } from "react";
import {
    View,
    Text,
    TextInput
} from "react-native";

import * as color from "../../utils/colors";

const styles = require("./styles");

class TextInputBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            aValue: "",
            bValue: "",
            sKey: ""
        };
    }

    getAInputText = (text) => {
        this.setState({
            aValue: text
        });
    };

    getBInputText = (text) => {
        this.setState({
            bValue: text
        });
    };


    render() {
        console.log("TextInputBar props -=-->", this.props);
        const { aValue, bValue } = this.state;
        let oLen = aValue.length + bValue.length;

        return (
          <View style={styles.container}>

              <View style={styles.headBarView}>
                  <TextInput
                    style={styles.txtInputView}
                    placeholder={"A值"}
                    placeholderTextColor={color.TEXT_INFO_COLOR}
                    keyboardType="default"
                    returnKeyType="search"
                    autoCapitalize='none'
                    autoFocus
                    underlineColorAndroid="transparent"
                    value={aValue}
                    onChangeText={(text) => this.getAInputText(text)}
                  />

                  <TextInput
                    style={styles.txtInputView}
                    placeholder={"B值"}
                    placeholderTextColor={color.TEXT_INFO_COLOR}
                    keyboardType="default"
                    returnKeyType="search"
                    autoCapitalize='none'
                    autoFocus
                    underlineColorAndroid="transparent"
                    value={bValue}
                    onChangeText={(text) => this.getBInputText(text)}
                  />
              </View>

              <View style={styles.bodyBarView}>

                  <View style={styles.headItemView}>

                      <View style={oLen === 0
                        ? {
                            flex: 1,
                            backgroundColor: color.LINE_NOMAL_COLOR
                        } : {
                            flex: aValue.length / oLen,
                            backgroundColor: color.LINE_NOMAL_COLOR
                        }
                      }>
                          <Text style={styles.txtContent}>
                              {aValue}
                          </Text>
                      </View>

                      <View style={oLen === 0
                        ? {
                            flex: 1,
                            backgroundColor: color.LINE_COLOR,
                            alignItems: "flex-end"
                        } : {
                            flex: bValue.length / oLen,
                            backgroundColor: color.LINE_COLOR,
                            alignItems: "flex-end"
                        }}>
                          <Text style={styles.txtContent}>
                              {bValue}
                          </Text>
                      </View>

                  </View>

              </View>


          </View>
        );
    }
}

export default TextInputBar;