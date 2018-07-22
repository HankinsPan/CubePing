import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    Dimensions,
    Platform

} from "react-native";

import * as color from "../../utils/colors";

import CarouselCard from "react-native-card-carousel";

const _imgs = [
    require("../../images/pic/pic_one.jpg"),
    require("../../images/pic/pic_two.png"),
    require("../../images/pic/pic_three.jpg"),
    require("../../images/pic/pic_four.jpeg"),
    require("../../images/pic/pic_five.jpeg"),
    require("../../images/pic/pic_six.png"),
    require("../../images/pic/pic_seven.jpg"),
    require("../../images/pic/pic_egit.jpg"),
];
const styles = require("./styles");
const window = Dimensions.get("window");

class CarouselPage extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    _renderCardView = (item) => {
        return (
          <View style={styles.carCardView}>
              <Image
                source={item}
                style={{ width: 120, height: 120, borderRadius: 60 }}
              />
          </View>
        );
    };

    _cardClick = (item) => {
        console.log("_cardClick item ->", item);
    };

    _pageChanged = (page) => {
        console.log("CarouselPage page -=-->", page);
    };

    render() {
        console.log("CarouselPage props ->", this.props);

        return (
          <View style={styles.container}>

              <View style={{
                  width: window.width,
                  height: 100,
                  backgroundColor: "rgba(0,0,0,0.05)"
              }}/>

              <CarouselCard
                height={window.width * 0.45}
                autoplay={false}
                initPage={3}
                data={_imgs}
                onPress={item => this._cardClick(item)}
                onPageScrolled={(page) => this._pageChanged(page)}
                contentRender={item => this._renderCardView(item)}
              />

          </View>
        );
    }
}

export default CarouselPage;