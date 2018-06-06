import { StyleSheet, Platform, Dimensions } from "react-native";

const window = Dimensions.get("window");

module.exports = StyleSheet.create({

    container: {
        flex: 1,
    },

    gridView: {
        flex: 1,
        marginTop: 40
    },

    block: {
        flex: 1,
        margin: 8,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center"
    }

});