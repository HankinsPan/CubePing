import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    BackHandler,
    Platform,
    TouchableOpacity,
    ActivityIndicator
} from "react-native";

import * as colors from "../../utils/colors";
import * as startAction from "../../actions/startAction";
import { connect } from "react-redux";

const styles = require("./styles");

@connect(({ start }) => ({ ...start }))
class StartPageV2 extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }


    onBackClicked = () => {
        console.log("onBackClicked ");
        this.props.navigation.goBack();
    };

    _retBackAlert = (text) => {
        alert(text);
    };

    _btnClick = () => {
        console.log("StartPageV2  _btnClick");
        const props = {
            sName: "1900"
        };

        this.props.dispatch(startAction.getStartPage(props));
    };

    _btnClickV2 = () => {
        // this.props.navigation.navigate("VideoPage");
        this.props.navigation.navigate("LiveTabPage");
    };

    _btnClickV3 = () => {
        // this.props.navigation.navigate("ContextPage");
        // this.props.navigation.navigate("ImgScanPage");
        // this.props.navigation.navigate("ImgScanV2");
        this.props.navigation.navigate("ImgScanV3");
        // this.props.navigation.navigate("ImgTypeSet");
    };

    _btnClickV4 = () => {
        // this.props.navigation.navigate("CarouselPage");
        this.props.navigation.navigate("ScrollPageV2");
    };

    _btnClickV5 = () => {
        this.props.navigation.navigate("ImageGrid");
    };

    _btnClickV6 = () => {
        // this.props.navigation.navigate("AnimPage");
        this.props.navigation.navigate("TextInputBar");
    };

    _btnClickV7 = () => {
        this.props.navigation.navigate("ImageCarousel");
    };

    _btnClickV8 = () => {
        this.props.navigation.navigate("DomPage");
    };

    _btnClickV9 = () => {
        this.props.navigation.navigate("PdfPage");
    };

    _btnClickVA = (backProps) => {
        this.props.navigation.navigate("CallBackPage", backProps);
    };

    _btnClickVB = () => {
        this.props.navigation.navigate("ScrollPage");
    };

    render() {
        console.log("StartPageV2 props ->", this.props);
        const { loading } = this.props;
        const backProps = {
            alertTxt: "StartPageV2",
            retBack: this._retBackAlert
        };

        return (
          <View style={styles.container}>
              {
                  loading
                    ?
                    <ActivityIndicator
                      size='large'
                      color={colors.TEXT_INFO_COLOR}
                    />
                    :
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.clickBtnView}
                                          onPress={() => this._btnClick()}>
                            <Text style={styles.btnTxt}>
                                btn one
                            </Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.clickBtnViewV2}
                                          onPress={() => this._btnClickV2()}>
                            <Text style={styles.btnTxt}>
                                btn two
                            </Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.clickBtnViewV2}
                                          onPress={() => this._btnClickV3()}>
                            <Text style={styles.btnTxt}>
                                btn three
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.clickBtnViewV2}
                                          onPress={() => this._btnClickV4()}>
                            <Text style={styles.btnTxt}>
                                btn four
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.clickBtnViewV2}
                                          onPress={() => this._btnClickV5()}>
                            <Text style={styles.btnTxt}>
                                btn five
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.clickBtnViewV2}
                                          onPress={() => this._btnClickV6()}>
                            <Text style={styles.btnTxt}>
                                btn six
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.clickBtnViewV2}
                                          onPress={() => this._btnClickV7()}>
                            <Text style={styles.btnTxt}>
                                btn seven
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.clickBtnViewV2}
                                          onPress={() => this._btnClickV8()}>
                            <Text style={styles.btnTxt}>
                                btn eig
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.clickBtnViewV2}
                                          onPress={() => this._btnClickV9()}>
                            <Text style={styles.btnTxt}>
                                btn PDF
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.clickBtnViewV2}
                                          onPress={() => this._btnClickVA(backProps)}>
                            <Text style={styles.btnTxt}>
                                BTN TO ANDROID
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.clickBtnViewV2}
                                          onPress={() => this._btnClickVB()}>
                            <Text style={styles.btnTxt}>
                                BTN SCROLLVIEW
                            </Text>
                        </TouchableOpacity>
                    </View>
              }

          </View>
        );
    }
}

export default StartPageV2;
