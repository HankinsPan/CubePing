import React, { Component } from "react";
import {
    View,
    Text,
    Dimensions,
    StyleSheet
} from "react-native";


import { isEmptyObject, obj2Array, objValueAcc } from "../../utils";
import StarBar from "./starBar";

const deviceW = Dimensions.get("window").width;

// const details = { 1: 444, 2: 2401, 3: 34213, 4: 125629, 5: 168005 };

class MovieChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData: [],
            totalNum: 0
        };
    }

    componentWillMount() {
        // console.log("toArray ->", obj2Array(details));

        if (!isEmptyObject(this.props.starObj)) {
            this.setState({
                chartData: [].concat(obj2Array(this.props.starObj).reverse()),
                totalNum: objValueAcc(this.props.starObj)
            });
        }
    }


    render() {
        // console.log("MovieChart props ->", this.props);
        // console.log("MovieChart state ->", this.state);
        const { chartData } = this.state;

        return (
          <View style={styles.container}>
              {
                  chartData.map((comNum, key) => {
                      const props = {
                          starNum: comNum.key,
                          starValue: comNum.value,
                          starTotal: this.state.totalNum
                      };

                      return <StarBar {...props} key={key}/>;
                  })
              }
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10
    },

    startIconView: {
        width: deviceW * 0.3,
        paddingTop: 5,
        paddingBottom: 5
    },

    starTxt: {
        fontSize: 15,
        color: "#FFC535"
    },

    starBarView: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    }

});


export default MovieChart;
