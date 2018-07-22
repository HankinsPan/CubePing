import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import ImageBrowse from "react-native-images-browse";
import { ImageGallery } from "@nlabs/react-native-image-gallery";

const _imgs = [
    require("../../images/pic/pic_one.jpg"),
    require("../../images/pic/pic_two.png"),
    require("../../images/pic/pic_seven.jpg"),
    require("../../images/pic/pic_six.png"),
    require("../../images/pic/pic_five.jpeg"),
    require("../../images/pic/pic_three.jpg"),
    require("../../images/pic/pic_egit.jpg"),
    require("../../images/pic/pic_four.jpeg")
    // require("../../images/pic/pic_egit.jpg"),
    // require("../../images/pic/pic_four.jpeg"),
    // require("../../images/pic/pic_egit.jpg"),
    // require("../../images/pic/pic_four.jpeg"),
    // require("../../images/pic/pic_one.jpg")
];

// const _imgs = [
//     "https://i.imgur.com/UYiroysl.jpg",
//     "https://i.imgur.com/UPrs1EWl.jpg",
//     "https://i.imgur.com/MABUbpDl.jpg",
//     "https://i.imgur.com/KZsmUi2l.jpg",
//     "https://i.imgur.com/2nCt3Sbl.jpg"
// ];


const images = [
    {
        uri: "https://i.imgur.com/UYiroysl.jpg",
        id: "1",
        title: "A",
        description: "aaa"
    },
    {
        uri: "https://i.imgur.com/UPrs1EWl.jpg",
        id: "2",
        title: "B",
        description: "bbb"
    },
    {
        uri: "https://i.imgur.com/KZsmUi2l.jpg",
        id: "3",
        title: "C",
        description: "cc"
    },
    {
        uri: "https://i.imgur.com/2nCt3Sbl.jpg",
        id: "4",
        title: "D",
        description: "ddddd"
    },
    {
        uri: "https://i.imgur.com/UYiroysl.jpg",
        id: "5",
        title: "A",
        description: "aaa"
    },
    {
        uri: "https://i.imgur.com/UPrs1EWl.jpg",
        id: "6",
        title: "B",
        description: "bbb"
    }
];


class SmallPage extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        console.log("SmallPage props -=->", this.props);

        const imageUrls = images.map((img) => ({
              url: img.uri,
              id: img.id,
              title: img.title,
              description: img.description
          })
        );

        return (
          <View style={styles.container}>

              <ImageGallery images={imageUrls}/>

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

    txtView: {
        fontSize: 22,
        color: "#333333"
    }
});


export default SmallPage;