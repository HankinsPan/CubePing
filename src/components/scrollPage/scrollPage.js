import React, { Component } from "react";
import {
    View,
    Text,
    Platform,
    Dimensions
} from "react-native";

import * as color from "../../utils/colors";
import EZSwiper from "react-native-ezswiper";

const window = Dimensions.get("window");
const styles = require("./styles");

class ScrollPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status: 0
        };
    }


    onPressRow(obj, index) {
        console.log("onPressRow=>obj:" + obj + " ,index:" + index);
        alert("onPressRow=>obj:" + obj + " ,index:" + index);
    }

    renderRow(obj, index) {
        return (
          <View style={[styles.cell, { backgroundColor: index % 2 === 0 ? "red" : "yellow" }]}>
              <Text>{obj}</Text>
          </View>
        );
    }


    _pageChanged = (page) => {
        console.log("_pageChanged page -=-->", page);
    };

    render() {
        console.log("ScrollPage props ->", this.props);


        return (
          <View style={styles.container}>

              <EZSwiper
                style={styles.zSwiperView}
                dataSource={["0", "1", "2", "3"]}
                width={window.width}
                height={150}
                loop={false}
                renderRow={this.renderRow}
                onPress={this.onPressRow}
                index={2}
                cardParams={{
                    cardSide: window.width * 0.85,
                    cardSmallSide: 150 * 0.85,
                    cardSpace: window.width * (1 - 0.85) / 2 * 0.2
                }}
                onPageScrolled={(page) => this._pageChanged(page)}
              />

          </View>
        );
    }
}

export default ScrollPage;