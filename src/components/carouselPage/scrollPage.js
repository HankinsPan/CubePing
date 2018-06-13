import React, { Component } from "react";
import {
    View,
    Text,
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
                                 backgroundColor: color.STATE_TIPS
                             }}>
                  {
                      pageArray.map((pageKey, key) => {
                          return (
                            <TouchableWithoutFeedback key={key}
                                                      onPress={() => this._imgClick(key)}>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.pageTxt} key={key}>
                                        {pageKey}
                                    </Text>
                                </View>
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