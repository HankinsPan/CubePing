import React, { Component } from "react";
import {
    View,
    Text,
    Dimensions,
    StyleSheet
} from "react-native";
import { obj2Array } from "../../utils";

const deviceW = Dimensions.get("window").width;

const details = { 1: 444, 2: 2401, 3: 34213, 4: 125629, 5: 168005 };

class MovieChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData: []
        };
    }

    componentWillMount() {
        // console.log("toArray ->", obj2Array(details));
        this.setState({
            chartData: [].concat(obj2Array(details).reverse())
        });
    }


    render() {
        // console.log("MovieChart props ->", this.props);
        // console.log("MovieChart state ->", this.state);
        const { chartData } = this.state;

        return (
          <View style={styles.container}>
              {
                  chartData.map((chartData, key) => {
                      let _startNum = chartData.key;
                      if (_startNum === "5") {
                          return (
                            <View style={styles.startIconView} key={key}>
                                <Text style={styles.starTxt}>
                                    {`⭐⭐⭐⭐⭐`}
                                </Text>
                            </View>
                          );
                      }

                      return (
                        <View style={styles.startIconView} key={key}>
                            <Text style={styles.starTxt}>
                                {`⭐⭐`}
                            </Text>
                        </View>
                      );
                  })
              }
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#FFF"
    },

    startIconView: {
        width: deviceW * 0.3,
        paddingTop: 5,
        paddingBottom: 5
    },

    starTxt: {
        fontSize: 15,
        color: "#FFC535"
    }

});


export default MovieChart;
