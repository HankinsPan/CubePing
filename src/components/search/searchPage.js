import React, {Component} from 'react'
import {
    View,
    Text,
    Image,
    TextInput,
    FlatList,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    Platform,
    Keyboard,
    ActivityIndicator,
} from 'react-native';

import * as color from '../../utils/colors';
import * as constants from '../../utils/constants';
import * as movieAction from '../../actions/movieAction';

import Icon from 'react-native-vector-icons/Ionicons';

import {connect} from 'react-redux';
import {isEmpty, truthy, uniqueByKey} from "../../utils/index";

const styles = require('./styles');


@connect(({movie}) => ({...movie}))
class SearchPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pageNo: 0,
            searchKey: '',
            searchList: [],

            tipsArray: [],
            lastSearch: [],

            initV: false,
            reSearch: false,
        }
    }

    componentWillMount() {
        this.props.dispatch(movieAction.getSearchHisList())
    }

    componentWillReceiveProps(nextProps) {
        console.log("SearchPage nextProps ->", nextProps);
        if (truthy(nextProps) && truthy(nextProps.movieList)) {
            if (this.state.pageNo <= nextProps.moviePage) {

                let _loadArray = null;
                if (this.state.reSearch) {
                    _loadArray = nextProps.movieList;
                } else {
                    _loadArray = this.state.searchList.concat(nextProps.movieList);
                }


                let setArray = uniqueByKey(_loadArray, constants.MOVIE_ID);
                if (!isEmpty(setArray)) {
                    this.state.searchList = [];
                    this.setState({
                        searchList: setArray,
                    })
                }
            }
        }

        if (truthy(nextProps) && truthy(nextProps.movieSearchList)) {
            console.log("movieSearchList --==-=--->", nextProps.movieSearchList);
            this.setState({
                lastSearch: nextProps.movieSearchList.reverse(),
            })

        }
    }

    componentWillUnmount() {
        console.log("Unmount tipsArray ->", this.state.tipsArray);

        const saveProps = {
            searchKeyList: this.state.tipsArray,
        };

        if (!isEmpty(this.state.tipsArray)) {
            this.props.dispatch(movieAction.saveSearchKeyList(saveProps));
        }
    }

    getSearchInputText = (text) => {
        console.log("getSearchInputText text ->", text);
        if (text !== '') {
            const sProps = {
                kWords: text,
            };

            this.props.dispatch(movieAction.getMovieList(sProps));

        } else {
            console.log("Do Fuck");
            this.props.dispatch(movieAction.getSearchHisList());
        }

        this.setState({
            searchKey: text,
        });

    };

    _header = () => {
        return (
            <View style={{marginTop: 10}}/>
        )
    };

    _loadFooter = (loadNext) => {
        console.log("_footer loadNext ->", loadNext);
        return (
            <View style={styles.loadFooterView}>
                {
                    loadNext
                        ?
                        <View style={styles.footerLoadView}>
                            <ActivityIndicator
                                color={color.TEXT_INFO_COLOR}
                            />
                            <Text style={{fontSize: 16, color: color.TEXT_INFO_COLOR, marginLeft: 5}}>
                                正在加载更多...
                            </Text>
                        </View>
                        :
                        <View style={{marginTop: 20}}/>
                }
            </View>
        )
    };

    _onLoad = () => {
        const lastPage = this.props.moviePage;

        console.log(">>>>>> page ->", this.state.pageNo);
        console.log(">>>>>> lastPage ->", lastPage);

        if (this.state.pageNo < lastPage) {
            const loadProps = {
                pageNo: this.state.pageNo + 1,
                kWords: this.state.searchKey,
            };

            this.props.dispatch(movieAction.getMovieNextPage(loadProps));
            this.setState({
                pageNo: this.state.pageNo + 1,
                reSearch: false,
            })
        }
    };

    _onBlurLost = (text) => {
        const sTips = text.nativeEvent.text;
        console.log("_onBlurLost sTips ->", sTips);

        if (sTips !== '') {
            let _fArray = [];

            this.state.lastSearch.forEach((tipData, index) => {
                if (index === 0) {
                    _fArray.push(sTips)
                } else {
                    _fArray.push(tipData)
                }
            });

            const _sTips = this.state.tipsArray.concat(sTips);
            // console.log(" -=-==-=-=-_+_+__+_+_+_-=-=-= _fArray -=--> ",_fArray);

            this.state.tipsArray = [];
            this.state.lastSearch = [];

            this.setState({
                initV: true,
                tipsArray: _sTips,
                lastSearch: _fArray,

                reSearch: true,
            })
        }
    };

    _footer = () => {
        return (
            <View style={{flex: 1}}>
                {
                    isEmpty(this.state.lastSearch)
                        ? null
                        :
                        <TouchableOpacity style={styles.historyFooterBar}
                                          onPress={() => this._hFooterClick()}>
                            <Text style={styles.historyFooterTxt}>
                                清空搜索记录
                            </Text>
                        </TouchableOpacity>
                }
            </View>
        )
    };

    _hFooterClick = () => {
        console.log("_hFooterClick ");

        this.setState({
            lastSearch: [],
            tipsArray: [],
            initV: true,
        });

        Storage.remove({key: 'searchHistory'});
    };

    _bgClick = () => {
        Keyboard.dismiss();
    };

    _ScrollShotView = (event) => {
        const _dynNum = parseFloat((event.nativeEvent.contentOffset.y).toFixed(2));
        if (_dynNum > 0) {
            // console.log("_ScrollShotView _dynNum -= -=->", _dynNum);
            this._bgClick();
        }
    };

    _searchRenderItem = (item) => {
        return (
            <TouchableOpacity style={styles.searchItemView}
                              onPress={() => this._searchItemClick(item)}>
                <Image
                    style={styles.searchImg}
                    source={{uri: item.images.medium}}
                />


                <Text style={styles.itemTitleTxt}>
                    {item.title}
                </Text>
            </TouchableOpacity>
        )
    };

    _searchItemClick = (item) => {
        console.log("_searchItemClick item ->", item);
    };

    _historyRenderItemV = (item) => {
        return (
            <TouchableOpacity style={styles.historyItemView}
                              onPress={() => this._hItemClick(item)}>

                <View style={styles.hisItemView}>
                    <View style={styles.hIconStyle}>
                        <Icon
                            name={'ios-refresh'}
                            size={20}
                            color={color.TXT_HINT_COLOR}
                        />
                    </View>

                    <Text style={styles.hisItemTxt}>
                        {item}
                    </Text>
                </View>

                <View style={styles.hIconStyle}>
                    <Icon
                        name={'ios-arrow-forward'}
                        size={18}
                        color={color.TXT_HINT_COLOR}
                    />
                </View>
            </TouchableOpacity>
        )
    };

    _hItemClick = (item) => {
        console.log("_hItemClick item ->", item);
        this.setState({
            searchKey: item,
        });

        const sProps = {
            pageNo: this.state.pageNo,
            kWorks: item,
        };

        this.props.dispatch(movieAction.getMovieList(sProps));
    };

    render() {
        console.log("SearchPage props ->", this.props);
        const {goBack} = this.props.navigation;
        const {searchKey, lastSearch} = this.state;
        const {
            loading,
            loadNext,
            movieList,
            moviePage,
            movieStatus,
            movieSearchList,
        } = this.props;


        return (
            <View style={styles.container}>
                <View style={styles.searchHeadView}>
                    <View style={styles.searchBarView}>
                        <View style={styles.iconView}>
                            <Icon
                                name={'ios-search'}
                                size={23}
                                color={color.TEXT_INFO_COLOR}
                            />
                        </View>

                        <TextInput
                            ref={'searchTextInput'}
                            style={styles.searchInput}
                            placeholder={'搜索职位'}
                            placeholderTextColor={color.TEXT_INFO_COLOR}
                            keyboardType="default"
                            clearButtonMode="while-editing"
                            returnKeyType="search"
                            autoCapitalize='none'
                            clearTextOnFocus={true}
                            autoFocus
                            underlineColorAndroid="transparent"
                            value={this.state.searchKey}
                            onChangeText={(text) => this.getSearchInputText(text)}
                            onEndEditing={(text) => this._onBlurLost(text)}
                        />
                    </View>

                    <TouchableOpacity style={styles.cancelView}
                                      onPress={() => goBack()}>
                        <Text style={styles.cancelTxt}>
                            取消
                        </Text>
                    </TouchableOpacity>
                </View>

                {
                    loading
                        ?
                        <ActivityIndicator
                            size='large'
                            color={color.HEADER_BG_COLOR}
                            style={{marginTop: 150}}
                        />
                        :
                        searchKey === ''
                            ?
                            <ScrollView onScroll={(event) => this._ScrollShotView(event)}>
                                {
                                    isEmpty(movieSearchList)
                                        ? null
                                        :
                                        <View style={styles.searchHisView}>
                                            <Text style={styles.searchHisTitleTxt}>
                                                搜索记录
                                            </Text>

                                            <FlatList
                                                ListFooterComponent={this._footer()}
                                                refreshing={false}
                                                onEndReachedThreshold={0.1}
                                                data={lastSearch}
                                                renderItem={({item}) => this._historyRenderItemV(item)}
                                            />
                                        </View>
                                }

                            </ScrollView>
                            :
                            movieStatus === 0
                                ?
                                <View style={{flex: 1, flexDirection: 'column',}}>
                                    <FlatList
                                        ListHeaderComponent={this._header()}
                                        ListFooterComponent={() => this._loadFooter(loadNext)}
                                        onEndReached={this._onLoad}
                                        refreshing={false}
                                        onEndReachedThreshold={0.1}
                                        data={this.state.searchList}
                                        renderItem={({item}) => this._searchRenderItem(item)}
                                        onScroll={(event) => this._ScrollShotView(event)}
                                    />
                                </View>
                                :
                                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                    <Text style={{fontSize: 25, color: color.TEXT_INFO_COLOR}}>
                                        没有相关的数据
                                    </Text>
                                </View>

                }

            </View>
        )
    }
}

export default SearchPage