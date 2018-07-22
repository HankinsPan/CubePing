import React, { Component } from "react";
import {
    View,
    Image,
    TouchableWithoutFeedback,
    Dimensions,
    ActivityIndicator
} from "react-native";
import PropTypes from "prop-types";

import ImgTypeSet from "./imgTypeSet";
import ImgScrollPage from "./imgScrollPage";
import { isEmpty } from "../../utils";

const window = Dimensions.get("window");
// const _imgs = [
//     require("../../images/pic/pic_one.jpg"),
//     require("../../images/pic/pic_two.png"),
//     require("../../images/pic/pic_seven.jpg"),
//     require("../../images/pic/pic_six.png"),
//     require("../../images/pic/pic_five.jpeg"),
//     require("../../images/pic/pic_three.jpg"),
//     require("../../images/pic/pic_egit.jpg"),
//     require("../../images/pic/pic_four.jpeg")
//     // require("../../images/pic/pic_egit.jpg"),
//     // require("../../images/pic/pic_four.jpeg"),
//     // require("../../images/pic/pic_egit.jpg"),
//     // require("../../images/pic/pic_four.jpeg"),
//     // require("../../images/pic/pic_one.jpg")
// ];

// const _imgs = [
//     "https://i.imgur.com/UYiroysl.jpg",
//     "https://i.imgur.com/UPrs1EWl.jpg",
//     "https://i.imgur.com/MABUbpDl.jpg",
//     "https://i.imgur.com/KZsmUi2l.jpg",
//     "https://i.imgur.com/2nCt3Sbl.jpg"
// ];

const styles = require("./styles");

class ImageScanV3 extends Component {

    static propTypes = {
        imgSource: PropTypes.array.isRequired
    };


    constructor(props) {
        super(props);
        this.state = {
            imgVis: false,
            visPage: 0
        };
    }

    _imgClick = (key) => {
        this.setState({
            imgVis: !this.state.imgVis,
            visPage: key
        });
    };


    render() {
        const { imgVis, visPage } = this.state;
        if (isEmpty(this.props.imgSource)) {
            return (
              <ActivityIndicator
                size='large'
                color={"#19A2FF"}
                style={{ margin: window.width * 0.2 }}
              />
            );
        }

        return (
          <View style={imgVis ? styles.orgScrollView : styles.orgImgView}>
              {
                  imgVis
                    ?
                    <ImgScrollPage
                      initPage={visPage || 0}
                      pageStyle={{
                          height: window.width * 0.45,
                          justifyContent: "center"
                      }}>
                        {
                            this.props.imgSource.map((pageData, key) => {
                                console.log("pageData --==-->",pageData);
                                console.log("typeof -=-->",typeof pageData);

                                return (
                                  <TouchableWithoutFeedback key={key} onPress={() => this._imgClick(key)}>
                                      <Image
                                        style={{ width: window.width }}
                                        resizeMode={"contain"}
                                        source={
                                            (typeof pageData) === "number"
                                              ? pageData
                                              : { uri: pageData }
                                        }
                                      />
                                  </TouchableWithoutFeedback>
                                );
                            })
                        }

                    </ImgScrollPage>
                    :
                    <ImgTypeSet
                      imgSource={this.props.imgSource}
                      onPress={this._imgClick}
                    />
              }
          </View>
        );
    }
}

export default ImageScanV3;
