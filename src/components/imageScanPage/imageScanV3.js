import React, { Component } from "react";
import {
    View,
    Image,
    Animated,
    Easing,
    ScrollView,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Dimensions,
    LayoutAnimation,
    Platform
} from "react-native";

import * as color from "../../utils/colors";
import ScrollPage from "../scrollPage/scrollPage";


const window = Dimensions.get("window");
const _imgs = [
    require("../../images/pic/pic_one.jpg"),
    require("../../images/pic/pic_two.png"),
    require("../../images/pic/pic_seven.jpg"),
    require("../../images/pic/pic_six.png"),
    require("../../images/pic/pic_five.jpeg"),
    require("../../images/pic/pic_three.jpg")
];

const styles = require("./styles");

class ImageScanV3 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imgVis: false,
            // _width: window.width * 0.6,

            orgSize: new Animated.Value(window.width * 0.6)
        };

    }

    _imgClick = (isVis) => {
        console.log("_imgClick isVis -=-->", isVis);

        this.setState({
            imgVis: !this.state.imgVis
        });

        this._imgShrink(isVis);
    };


    // _imgShrink = (isVis) => {
    //     LayoutAnimation.configureNext({
    //         duration: 1500, //持续时间
    //         create: { // 视图创建
    //             type: LayoutAnimation.Types.spring,
    //             property: LayoutAnimation.Properties.scaleXY// opacity、scaleXY
    //         },
    //         update: { // 视图更新
    //             type: LayoutAnimation.Types.spring
    //         }
    //     });
    //     this.setState({
    //         _width: !isVis ? window.width : window.width * 0.6
    //     });
    // };

    _imgShrink = (isVis) => {
        Animated.timing(this.state.orgSize, {
            toValue: !isVis ? window.width : window.width * 0.6,
            duration: 800,
            easing: Easing.linear
        }).start();
    };


    render() {
        console.log("ImageScanV3 props ->", this.props);
        console.log("ImageScanV3 state -==-->", this.state);
        const { orgSize, imgVis } = this.state;

        return (
          <View style={styles.showImgView}>


          </View>
        );
    }
}

export default ImageScanV3;

//<ScrollView
//  ref="scrollView"
//  contentContainerStyle={{
//      flexDirection: "row",
//      alignItems: "center",
//      justifyContent: "center"
//  }}
//  showsHorizontalScrollIndicator={false}
//  // maximumZoomScale={1.5}    // 子组件(图片)放大倍数
//  // minimumZoomScale={1}  // 子组件(图片)缩小倍数
//  centerContent={true} // 子组件(图片)一直处于父组件中心位置,不会因缩放向其他方向偏离
//  horizontal={true}
//  pagingEnabled={true}
//  // onScrollBeginDrag={this.dragStart}
//  // onScrollEndDrag={this.dragEnd}
//  // onMomentumScrollEnd={this.onAnnotationEnd}   // 当一帧滚动完毕的时候调用
//>
//    {
//        _imgs.map((key) => {
//            return (
//              <TouchableWithoutFeedback key={key} onPress={() => this._imgClick(imgVis)}>
//                  <Image
//                    key={key}
//                    style={styles.visImgView}
//                    source={_imgs[key - 1]}
//                    resizeMode={"contain"}
//                  />
//              </TouchableWithoutFeedback>
//            );
//        })
//    }
//</ScrollView>

