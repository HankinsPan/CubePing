import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    Touchable,
    Dimensions,
    TouchableOpacity,
    TouchableWithoutFeedback
} from "react-native";

const window = Dimensions.get("window");
const styles = require("./styles");
const pageArray = ["A", "B", "C", "D", "E", "F"];
import CarouselPager from "react-native-carousel-pager";
import * as color from "../../utils/colors";

const _imgs = [
    require("../../images/pic/pic_one.jpg"),
    require("../../images/pic/pic_two.png"),
    require("../../images/pic/pic_seven.jpg"),
    require("../../images/pic/pic_six.png"),
    require("../../images/pic/pic_five.jpeg"),
    require("../../images/pic/pic_three.jpg"),
    // require("../../images/pic/pic_egit.jpg"),
    // require("../../images/pic/pic_four.jpeg"),
    // require("../../images/pic/pic_egit.jpg"),
    // require("../../images/pic/pic_four.jpeg"),
    // require("../../images/pic/pic_egit.jpg"),
    // require("../../images/pic/pic_four.jpeg"),
    // require("../../images/pic/pic_one.jpg")
];


class ScrollPageH extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imgKey: 0
        };
    }

    _imgClick = (pageNum) => {
        console.log("_imgClick pageNum -=-->", pageNum);
        if (pageNum < pageArray.length - 1) {
            this.carousel.goToPage(pageNum + 1);
        }
    };

    _pageChange = (page) => {
        console.log("_pageChange page -=-->", page);

    };


    render() {
        console.log("ScrollPageH props -=->", this.props);
        console.log("ScrollPageH state -->", this.state);

        return (
          <View style={styles.container}>

              <CarouselPager ref={ref => this.carousel = ref}
                             initialPage={2}
                             onPageChange={(page) => this._pageChange(page)}
                             pageStyle={{
                                 height: window.width * 0.45,
                                 justifyContent: "center"
                             }}>
                  {
                      _imgs.map((pageData, key) => {
                          return (
                            <TouchableWithoutFeedback key={key} onPress={() => this._imgClick(key)}>
                                <Image
                                  style={{ width: window.width,}}
                                  resizeMode={"contain"}
                                  source={pageData}
                                />
                            </TouchableWithoutFeedback>
                          );
                      })
                  }
              </CarouselPager>

          </View>
        );
    }
}

export default ScrollPageH;