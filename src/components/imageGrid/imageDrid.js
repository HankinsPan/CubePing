import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    ActivityIndicator,
    Dimensions,
} from 'react-native';

import * as color from '../../utils/colors';
import * as constants from '../../utils/constants';

import {Col, Row, Grid} from 'react-native-easy-grid';

import {getImgs, isEmpty, truthy} from "../../utils/index";
import resolveAssetSource from 'resolveAssetSource';

const styles = require('./styles');
const window = Dimensions.get('window');

class ImageGrid extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imgClick: false,

            flowArray: [],

            imgXArray: [],
            imgNum: 0,
        }
    }

    componentWillMount() {
        StatusBar.setBarStyle('dark-content');
    }

    componentDidMount() {
        // let imgOne = getImgs(constants.imgItems)[2];
        //
        // console.log("ImageGrid img1 -==-=->", imgOne);
        //
        // console.log("imgSize -=-=-=---> ",
        //     Image.getSize(imgOne,
        //         (width, height) => {
        //             console.log('imgSize fuck -=- width--->', width);
        //             console.log('imgSize fuck -=- height--->', height);
        //         }))

        const imgUrl = getImgs(constants.imgItems);
        let imgWHArray = [];
        let xArray = [];

        if (!isEmpty(imgUrl)) {

            imgUrl.forEach((imgData, index) => {
                console.log("img " + index + " _+_+_>", imgData)


                Image.getSize(imgData, (width, height) => {
                    const props = {
                        iWidth: width,
                        iHeight: height,
                    };

                    const xProps = {
                        xNum: height / width,
                    };

                    imgWHArray.push(props);
                    xArray.push(xProps);
                });

            })

        }

        console.log("img W&H array -=-=->", imgWHArray);

        console.log("img X array -=-=->", xArray);

        this.setState({
            imgXArray: xArray,
            flowArray: imgUrl,
        })

    }

    _buildImgs = (imgItem) => {
        if (imgItem === null) return [];
        const imgs = getImgs(imgItem);
        let ulen = imgs.length;
        const showimg = [];
        let level = 0;
        let index = 0;
        let lineImgs = [];
        while (ulen > 0) {
            const url = imgs[index];
            const idx = index;
            const item = (
                <Col key={ulen}>
                    <TouchableOpacity activeOpacity={0.85} onPress={() => this._imgClick(idx)}>
                        <Image source={{uri: url}} style={styles.showImages}/>
                    </TouchableOpacity>
                </Col>
            );
            lineImgs.push(item);
            ulen -= 1;
            index += 1;
            level += 1;
            if (level === 3 || ulen === 0) {
                showimg.push(<Row key={ulen}>{lineImgs}</Row>);
                lineImgs = [];
                level = 0
            }
        }

        console.log("ImageGrid showimg ->", showimg);

        return showimg;
    };

    _imgClick = (idx) => {
        console.log("_imgClick idx =>", idx);
        this.setState({
            imgClick: true,
            imgNum: idx,
        })
    };

    _largePicClick = () => {
        this.setState({
            imgClick: false,
        })
    };


    render() {
        console.log("ImageGrid props ->", this.props);
        console.log("ImageGrid state ->", this.state);
        const {imgClick, imgXArray, imgNum, flowArray} = this.state;

        const imgs = this._buildImgs(constants.imgItems);

        console.log("imgs -=-=-=-->", imgs);

        if (!isEmpty(imgXArray)) {
            console.log("height xNum -=-> ", imgXArray[imgNum].xNum);
        }


        return (
            <View style={imgClick ? styles.imgPrevView : styles.container}>
                {
                    imgClick
                        ?
                        <TouchableWithoutFeedback onPress={() => this._largePicClick()}>
                            <Image
                                style={{
                                    width: window.width,
                                    height: window.width * imgXArray[imgNum].xNum,
                                }}
                                source={{uri: flowArray[imgNum]}}
                            />
                        </TouchableWithoutFeedback>
                        :
                        <View style={{
                            width: window.width,
                            height: window.width * 0.4 * imgs.length,
                            marginTop: 25,
                        }}>

                            <Grid style={{marginRight: 5, marginLeft: 5}}>
                                {imgs}
                            </Grid>
                        </View>
                }

            </View>
        )
    }
}

export default ImageGrid

