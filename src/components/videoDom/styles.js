import { StyleSheet, Platform, Dimensions } from "react-native";

const deivceW = Dimensions.get("window").width;

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",

        backgroundColor: "#FFF"
    }
});