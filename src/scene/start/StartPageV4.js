import React, { Component } from "react";
import {
    View,
    FlatList,
    Text,
    StyleSheet
} from "react-native";

import BottomNavigation, {
    IconTab,
    Badge
} from "react-native-material-bottom-navigation";
import Icon from "react-native-vector-icons/Ionicons";


class StartPageV4 extends Component {

    state = {
        activeTab: "games"
    };

    tabs = [
        {
            key: "logo",
            label: "Logo",
            barColor: "#DC3535",
            pressColor: "rgba(255, 255, 255, 0.16)",
            icon: "ios-ionic"
        },
        {
            key: "message",
            label: "Music",
            barColor: "#6A1B9A",
            pressColor: "rgba(255, 255, 255, 0.16)",
            icon: "ios-chatbubbles"
        },
        {
            key: "idea",
            label: "Idea",
            barColor: "#00695C",
            pressColor: "rgba(255, 255, 255, 0.16)",
            icon: "ios-bulb"
        },
        {
            key: "mine",
            label: "Mine",
            barColor: "#1565C0",
            pressColor: "rgba(255, 255, 255, 0.16)",
            icon: "ios-pie"
        }
    ];

    state = {
        activeTab: this.tabs[0].key
    };

    constructor(props) {
        super(props);
        this.state = {
            demoList: []
        };
    }

    componentWillMount() {
        const vArray = [];

        for (let i = 0; i < 30; i++) {
            let itemName = `this is Num ${i} item`;
            vArray.push(itemName);
        }

        this.setState({
            demoList: vArray
        });
    }


    renderIcon = icon => ({ isActive }) => (
      <Icon size={24} color="white" name={icon}/>
    );

    renderTab = ({ tab, isActive }) => (
      <IconTab
        isActive={isActive}
        showBadge={tab.key === "message"}
        renderBadge={() => <Badge>2</Badge>}
        key={tab.key}
        label={tab.label}
        renderIcon={this.renderIcon(tab.icon)}
      />
    );


    _RenderItem = (item) => {
        return (
          <View style={{
              flex: 1,
              alignItems: "center",
              marginTop: 10,
              marginBottom: 10,
              backgroundColor: "rgba(0,0,0,0.05)"
          }}>

              <Text style={{ fontSize: 18, color: "#999" }}>
                  {item}
              </Text>

          </View>
        );
    };

    render() {
        console.log("StartPageV4 props ->", this.props);

        return (
          <View style={{ flex: 1, backgroundColor: "white" }}>
              <View style={{ flex: 1 }}>

                  <FlatList
                    refreshing={false}
                    onEndReachedThreshold={0}
                    data={this.state.demoList}
                    renderItem={({ item }) => this._RenderItem(item)}
                  />

              </View>
              <BottomNavigation
                tabs={this.tabs}
                activeTab={this.state.activeTab}
                onTabPress={newTab => this.setState({ activeTab: newTab.key })}
                renderTab={this.renderTab}
                useLayoutAnimation
              />
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

    startTxt: {
        fontSize: 20,
        color: "#666"
    }
});

export default StartPageV4;