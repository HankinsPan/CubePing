import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    ART,
    Alert,
    TouchableOpacity,
    TouchableWithoutFeedback

} from "react-native";

import * as ScreenUtil from "../../utils/ScreenUtil";
import * as color from "../../utils/colors";
import Canvas from "react-native-canvas";
import ViewShot from "react-native-view-shot";

const styles = require("./styles");

class StartPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comImgUri: ""
        };
    }


    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    _getView2Img = () => {
        console.log("_getView2Img ");
        this.refs.viewShot
          .capture()
          .then(uri => {
              console.log("make shotView uri -> ", uri);
              this.setState({
                  comImgUri: uri
              });
          });

        this.timer = setTimeout(() => {
            Alert.alert(
              "Long Press Alert",
              "you can choose shotView to save your album",
              [
                  { text: "Save", onPress: () => this._turnToAlbum() },
                  { text: "cancel" }
              ],
              { cancelable: false }
            );
        }, 500);

    };

    _turnToAlbum = () => {
        console.log("_turnToAlbum ");
    };

    _startNextPage = () => {
        console.log("_startNextPage ");
        // this.props.navigation.navigate('Draggable')
        this.props.navigation.navigate("SwiperPage");
    };

    _startSlidePage = () => {

        this.props.navigation.navigate("SlidePage");
    };

    _startStatusPage = () => {
        this.props.navigation.navigate("Search");
    };

    _startSearchPage = () => {
        this.props.navigation.navigate("SearchUp");
    };

    _searchNewPage = () => {
        this.props.navigation.navigate("SearchNew");
    };

    _startAreaPage = () => {
        this.props.navigation.navigate("AreaPage");
    };

    _startToastPage = () => {
        this.props.navigation.navigate("ToastPage");
    };

    _videoRecodePage = () => {
        this.props.navigation.navigate("VideoRecord");
    };

    _glassPage = () => {
        this.props.navigation.navigate("GlassView");
    };

    render() {
        console.log("SignPage props ->", this.props);

        return (
          <TouchableWithoutFeedback onLongPress={() => this._getView2Img()}>
              <View style={styles.container}>
                  <ViewShot
                    ref="viewShot"
                    options={{ format: "jpg", quality: 0.9 }}>

                      <View style={{ marginTop: 30 }}/>
                      <TouchableOpacity style={styles.startView}
                                        onPress={() => this._startSearchPage()}>
                          <Text style={styles.startTxt}>
                              SearchPageUp Page
                          </Text>
                      </TouchableOpacity>

                      <View style={{ marginTop: 30 }}/>
                      <TouchableOpacity style={styles.startView}
                                        onPress={() => this._searchNewPage()}>
                          <Text style={styles.startTxt}>
                              searchNewPage Page
                          </Text>
                      </TouchableOpacity>

                      <View style={{ marginTop: 30 }}/>
                      <TouchableOpacity style={styles.startView}
                                        onPress={() => this._videoRecodePage()}>
                          <Text style={styles.startTxt}>
                              videoRecode Page
                          </Text>
                      </TouchableOpacity>

                      <View style={{ marginTop: 30 }}/>
                      <TouchableOpacity style={styles.startView}
                                        onPress={() => this._glassPage()}>
                          <Text style={styles.startTxt}>
                              glass Page
                          </Text>
                      </TouchableOpacity>

                  </ViewShot>
              </View>
          </TouchableWithoutFeedback>
        );
    }
}

export default StartPage;


// <ViewShot
// ref="viewShot"
// options={{format: "jpg", quality: 0.9}}
// style={styles.container}>

// < /ViewShot>