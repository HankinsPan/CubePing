import React, { Component } from "react";
import {
    View,
    Text,
    Image
} from "react-native";

import Carousel from "nuka-carousel";

const styles = require("./styles");

const _imgs = [
    require("../../images/pic/pic_one.jpg"),
    require("../../images/pic/pic_two.png"),
    require("../../images/pic/pic_seven.jpg"),
    require("../../images/pic/pic_six.png"),
    require("../../images/pic/pic_five.jpeg"),
    require("../../images/pic/pic_three.jpg"),
    require("../../images/pic/pic_egit.jpg"),
    require("../../images/pic/pic_four.jpeg"),
    require("../../images/pic/pic_egit.jpg"),
    require("../../images/pic/pic_four.jpeg"),
    require("../../images/pic/pic_egit.jpg"),
    require("../../images/pic/pic_four.jpeg"),
    require("../../images/pic/pic_one.jpg")
];


class NukaCarousel extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        console.log("NukaCarousel props -=->", this.props);

        return (
          <View style={styles.container}>
              <Carousel>
                  {
                      _imgs.map((imgData, key) => {
                          return (
                            <Image
                              key={key}
                              source={imgData}
                              style={styles.imgView}
                              resizeMode={"contain"}
                            />
                          );
                      })
                  }
              </Carousel>

          </View>
        );
    }
}

export default NukaCarousel;