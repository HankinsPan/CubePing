import React, { Component } from "react";
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    Dimensions
} from "react-native";
import { isEmpty } from "../../utils";

const window = Dimensions.get("window");
const _defImg = require("./../../images/pic/pic_defs.png");

const styles = require("./styles");

class ImgTypeSet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imgLineA: [],
            imgLineB: [],
            imgLineC: []
        };
    }

    componentWillMount() {
        const { imgSource } = this.props;

        if (!isEmpty(imgSource)) {
            const _imgSize = imgSource.length;
            const _partSize = Math.ceil(_imgSize / 3);

            let _partArray = [];

            for (let i = 0, j = 1; i < _partSize; i++, j++) {
                _partArray = _partArray.concat(imgSource.slice(i * 3, j * 3 > imgSource.length ? imgSource.length : j * 3));

                console.log("_partArray -=--->", _partArray);
                if (i === 0) {
                    this.setState({
                        imgLineA: _partArray
                    });
                } else if (i === 1) {
                    this.setState({
                        imgLineB: _partArray
                    });
                } else if (i === 2) {
                    this.setState({
                        imgLineC: _partArray
                    });
                }
                _partArray = [];
            }

            console.log("_partSize -=->", _partSize);
        }
    }


    render() {
        // console.log("ImgTypeSet props ->", this.props);
        // console.log("ImgTypeSet state ->", this.state);
        const { imgLineA, imgLineB, imgLineC } = this.state;
        const { imgSource } = this.props;
        let picNum = imgSource.length - 9;

        return (
          <View style={styles.orgView}>
              {
                  isEmpty(imgLineA)
                    ? null
                    :
                    <View style={styles.showImgViewV2}>
                        {
                            imgLineA.map((imgData, key) => {

                                console.log("ImgTypeSet ----->", imgData);
                                console.log("typeof -=--> ", typeof imgData);

                                return (
                                  <TouchableOpacity key={key}
                                                    style={{ flex: 1 }}
                                                    activeOpacity={0.8}
                                                    onPress={() => this.props.onPress(key)}>
                                      <Image
                                        key={key}
                                        style={{
                                            width: window.width / imgLineA.length - 5,
                                            height: window.width * 0.32,
                                            margin: 2
                                        }}
                                        source={
                                            (typeof imgData) === "number"
                                              ? imgData
                                              : { uri: imgData }
                                        }
                                        defaultSource={_defImg}
                                      />
                                  </TouchableOpacity>
                                );
                            })
                        }
                    </View>
              }

              {
                  isEmpty(imgLineB)
                    ? null
                    :
                    <View style={styles.showImgViewV2}>
                        {
                            imgLineB.map((imgData, key) => {
                                return (
                                  <TouchableOpacity key={key}
                                                    style={{ flex: 1 }}
                                                    activeOpacity={0.8}
                                                    onPress={() => this.props.onPress(3 + key)}>
                                      <Image
                                        key={key}
                                        style={{
                                            width: window.width / imgLineB.length - 5,
                                            height: window.width * 0.32,
                                            margin: 2
                                        }}
                                        source={
                                            (typeof imgData) === "number"
                                              ? imgData
                                              : { uri: imgData }
                                        }
                                        defaultSource={_defImg}
                                      />
                                  </TouchableOpacity>
                                );
                            })
                        }
                    </View>
              }


              {
                  isEmpty(imgLineC)
                    ? null
                    :
                    <View style={styles.showImgViewV2}>
                        {
                            imgLineC.map((imgData, key) => {
                                return (
                                  <TouchableOpacity key={key}
                                                    style={{ flex: 1 }}
                                                    activeOpacity={0.8}
                                                    onPress={() => this.props.onPress(6 + key)}>
                                      <Image
                                        key={key}
                                        style={{
                                            width: window.width / imgLineC.length - 5,
                                            height: window.width * 0.32,
                                            margin: 2
                                        }}
                                        source={
                                            (typeof imgData) === "number"
                                              ? imgData
                                              : { uri: imgData }
                                        }
                                        defaultSource={_defImg}
                                      />
                                  </TouchableOpacity>
                                );
                            })
                        }
                    </View>
              }

              {
                  picNum >= 0
                    ?
                    <View style={styles.visBaView}>
                        <Text style={styles.visText}>
                            {`+ ${picNum}`}
                        </Text>
                    </View>
                    : null
              }
          </View>
        );
    }
}

export default ImgTypeSet;
