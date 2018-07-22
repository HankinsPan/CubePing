import { StyleSheet, Platform, Dimensions } from "react-native";

const window = Dimensions.get("window");

import * as color from "../../utils/colors";

module.exports = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },

    carCardView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFF"
    },

    sCardView: {
        width: window.width * 0.8,
        height: window.width * 0.45,
        backgroundColor: color.STATE_TIPS
    },

    pageTxt: {
        fontSize: 20,
        color: "#FFF"
    }


});