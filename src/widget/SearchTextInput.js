import React, { Component } from "react";
import PropTypes from "prop-types";
import {
    View,
    TextInput,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Keyboard,
    Platform
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

const deviceW = Dimensions.get("window").width;

class SearchTextInput extends Component {

    static propsTypes = {
        defaultTips: PropTypes.string,
        defaultTipsColor: PropTypes.string,
        keyBoardType: PropTypes.string,
        inputValue: PropTypes.string,
        inputType: PropTypes.string,
        inputIsSecure: PropTypes.bool,
        maxLineNum: PropTypes.number,
        borderStyle: PropTypes.object,
        multiLine: PropTypes.bool,
        isCleanTxt: PropTypes.bool,
        isSearchIcon: PropTypes.bool,
        isFocusInput: PropTypes.bool,
        onCleanInput: PropTypes.func,
        onChangeTxt: PropTypes.func,
        // onBlurLost: PropTypes.func,
        onSearchType: PropTypes.func,
        disMissKeyBoard: PropTypes.func
    };

    static defaultProps = {
        defaultTips: "搜索内容...",
        defaultTipsColor: "#999",
        keyBoardType: "default",
        inputValue: "",
        inputType: "分类",
        inputIsSecure: false,
        maxLineNum: 25,
        multiLine: false,
        isCleanTxt: false,
        isSearchIcon: false,
        isFocusInput: false,
        onCleanInput: () => {
        },
        onChangeTxt: () => {
        },
        // onBlurLost: () => {
        // },
        onSearchType: () => {
        },
        disMissKeyBoard: () => {
            Keyboard.dismiss();
        }
    };

    state = {
        width: deviceW - 20,
        height: deviceW * 0.1
    };

    _onBlurLost = (text) => {
        const sTips = text.nativeEvent.text;
        // console.log("_onBlurLost sTips ->", sTips);
        this.props.setKey(sTips);
    };


    render() {
        console.log("SearchTextInput props ->", this.props);

        return (
          <View style={styles.container}>
              {
                  this.props.isSearchIcon
                    ?
                    <TouchableOpacity style={styles.iconView}
                                      onPress={() => this.props.onSearchType()}>
                        <Icon
                          name={"ios-search"}
                          size={18}
                          color={"#999"}
                        />

                        <Text style={{
                            fontSize: deviceW === 320 ? 12 : 14,
                            marginLeft: 2.5,
                            marginRight: 2.5,
                            color: this.props.defaultTipsColor
                        }}>
                            {this.props.inputType}
                        </Text>

                        <Icon
                          name={"md-arrow-dropdown"}
                          size={15}
                          color={"#999"}
                        />
                    </TouchableOpacity>
                    : null
              }

              <TextInput
                ref={"searchInputRef"}
                style={{
                    width: this.state.width,
                    height: this.state.height,
                    padding: 5,
                    paddingLeft: this.props.isSearchIcon ? (deviceW * 0.18) : 5,
                    paddingRight: this.props.isCleanTxt ? 20 : 5,
                    marginBottom: 5,
                    fontSize: deviceW === 320 ? 12 : 14,

                    backgroundColor: "rgba(0,0,0,0.05)"
                }}
                placeholder={this.props.defaultTips}
                placeholderTextColor={this.props.defaultTipsColor}
                keyboardType={this.props.keyBoardType}
                secureTextEntry={this.props.inputIsSecure}
                multiline={this.props.multiLine}
                returnKeyType="search"
                autoCapitalize='none'
                clearTextOnFocus={this.state.isFocusInput}
                autoFocus
                underlineColorAndroid="transparent"
                value={this.props.inputValue}
                onChangeText={(text) => this.props.onChangeTxt(text)}
                onBlur={(text) => this._onBlurLost(text)}
              />

              {
                  this.props.isCleanTxt && this.props.inputValue !== ""
                    ?
                    <TouchableOpacity style={styles.cleanView}
                                      onPress={() => {
                                          this.props.onCleanInput();
                                          this.refs.searchInputRef.clear();
                                      }}>
                        <Icon
                          name={"ios-close-circle-outline"}
                          size={18}
                          color={"#999"}
                        />
                    </TouchableOpacity>
                    : null
              }

          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10

    },

    iconView: {
        position: "absolute",
        width: deviceW * 0.18,
        height: deviceW * 0.1,
        paddingLeft: 5,
        paddingRight: 5,
        flexDirection: "row",

        zIndex: 1,
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent"
    },

    cleanView: {
        position: "absolute",
        width: 25,
        paddingRight: 5,
        marginLeft: deviceW - 45,
        height: deviceW * 0.1,
        zIndex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent"
    }


});

export default SearchTextInput;