import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';

import * as colors from '../../utils/colors';
import * as startAction from '../../actions/startAction';
import {connect} from 'react-redux';

const styles = require('./styles');

@connect(({start}) => ({...start}))
class StartPageV2 extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    _btnClick = () => {
        console.log("StartPageV2  _btnClick")
        const props = {
            sName: '1900',
        };

        this.props.dispatch(startAction.getStartPage(props));
    };

    _btnClickV2 = () => {
        this.props.navigation.navigate('VideoPage')
    };

    _btnClickV3 = () => {
        this.props.navigation.navigate('ContextPage')
    };

    _btnClickV4 = () =>{
        this.props.navigation.navigate('CarouselPage')
    };

    _btnClickV5 = () =>{
        this.props.navigation.navigate('ImageGrid')
    };

    _btnClickV6 = () =>{
        this.props.navigation.navigate('AnimPage')
    };

    _btnClickV7 = () =>{
        this.props.navigation.navigate('ImageCarousel')
    };


    render() {
        console.log("StartPageV2 props ->", this.props);
        const {loading} = this.props;

        return (
            <View style={styles.container}>
                {
                    loading
                        ?
                        <ActivityIndicator
                            size='large'
                            color={colors.TEXT_INFO_COLOR}
                        />
                        :
                        <View style={styles.container}>
                            <TouchableOpacity style={styles.clickBtnView}
                                              onPress={() => this._btnClick()}>
                                <Text style={styles.btnTxt}>
                                    btn one
                                </Text>
                            </TouchableOpacity>


                            <TouchableOpacity style={styles.clickBtnViewV2}
                                              onPress={() => this._btnClickV2()}>
                                <Text style={styles.btnTxt}>
                                    btn two
                                </Text>
                            </TouchableOpacity>


                            <TouchableOpacity style={styles.clickBtnViewV2}
                                              onPress={() => this._btnClickV3()}>
                                <Text style={styles.btnTxt}>
                                    btn three
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.clickBtnViewV2}
                                              onPress={() => this._btnClickV4()}>
                                <Text style={styles.btnTxt}>
                                    btn four
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.clickBtnViewV2}
                                              onPress={() => this._btnClickV5()}>
                                <Text style={styles.btnTxt}>
                                    btn five
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.clickBtnViewV2}
                                              onPress={() => this._btnClickV6()}>
                                <Text style={styles.btnTxt}>
                                    btn six
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.clickBtnViewV2}
                                              onPress={() => this._btnClickV7()}>
                                <Text style={styles.btnTxt}>
                                    btn seven
                                </Text>
                            </TouchableOpacity>
                        </View>
                }

            </View>
        )
    }
}

export default StartPageV2
