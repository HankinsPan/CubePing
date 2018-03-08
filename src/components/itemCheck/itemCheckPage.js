import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
} from 'react-native';

const styles = require('./styles');
const txtData = '旅行的本质其实是放弃熟悉的选择而发现未知的乐趣，' +
    '坐一回未知目的的公共汽车，吃一次当地难以下咽的食物。' +
    '甚至是坐在路边什么都不做，就这样呆呆的望着过往陌生的人群，' +
    '你都会发现这一切的一切都是多么的美好。';

class ItemCheckPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itemData: [],
        }
    }

    componentDidMount() {
        const mArray = [];
        for (let i = 0; i < 35; i++) {
            let _key = parseInt(Math.random() * (15 + i), 10) + 1;
            let _curtTxt = txtData.slice(0, _key);
            mArray.push(_curtTxt);
        }

        this.setState({
            itemData: mArray,
        })
    }

    _refreshing = () => {
        let timer = setTimeout(() => {
            clearTimeout(timer);
            console.log("刷新成功")
        }, 1000)
    };

    _onLoad = () => {
        let timer = setTimeout(() => {
            clearTimeout(timer);
            console.log("加载成功")
        }, 1000)
    };

    _checkRenderItem = (item) => {
        return (
            <View style={styles.checkItemView}>
                <Text style={styles.checkItemTxt}>
                    {item}
                </Text>
            </View>
        )
    };


    render() {
        console.log("ItemCheckPage props ->", this.props);


        return (
            <View style={styles.container}>
                <View style={{marginTop: 70,}}/>

                <FlatList
                    onRefresh={this._refreshing}
                    onEndReached={this._onLoad}
                    refreshing={false}
                    onEndReachedThreshold={0.1}
                    data={this.state.itemData}
                    renderItem={({item}) => this._checkRenderItem(item)}
                />
            </View>
        )
    }
}

export default ItemCheckPage

// <Image
// style={styles.itemIcon}
// source={require('../../images/iv_box_bg.png')}
// />