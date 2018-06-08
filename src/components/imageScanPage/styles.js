import { StyleSheet, Platform, Dimensions } from "react-native";

const window = Dimensions.get("window");
const CIRCLE_SIZE = 80;

import * as color from "../../utils/colors";

module.exports = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center"
    },

    orgView: {
        flex: 1,
        paddingTop: 80,

        justifyContent: "center",
        backgroundColor: "#FFF"
    },

    showImgView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.85)"
    },

    showImgViewV2: {
        width: window.width,
        height: window.width / 3,
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: "rgba(0,0,0,0.05)"

    },

    scrollContainer: {
        flexDirection: "row",
        width: window.width,
        height: window.height
    },

    visImgView: {
        width: window.width
    },

    circle: {
        width: CIRCLE_SIZE,
        height: CIRCLE_SIZE,
        borderRadius: CIRCLE_SIZE / 2,
        position: "absolute",
        left: 0,
        top: 0
    },

    cubeView: {
        width: 100,
        height: 100,
        marginTop: 100,
        marginLeft: 100
    },

    imgView: {
        width: window.width * 0.4,
        height: window.width * 0.3
    },


    imgCube: {
        width: window.width * 0.8,
        height: window.width * 0.5,
        marginBottom: 10
    }

});