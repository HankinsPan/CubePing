import React, { Component } from "react";
import {
    View,
    Text,
    ActivityIndicator
} from "react-native";

import * as color from "../../utils/colors";
import * as tabLiveAction from "../../actions/tabLiveAction";
import SortableGrid from "react-native-sortable-grid";
import { isEmpty, truthy } from "../../utils";
import { connect } from "react-redux";

const styles = require("./styles");

@connect(({ tabLive }) => ({ ...tabLive }))
class LiveTabPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tabArray: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N"],
            startLoading: true

        };
    }

    componentWillMount() {
        this.props.dispatch(tabLiveAction.getLastSortTabs());
    }

    componentDidMount() {
        let timer = setTimeout(() => {
            clearTimeout(timer);

            this.setState({
                startLoading: false
            });
        }, 500);
    }


    componentWillReceiveProps(nextProps) {
        console.log("nextProps ->", nextProps);

        if (truthy(nextProps)
          && truthy(nextProps.tabLives)
          && !nextProps.loading) {
            const _tabLives = nextProps.tabLives;

            if (!isEmpty(_tabLives)) {
                this.state.tabArray = [];
                this.setState({
                    tabArray: _tabLives
                });
            }
        }
    }

    getColor() {
        let r = this.randomRGB();
        let g = this.randomRGB();
        let b = this.randomRGB();
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }


    randomRGB = () => 160 + Math.random() * 85;

    reSetArraySort = (itemArray) => {
        console.log("itemArray -=-->", itemArray);
        let retArray = itemArray.itemOrder;
        let reArray = [];
        retArray.forEach((item) => {
            const itemKey = parseInt(item.key);
            reArray.push(this.state.tabArray[itemKey]);
        });

        const props = {
            rArray: reArray
        };

        this.props.dispatch(tabLiveAction.saveSortTabs(props));
    };

    render() {
        console.log("LiveTabPage props ->", this.props);
        console.log("LiveTabPage state ->", this.state);
        const { loading } = this.props;
        const {
            tabArray,
            startLoading
        } = this.state;

        return (
          <View style={styles.container}>
              {
                  loading || startLoading
                    ?
                    <ActivityIndicator
                      size='large'
                      color={color.HEADER_BG_COLOR}
                      style={{ marginTop: 150 }}
                    />
                    :
                    <SortableGrid
                      style={styles.gridView}
                      blockTransitionDuration={400}
                      activeBlockCenteringDuration={200}
                      itemsPerRow={4}
                      dragActivationTreshold={200}
                      // onDragRelease={(itemOrder) => console.log("Drag was released, the blocks are in the following order: ", itemOrder)}
                      onDragRelease={(itemOrder) => this.reSetArraySort(itemOrder)}
                      onDragStart={() => console.log("Some block is being dragged now!")}
                    >
                        {
                            tabArray.map((letter, index) => {
                                console.log("letter -=->", letter);
                                return (
                                  <View key={index} style={[styles.block, { backgroundColor: this.getColor() }]}>
                                      <Text style={{ color: "white", fontSize: 15 }}>{letter}</Text>
                                  </View>
                                );
                            })
                        }
                    </SortableGrid>
              }
          </View>
        );
    }
}

export default LiveTabPage;

