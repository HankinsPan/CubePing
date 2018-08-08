import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    Keyboard
} from "react-native";

const deviceW = Dimensions.get("window").width;


class NoSearchDataPage extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        console.log("NoSearchDataPage props ->", this.props);

        return (
          <TouchableOpacity style={styles.container}
                            activeOpacity={0.95}
                            onPress={() => {Keyboard.dismiss()}}>
              <Image
                style={styles.tipImgView}
                source={require("../../images/icons/null.png")}
              />

              <TouchableOpacity style={styles.reloadBtnView}
                                onPress={this.props.onPress}>
                  <Text style={styles.reLoadTxt}>
                      重新加载
                  </Text>
              </TouchableOpacity>

          </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },

    tipImgView: {
        width: deviceW * 0.2,
        height: deviceW * 0.2,
        tintColor: "rgba(0,0,0,0.05)",
        marginTop: deviceW * 0.65
    },

    reloadBtnView: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,

        marginTop: 10,
        alignItems: "center",
        justifyContent: "center",

        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: "#CCC"
    },


    reLoadTxt: {
        fontSize: deviceW === 320 ? 12 : 14,
        color: "#999"
    }
});

export default NoSearchDataPage;