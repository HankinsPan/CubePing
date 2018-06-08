import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    Animated,
    StatusBar,
    ScrollView,
    Dimensions,
    TouchableOpacity,
    TouchableWithoutFeedback
} from "react-native";

import resolveAssetSource from "resolveAssetSource";

const window = Dimensions.get("window");

const _imgs = [
    require("../../images/pic/pic_one.jpg"),
    require("../../images/pic/pic_two.png"),
    require("../../images/pic/pic_seven.jpg"),
    require("../../images/pic/pic_six.png"),
    require("../../images/pic/pic_five.jpeg"),
    require("../../images/pic/pic_three.jpg")
];

const images = [
    "https://i.imgur.com/UYiroysl.jpg",
    "https://i.imgur.com/UPrs1EWl.jpg",
    "https://i.imgur.com/MABUbpDl.jpg",
    "https://i.imgur.com/KZsmUi2l.jpg",
    "https://i.imgur.com/2nCt3Sbl.jpg"
];

const styles = require("./styles");

class ImageScanV2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            insArray: [],
            imgClick: false,

            //当前显示的图片索引
            currentIndex: 0
        };

        // this.dragStart = this.dragStart.bind(this);
        // this.dragEnd = this.dragEnd.bind(this);
        // this.onAnnotationEnd = this.onAnnotationEnd.bind(this);
    }

    // componentWillMount() {
    //     StatusBar.setBarStyle("dark-content");
    //     let _sArray = [];
    //
    //     //TODO images 的处理
    //
    //     _imgs.forEach((imgData) => {
    //         const _width = resolveAssetSource(imgData).width;
    //         const _height = resolveAssetSource(imgData).height;
    //
    //         let _vHeight = Math.ceil(window.width * (_height / _width));
    //         _sArray.push(_vHeight);
    //     });
    //
    //     this.setState({
    //         scaleArray: _sArray
    //     });
    // }


    _showImgClick = () => {
        this.setState({
            imgClick: false
        });
    };

    _viShowClick = (key) => {
        // console.log("_viShowClick key -->", key);
        // console.log("_imgs -=-->", _imgs);

        let cutBodyArray = _imgs.slice(key, _imgs.length);
        let cutHeadArray = _imgs.slice(0, key);

        let _insArray = cutBodyArray.concat(cutHeadArray);


        console.log("cutBodyArray -=->", cutBodyArray);
        console.log("cutHeadArray -=->", cutHeadArray);

        console.log("_insArray -=->", _insArray);


        this.setState({
            imgClick: true,
            currentIndex: key,
            insArray: _insArray
        });


    };

    _renderScrollImage = (key) => {
        console.log("_renderScrollImage key -=-->", key);
        return (
          <TouchableWithoutFeedback key={key}
                                    onPress={() => this._showImgClick()}>
              <Image
                key={key}
                style={styles.visImgView}
                source={this.state.insArray[key - 1]}
                resizeMode={"contain"}
              />
          </TouchableWithoutFeedback>
        );
    };

    //开始拖动，关闭定时器
    // dragStart = () => {
    //     console.log("dragStart ");
    // };
    //拖动结束，开启定时器
    // dragEnd = () => {
    //     // const ScrollView = this.refs.scrollView;
    //     // console.log("dragEnd ScrollView ->",ScrollView);
    //     console.log("dragEnd ");
    // };

    ///当一帧滚动完毕时，重新设置当前图片的索引
    // onAnnotationEnd(e) {
    //     const offSetX = e.nativeEvent.contentOffset.x;
    //     const currentIndex = offSetX / window.width;
    //
    //     console.log("onAnnotationEnd currentIndex -=-->", currentIndex);
    //     this.setState({
    //         currentIndex: currentIndex
    //     });
    // }

    render() {
        // console.log("ImageScanV2 props ->", this.props);
        console.log("ImageScanV2 state -=->", this.state);
        const { imgClick } = this.state;

        return (
          <View style={imgClick ? styles.showImgView : styles.container}>
              {
                  imgClick
                    ?
                    <ScrollView
                      ref="scrollView"
                      contentContainerStyle={{
                          flexDirection: "row",
                          alignItems: "center"
                      }}
                      showsHorizontalScrollIndicator={false}
                      maximumZoomScale={2.0}    // 子组件(图片)放大倍数
                      minimumZoomScale={1}  // 子组件(图片)缩小倍数
                      centerContent={true} // 子组件(图片)一直处于父组件中心位置,不会因缩放向其他方向偏离
                      horizontal={true}
                      pagingEnabled={true}
                      // onScrollBeginDrag={this.dragStart}
                      // onScrollEndDrag={this.dragEnd}
                      //onMomentumScrollEnd={this.onAnnotationEnd}   // 当一帧滚动完毕的时候调用
                    >
                        {
                            _imgs.map((key) => this._renderScrollImage(key))
                        }
                    </ScrollView>
                    :
                    _imgs.map((imgData, key) => {
                        return (
                          <TouchableOpacity key={key}
                                            activeOpacity={0.8}
                                            onPress={() => this._viShowClick(key)}>
                              <Image
                                style={styles.imgCube}
                                source={imgData}
                              />
                          </TouchableOpacity>
                        );
                    })
              }
          </View>
        );
    }
}

export default ImageScanV2;

