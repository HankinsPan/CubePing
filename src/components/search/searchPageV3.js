import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Keyboard
} from "react-native";
import * as ScreenUtil from "../../utils/ScreenUtil";
import { deviceW } from "../../utils";
import Modal from "react-native-modal";

import SearchTextInput from "../../widget/SearchTextInput";

const hotKey = ["5G", "物联网", "AI", "全面屏苹果", "三星", "华为", "小米", "达摩院", "ET大脑", "云小密", "无人驾驶", "无人机", "无人便利店"];
const typeList = ["科技", "金融", "教育", "医疗", "环境"];
const styles = require("./styles");

class SearchPageV3 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            getValue: "",
            tapVis: false
        };
    }

    _onChangeTxt = (text) => {
        console.log("_onChangeTxt text ->", text);
        this.setState({
            getValue: text
        });
    };

    _clearTxt = () => {
        this.setState({
            getValue: ""
        });
    };

    _ScrollShotView = (event) => {
        const _dynNum = parseFloat((event.nativeEvent.contentOffset.y).toFixed(2));

        if (_dynNum !== 0) {
            Keyboard.dismiss();
        }
    };

    _hotKeyClick = (key) => {
        console.log("_hotKeyClick key ->", key);
    };

    _searchTypeClick = () => {
        console.log("_searchTypeClick ");
        Keyboard.dismiss();
        this.setState({
            tapVis: true
        });
    };

    _cancelModal = () => {
        this.setState({
            tapVis: false
        });
    };

    tapTypeView = () => {
        return (
          <View style={{
              width: deviceW - 20,
              height: deviceW * 0.25,
              backgroundColor: "#FFF"
          }}>

          </View>
        );
    };

    render() {
        console.log("SearchPageV3 props ->", this.props);

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
                  <SearchTextInput
                    onChangeTxt={(text) => this._onChangeTxt(text)}
                    onCleanInput={() => this._clearTxt()}
                    onSearchType={() => this._searchTypeClick()}
                    isCleanTxt={true}
                    isSearchIcon={true}
                    inputValue={this.state.getValue}
                  />
              </View>

              <ScrollView onScroll={(event) => this._ScrollShotView(event)}
                          scrollEventThrottle={200}>
                  <View style={{ flex: 1 }}>
                      <Text style={styles.hotTipsTxt}>
                          热门搜索
                      </Text>

                      <View style={styles.hotTipsTitleView}>
                          {
                              hotKey.map((item, key) => {
                                  return (
                                    <TouchableOpacity key={key}
                                                      style={styles.hotKeyView}
                                                      onPress={() => this._hotKeyClick(item)}>
                                        <Text style={styles.hotKeyTxt}>
                                            {item}
                                        </Text>
                                    </TouchableOpacity>
                                  );
                              })
                          }
                      </View>
                  </View>
              </ScrollView>

              <Modal
                isVisible={this.state.tapVis}
                style={{
                    justifyContent: "flex-start",
                    margin: 0
                }}
                backdropOpacity={0.15}
                onBackButtonPress={() => this._cancelModal()}
                onBackdropPress={() => this._cancelModal()}
              >
                  {this.tapTypeView()}
              </Modal>
          </View>
        );
    }
}

export default SearchPageV3;