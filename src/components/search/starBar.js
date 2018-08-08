import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

const deviceW = Dimensions.get("window").width;

class StarBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            starArray: []
        };
    }

    componentWillMount() {
        // console.log("starBar props -=-=->", this.props);
        const _starNum = this.props.starNum;
        let mArray = [];
        for (let i = 0; i < _starNum; i++) {
            mArray.push(i);
        }

        this.setState({
            starArray: mArray
        });
    }


    render() {
        // console.log("starBar props ->", this.props);
        const { starArray } = this.state;
        const { starValue, starTotal } = this.props;

        return (
          <View style={styles.container}>
              <View style={styles.starNumBar}>
                  {
                      starArray.map((star, key) => {
                          return (
                            <View style={styles.starIcon} key={key}>
                                <Icon
                                  name={"ios-star"}
                                  size={15}
                                  color={"#FFC535"}
                                />
                            </View>
                          );
                      })
                  }
              </View>

              <View style={styles.starValueBar}>
                  <View style={{
                      width: (deviceW * starValue / starTotal) > deviceW * 0.5
                        ? deviceW * 0.5
                        : (deviceW * starValue / starTotal),
                      height: 4,
                      backgroundColor: "#3BB273",
                      borderRadius: 1
                  }}/>
              </View>

              <View style={styles.starValueNum}>
                  <Text style={styles.starNumTxt}>
                      {`${((starValue / starTotal) * 100).toFixed(1)} %`}
                  </Text>
              </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 2.5,
        paddingBottom: 2.5
    },

    starNumBar: {
        width: 100,
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 2.5,
        paddingBottom: 2.5
    },

    starValueBar: {
        flex: 1,
        justifyContent: "center",
        marginRight: 5,
        backgroundColor: "rgba(0,0,0,0.05)"
    },

    starValueNum: {
        paddingLeft: 15,
        paddingRight: 5,
        alignItems: "flex-end",
        justifyContent: "center"
    },

    starIcon: {
        width: 18,
        height: 18,
        alignItems: "center",
        justifyContent: "center"
    },

    starNumTxt: {
        fontSize: deviceW === 320 ? 12 : 14,
        color: "#777"
    }

});

export default StarBar;