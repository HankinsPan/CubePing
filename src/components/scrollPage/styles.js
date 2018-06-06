import { StyleSheet, Platform, Dimensions } from "react-native";

const window = Dimensions.get("window");

module.exports = StyleSheet.create({

    container: {
        flex: 1,
    },

    zSwiperView: {
        width: window.width,
        height: window.width * 0.65,
        marginTop:40,
    },

    swiper: {
        backgroundColor: "white"
    },

    cell: {
        backgroundColor: "red",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }

});