import React, {Component} from 'react';
import {
    View,
    Text,
    FlatList,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import * as color from '../../utils/colors';

import Icon from 'react-native-vector-icons/Ionicons';
import regJson from '../../server/json/regions.json';

const styles = require('./styles');


class HomeAreaPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hCityArray: [],
        }
    }

    componentWillMount() {
        const hotCityArray = [];

        regJson.forEach((mapData) => {
            const _isHot = mapData.is_hot;
            const _hCityName = mapData.name;
            const _hCityId = mapData.id;
            const _hRegList = mapData.city_list;

            if (_isHot === 1) {
                const props = {
                    name: _hCityName,
                    id: _hCityId,
                    city_list:_hRegList
                };

                hotCityArray.push(props);
            }
        });

        this.setState({
            hCityArray: hotCityArray,
        });
    }

    _header = () => {
        return (
            <View style={{flex: 1}}>
                <View style={styles.areaItemView}>
                    <Icon
                        name={'md-pin'}
                        size={18}
                        color={color.TEXT_INFO_COLOR}
                    />

                    <Text style={styles.areaTitleTxt}>
                        当前定位城市
                    </Text>
                </View>

                <View style={styles.areaItemViewV2}>
                    <Text style={styles.areaTitleTxtV2}>
                        北京
                    </Text>
                </View>


                <View style={styles.areaItemView}>
                    <Icon
                        name={'md-flame'}
                        size={18}
                        color={color.TEXT_INFO_COLOR}
                    />

                    <Text style={styles.areaTitleTxt}>
                        热门城市
                    </Text>
                </View>

                <FlatList
                    refreshing={false}
                    onEndReachedThreshold={0}
                    data={this.state.hCityArray}
                    renderItem={({item}) => this._hotCityRenderItem(item)}
                />

                <View style={styles.areaItemView}>
                    <Icon
                        name={'md-shuffle'}
                        size={18}
                        color={color.TEXT_INFO_COLOR}
                    />

                    <Text style={styles.areaTitleTxt}>
                        按省份选择城市
                    </Text>
                </View>
            </View>
        )
    };

    _footer = () => {
        return (
            <View style={{marginBottom: 20}}/>
        )
    };

    _hotCityRenderItem = (item) => {
        return (
            <TouchableOpacity style={styles.areaItemViewV3}
                              onPress={() => this._areaItemClick(item)}>
                <Text style={styles.areaTitleTxtV3}>
                    {item.name}
                </Text>
            </TouchableOpacity>
        )
    };

    _areaItemClick = (item) => {
        console.log("_areaItemClick item ->", item);
    };


    _cityRenderItem = (item) => {
        return (
            <TouchableOpacity style={styles.areaItemViewV3}
                              onPress={() => this._areaItemClick(item)}>
                <Text style={styles.areaTitleTxtV3}>
                    {item.name}
                </Text>
            </TouchableOpacity>
        )
    };


    render() {
        console.log("HomeAreaPage props ->", this.props);
        console.log("HomeAreaPage state ->", this.state);


        const {goBack} = this.props.navigation;


        return (
            <View style={styles.container}>
                <View style={styles.pageTitle}>
                    <TouchableOpacity style={styles.leftIcon}
                                      onPress={() => goBack()}>
                        <Icon
                            name={'ios-arrow-back'}
                            size={30}
                            color={color.TEXT_INFO_COLOR}
                        />
                    </TouchableOpacity>

                    <View style={styles.titleView}>
                        <Text style={styles.proTxtTitle}>
                            选择地区
                        </Text>
                    </View>

                    <View style={styles.rightIcon}/>
                </View>

                <FlatList
                    ListHeaderComponent={this._header()}
                    ListFooterComponent={this._footer()}
                    refreshing={false}
                    onEndReachedThreshold={0}
                    data={regJson}
                    renderItem={({item}) => this._cityRenderItem(item)}
                />


            </View>
        )
    }
}

export default HomeAreaPage



