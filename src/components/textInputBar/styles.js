import { StyleSheet, Platform, Dimensions } from "react-native";

const window = Dimensions.get("window");

import * as color from "../../utils/colors";

module.exports = StyleSheet.create({

    container: {
        flex: 1
    },

    headBarView: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "center",
        paddingBottom: 10,
        backgroundColor: "#CCC"
    },

    bodyBarView: {
        flex: 6,
        justifyContent: "center",
        backgroundColor: "#FFF"
    },

    headItemView: {
        width: window.width,
        height: window.width * 0.15,
        flexDirection: "row",
        alignItems: "center"
    },

    txtInputView: {
        width: window.width * 0.45,
        height: window.width * 0.12,
        fontSize: window.width === 320 ? 13 : 15,
        color: "#333",
        paddingTop: 5,
        paddingBottom: 5,
        marginRight: 5,


        borderColor: "#333",
        borderWidth: 1
    },

    txtBarView: {
        width: window.width,
        height: window.width * 0.12,
        flexDirection: "row",
        marginTop: 50,
        alignItems: "center"
    },

    txtContent: {
        fontSize: 16,
        color: "#666"
    }


});