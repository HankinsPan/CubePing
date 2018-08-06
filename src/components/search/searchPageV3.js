import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
    ActivityIndicator,
    ScrollView,
    Animated,
    Keyboard
} from "react-native";
import * as ScreenUtil from "../../utils/ScreenUtil";
import { deviceW, isEmpty } from "../../utils";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/Ionicons";

import SearchTextInput from "../../widget/SearchTextInput";
import NoSearchDataPage from "./noSearchDataPage";
import MovieChart from "./movieChart";
import * as color from "../../utils/colors";


const hotKey = ["5G", "物联网", "AI", "全面屏苹果", "三星", "华为", "小米", "达摩院", "ET大脑", "云小密", "无人驾驶", "无人机", "无人便利店"];
const sHistoryList = ["全面屏苹果", "三星", "华为", "小米", "达摩院", "ET大脑", "云小密", "无人驾驶"];
const typeList = ["全部", "科技", "金融", "教育", "医疗", "环境"];
const styles = require("./styles");

class SearchPageV3 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            getValue: "",
            searchType: "分类",
            sResHead: "",
            tapVis: false,
            sLoading: false,
            sHisList: [],
            sResList: [],
            fadeValue: new Animated.Value(1)
        };
    }

    componentWillMount() {
        if (!isEmpty(sHistoryList)) {
            this.setState({
                sHisList: [].concat(sHistoryList)
            });
        }
    }

    async _onChangeTxt(text) {
        console.log("_onChangeTxt text ->", text);

        this.setState({
            getValue: text,
            sLoading: true
        });

        const options = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded"
            }
        };

        await fetch(`https://api.douban.com/v2/movie/search?q=${text}&apikey=0b2bdeda43b5688921839c8ecb20399b`, options)
          .then(res => res.json())
          .then(data => {
              console.log("get data -->", data);
              let _title = data.title;
              let _total = data.total;
              let _start = data.start;
              let _subjects = data.subjects;

              this.setState({
                  sResList: _subjects,
                  sResHead: _title,
                  sLoading: false
              });

          })
          .catch(error => {
              console.log("error ->", error);
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
            this._cancelModal();
        }
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
          <View style={styles.typeOrgView}>
              {
                  typeList.map((typeItem, key) => {
                      return (
                        <TouchableOpacity
                          key={key}
                          activeOpacity={0.85}
                          style={styles.typeItemView}
                          onPress={() => this._itemTypeClick(typeItem)}>
                            <Text style={styles.typeTxt}>
                                {typeItem}
                            </Text>
                        </TouchableOpacity>
                      );
                  })
              }
          </View>
        );
    };


    _itemTypeClick = (item) => {
        console.log("itemTypeClick item ->", item);
        this._cancelModal();
        this.setState({
            searchType: item
        });
    };

    _sListRenderItem = (item) => {
        return (
          <TouchableOpacity style={styles.sListItemView}
                            onPress={() => this._sItemClick(item)}>
              <Icon
                name={"ios-refresh-circle-outline"}
                size={16}
                color={"#999"}
              />

              <View style={{ flex: 1, marginLeft: 10 }}>
                  <Text style={styles.sListTxt}>
                      {item}
                  </Text>
              </View>

              <TouchableOpacity style={styles.cleanIconView}
                                activeOpacity={0.85}
                                onPress={() => this._singleClean(item)}>
                  <Icon
                    name={"ios-close-circle-outline"}
                    size={16}
                    color={"#999"}
                  />
              </TouchableOpacity>
          </TouchableOpacity>
        );
    };

    _footer = () => {
        return (
          <TouchableOpacity
            style={styles.searchFootView}
            onPress={() => this._cleanSearch()}>
              <Text style={styles.hotTipsTxt}>
                  清除搜索历史
              </Text>
          </TouchableOpacity>
        );
    };

    _sItemClick = (item) => {
        console.log("_sItemClick item ->", item);
        this._onChangeTxt(item);
    };

    _hotKeyClick = (key) => {
        console.log("_hotKeyClick key ->", key);
        this._onChangeTxt(key);
    };

    _singleClean = (item) => {
        console.log("_singleClean item ->>", item);
        let tempArray = [];
        this.state.sHisList.forEach((singleItem) => {
            if (item !== singleItem) {
                tempArray.push(singleItem);
            }
        });

        this.setState({
            sHisList: [].concat(tempArray)
        });
    };

    _cleanSearch = () => {
        console.log("_cleanSearch ");
        Animated.timing(
          this.state.fadeValue,
          { toValue: 0, duration: 300 }
        ).start();

        let timer = setTimeout(() => {
            clearTimeout(timer);
            this.setState({
                sHisList: []
            });
        }, 350);
    };

    _reLoadSearch = () => {
        console.log("_reLoadSearch");
    };

    _sResHeader = (resHeadTxt) => {
        return (
          <View style={styles.sResTabBarView}>
              <Text style={styles.sResTabBarTxt}>
                  {resHeadTxt}
              </Text>
          </View>
        );
    };

    _ResListItem = (item) => {
        return (
          <TouchableOpacity style={styles.resItemView}
                            onPress={() => this._resItemClick(item)}>
              <Text style={styles.sResItemTitleTxt}>
                  {item.title}
              </Text>

              <View style={styles.resItemContentView}>
                  <View style={{ flex: 1, flexDirection: "row" }}>
                      <Text style={styles.sResTabBarTxt}>
                          {`${item.original_title}`
                          + `\n${item.pubdates.join("\n")}`
                          + `\n${item.genres.join(" - ")}`
                          + `\n${item.durations.join("\n")}`
                          }
                      </Text>
                  </View>
                  {
                      !isEmpty(item.images.medium)
                        ?
                        <Image
                          style={{
                              width: deviceW * 0.22,
                              height: deviceW * 0.3
                          }}
                          resizeMode={"cover"}
                          source={{ uri: item.images.medium }}
                        />
                        : null
                  }
              </View>

              <View style={styles.resItemContentView}>
                  <View style={styles.sIconView}>
                      <Icon
                        name={"ios-star"}
                        size={15}
                        color={"#FFC535"}
                      />
                  </View>

                  <Text style={styles.sResTabBarTxt}>

                      {`${item.collect_count > 10000
                        ?
                        (item.collect_count / 10000).toFixed(1) + "W 收藏  ·  "
                        : item.collect_count + "收藏  ·  "}`}
                  </Text>

                  <View style={styles.sIconView}>
                      <Icon
                        name={"ios-heart"}
                        size={15}
                        color={"#E52B5A"}
                      />
                  </View>

                  <Text style={styles.sResTabBarTxt}>
                      {`${item.rating.stars} 喜欢  ·  `}
                  </Text>

                  <View style={styles.sIconView}>
                      <Icon
                        name={"ios-medal"}
                        size={15}
                        color={"#2196F3"}
                      />
                  </View>

                  <Text style={styles.sResTabBarTxt}>
                      {`${item.rating.average} 分`}
                  </Text>
              </View>

              <MovieChart/>

          </TouchableOpacity>
        );
    };

    _resItemClick = (item) => {
        console.log("_resItemClick item ->", item);
    };

    render() {
        // console.log("SearchPageV3 props ->", this.props);
        console.log("SearchPageV3 state ->", this.state);

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
                    inputType={this.state.searchType}
                  />
              </View>

              {
                  isEmpty(this.state.getValue)
                    ?
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

                        {
                            !isEmpty(this.state.sHisList)
                              ?
                              <Animated.View style={{
                                  flex: 1,
                                  marginTop: 20,
                                  opacity: this.state.fadeValue
                              }}>
                                  <Text style={styles.hotTipsTxt}>
                                      历史记录
                                  </Text>

                                  <FlatList
                                    ListFooterComponent={this._footer()}
                                    refreshing={false}
                                    onEndReachedThreshold={0.1}
                                    data={this.state.sHisList}
                                    // data={this.state.searchList}
                                    renderItem={({ item }) => this._sListRenderItem(item)}
                                  />

                              </Animated.View>
                              : null
                        }

                    </ScrollView>
                    :
                    this.state.sLoading
                      ?
                      <ActivityIndicator
                        size='large'
                        color={"#777"}
                        style={{ marginTop: 150 }}
                      />
                      :
                      !isEmpty(this.state.sResList)
                        ?
                        <FlatList
                          ListHeaderComponent={() => this._sResHeader(this.state.sResHead)}
                          refreshing={false}
                          onEndReachedThreshold={0.1}
                          data={this.state.sResList}
                          // data={this.state.searchList}
                          renderItem={({ item }) => this._ResListItem(item)}
                        />
                        :
                        <NoSearchDataPage onPress={() => this._reLoadSearch()}/>
              }

              <Modal
                isVisible={this.state.tapVis}
                style={{
                    ...ScreenUtil.ifIphoneX({
                        justifyContent: "flex-start",
                        marginTop: deviceW * 0.12 + 40

                    }, {
                        justifyContent: "flex-start",
                        marginTop: deviceW * 0.12
                    })
                }}
                animationIn="slideInLeft"
                animationOut="slideOutLeft"
                animationInTiming={300}
                animationOutTiming={300}
                backdropTransitionInTiming={300}
                backdropTransitionOutTiming={300}
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