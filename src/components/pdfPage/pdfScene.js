import React, {Component} from 'react';
import {
    View,
} from 'react-native';

import Pdf from 'react-native-pdf';

const styles = require('./styles');


class PdfPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seePage: 0,
            totalPage: 0,
        }
    }

    _pdfError = (error) => {
        alert(error)
    };

    _pdfLoadInfo = (numberOfPages, filePath) => {
        console.log("all number -=-->", numberOfPages);
        console.log("filePath --=->", filePath);

        this.setState({
            totalPage: numberOfPages,
        })
    };

    _pdfScrollPage = (page, numberOfPages) => {
        console.log('scroll page -=-->', page);
        console.log('scroll numberOfPages -=->', numberOfPages);
        this.setState({
            seePage: page,
        })
    };

    render() {
        console.log("pdfPage props -=->", this.props);
        console.log("pdfPage state -=->", this.state);
        const {
            seePage,
            totalPage,
        } = this.state;

        return (
            <View style={styles.container}>
                <Pdf
                    source={require('../../doc/doc_server.pdf')}
                    // source={null}
                    onLoadComplete={(numberOfPages, filePath) => this._pdfLoadInfo(numberOfPages, filePath)}
                    onPageChanged={(page, numberOfPages) => this._pdfScrollPage(page, numberOfPages)}
                    onError={(error) => this._pdfError(error)}
                    style={styles.pdf}
                />

                {
                    seePage === totalPage
                        ? <View style={{marginBottom: 30, backgroundColor: '#CCC'}}/>
                        : null
                }
            </View>
        )
    }
}

export default PdfPage

