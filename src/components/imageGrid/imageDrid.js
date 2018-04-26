import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    ActivityIndicator,
    Dimensions,
} from 'react-native';

import * as color from '../../utils/colors';
import * as constants from '../../utils/constants';

import {Col, Row, Grid} from 'react-native-easy-grid';
import {getImgs, isEmpty, truthy} from "../../utils/index";

const styles = require('./styles');
const window = Dimensions.get('window');

class ImageGrid extends Component {

    constructor(props) {
        super(props);
        this.state = {}
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
    };

    render() {
        console.log("ImageGrid props ->", this.props);
        console.log("ImageGrid state ->", this.state);

        const imgs = this._buildImgs(constants.imgItems);
        console.log("ImageGrid imgs ->", imgs.length);

        return (
            <View style={styles.container}>

                {
                    isEmpty(imgs)
                        ?
                        <ActivityIndicator
                            size='large'
                            color={color.TEXT_INFO_COLOR}
                        />
                        :
                        <ScrollView>
                            <View style={{
                                width: window.width,
                                height: window.width * 0.4 * imgs.length,
                                marginTop: 25,
                            }}>

                                <Grid style={{marginRight: 5, marginLeft: 5}}>
                                    {imgs}
                                </Grid>
                            </View>
                        </ScrollView>
                }

            </View>
        )
    }
}

export default ImageGrid