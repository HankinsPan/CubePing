import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    Dimensions,
    Platform

} from "react-native";
import ImageScanV3 from "../imageScanPage/imageScanV3";


const styles = require("./styles");

// const _imgs = [
//     require("../../images/pic/pic_one.jpg"),
//     require("../../images/pic/pic_two.png"),
//     require("../../images/pic/pic_seven.jpg"),
//     require("../../images/pic/pic_six.png"),
//     require("../../images/pic/pic_five.jpeg"),
//     require("../../images/pic/pic_three.jpg"),
//     require("../../images/pic/pic_egit.jpg"),
//     // require("../../images/pic/pic_four.jpeg"),
//     // require("../../images/pic/pic_egit.jpg"),
//     // require("../../images/pic/pic_four.jpeg"),
//     // require("../../images/pic/pic_egit.jpg"),
//     // require("../../images/pic/pic_four.jpeg"),
//     // require("../../images/pic/pic_one.jpg")
// ];

const _imgs = [
    "https://i.imgur.com/UYiroysl.jpg",
    "https://i.imgur.com/UPrs1EWl.jpg",
    "https://i.imgur.com/MABUbpDl.jpg",
    "https://i.imgur.com/KZsmUi2l.jpg",
    "https://i.imgur.com/2nCt3Sbl.jpg"
];


class ImgScanPageV2 extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
          <View style={styles.orgView}>

              <ImageScanV3
                imgSource={_imgs}
              />


          </View>
        );
    }
}

export default ImgScanPageV2;
