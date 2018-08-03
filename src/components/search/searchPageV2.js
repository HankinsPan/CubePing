import React, { Component } from "react";
import {
    View,
    TextInput,
    TouchableOpacity
} from "react-native";

import * as color from "../../utils/colors";
import * as ScreenUtil from "../../utils/ScreenUtil";

import Icon from "react-native-vector-icons/Ionicons";
import pinyinlite from "pinyinlite/index_common";
import string_score from "string_score";
import _ from "lodash";

import { deviceW } from "../../utils/index";


const styles = require("./styles");

class SearchPageV2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchKey: ""
        };
    }


    getSearchInputText = (text) => {
        // console.log("getSearchInputText text ->", text);

        const keyPinYin = pinyinlite(text).map((item) => {
            return item[0];
        }).join('');
        console.log("key -=->", keyPinYin);

        this.setState({
            searchKey: text
        });
    };

    _onBlurLost = (text) => {
        // console.log("_onBlurLost text ->", text);
    };


    render() {
        // console.log("SearchPageV2 props ->", this.props);


        return (
          <View style={styles.container}>
              <View style={{
                  ...ScreenUtil.ifIphoneX({
                      width: deviceW,
                      height: deviceW * 0.12 + 40,
                      paddingTop: 40,
                      backgroundColor: "#FFF",
                      flexDirection: "row",
                      alignItems: "flex-end",
                      justifyContent: "center",
                      borderBottomWidth: 1,
                      borderBottomColor: "rgba(0,0,0,0.05)"
                  }, {
                      width: deviceW,
                      height: deviceW * 0.12,
                      backgroundColor: "#FFF",
                      flexDirection: "row",
                      alignItems: "flex-end",
                      justifyContent: "center",
                      borderBottomWidth: 1,
                      borderBottomColor: "rgba(0,0,0,0.05)"
                  })
              }}>

                  <View style={{
                      width: deviceW * 0.95,
                      height: deviceW * 0.1,
                      flexDirection: "row",
                      margin: 5,

                      paddingLeft: 5,
                      alignItems: "flex-end",

                      backgroundColor: "rgba(0,0,0,0.05)"
                      // borderRadius: deviceW * 0.08
                  }}>
                      <View style={styles.iconView}>
                          <Icon
                            name={"ios-search"}
                            size={23}
                            color={color.TEXT_INFO_COLOR}
                          />
                      </View>

                      <TextInput
                        ref={"searchTextInput"}
                        style={{
                            width: deviceW * 0.9,
                            height: deviceW * 0.1,
                            fontSize: deviceW === 320 ? 13 : 15,
                            paddingTop: 5,
                            paddingBottom: 5
                        }}
                        placeholder={"搜索职位"}
                        placeholderTextColor={color.TEXT_INFO_COLOR}
                        keyboardType="default"
                        clearButtonMode="while-editing"
                        returnKeyType="search"
                        autoCapitalize='none'
                        clearTextOnFocus={true}
                        autoFocus
                        underlineColorAndroid="transparent"
                        value={this.state.searchKey}
                        onChangeText={(text) => this.getSearchInputText(text)}
                        onEndEditing={(text) => this._onBlurLost(text)}
                      />
                  </View>

              </View>

          </View>
        );
    }
}

export default SearchPageV2;