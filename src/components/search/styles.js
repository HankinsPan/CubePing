import * as color from "../../utils/colors";
import { StyleSheet, Platform, Dimensions } from "react-native";
import { deviceW } from "../../utils";

const window = Dimensions.get("window");


module.exports = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#F2F2F2"
    },

    searchHeadView: {
        width: window.width,
        height: window.width * 0.13,
        flexDirection: "row",
        alignItems: "flex-end",

        backgroundColor: "#FFF",
        borderBottomWidth: 1,
        borderBottomColor: "rgba(0,0,0,0.05)"
    },

    searchBarView: {
        width: window.width * 0.72,
        height: window.width * 0.1,
        flexDirection: "row",
        margin: 5,

        paddingLeft: 5,
        alignItems: "flex-end",

        backgroundColor: "rgba(0,0,0,0.05)",
        borderRadius: window.width * 0.08
    },


    cancelView: {
        width: window.width * 0.16,
        height: window.width * 0.1,
        margin: 5,
        justifyContent: "center"
    },

    selectView: {
        width: window.width * 0.12,
        height: window.width * 0.1,
        margin: 5,
        backgroundColor: "rgba(0,0,0,0.05)",
        justifyContent: "center"
    },

    iconView: {
        width: 23,
        height: window.width * 0.1,
        justifyContent: "center"

    },

    searchInput: {
        width: window.width * 0.75,
        height: window.width * 0.1,
        fontSize: window.width === 320 ? 13 : 15,
        paddingTop: 5,
        paddingBottom: 5
    },


    cancelTxt: {
        fontSize: window.width === 320 ? 14 : 16,
        color: color.TEXT_INFO_COLOR

    },

    loadFooterView: {
        flex: 1,
        justifyContent: "center"
    },

    footerLoadView: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#FFF",
        justifyContent: "center",
        paddingBottom: 20,
        paddingTop: 20
    },


    searchItemView: {
        flex: 1,
        flexDirection: "row",
        padding: 10,
        alignItems: "center",
        backgroundColor: "#FFF",

        borderBottomWidth: 1,
        borderBottomColor: "rgba(0,0,0,0.05)"
    },

    searchHisView: {
        flex: 1,
        flexDirection: "column"

    },

    hotSearchView: {
        flex: 1,
        justifyContent: "center",
        padding: 10
    },

    hotTipsTitleView: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        paddingLeft: 5,
        paddingRight: 5
    },

    typeOrgView: {
        flex: 1,
        flexDirection: "column",
        width: window.width * 0.35
    },

    typeItemView: {
        width: window.width * 0.3,
        height: window.width * 0.1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFF",
        borderBottomWidth: 0.5,
        borderBottomColor: "rgba(0,0,0,0.05)"
    },

    historyFooterBar: {
        flex: 1,
        padding: 12.5,
        marginBottom: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFF",
        borderBottomWidth: 1,
        borderBottomColor: "rgba(0,0,0,0.05)"
    },

    historyItemView: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#FFF",
        borderBottomWidth: 1,
        borderBottomColor: "rgba(0,0,0,0.05)"
    },

    sListItemView: {
        flex: 1,
        flexDirection: "row",
        padding: 10,
        alignItems: "center",
        borderBottomWidth: 0.5,
        borderBottomColor: "rgba(0,0,0,0.05)"

    },

    hisItemView: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    },

    searchFootView: {
        flex: 1,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20
    },

    searchImg: {
        width: window.width * 0.14,
        height: window.width * 0.14,
        borderRadius: window.width * 0.07
    },

    cleanIconView: {
        width: window.width * 0.15,
        justifyContent: "center",
        alignItems: "flex-end"
        // backgroundColor: "rgba(0,0,0,0.05)"
    },

    resItemView: {
        flex: 1,
        padding: 10,
        marginTop: 5,
        backgroundColor: "#FFF"
    },

    resItemContentView: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 2.5,
        paddingBottom: 2.5
    },

    sResTabBarView: {
        flex: 1,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: "#FFF",
        justifyContent: "center"
    },

    sResComBarView: {
        flex: 1

    },

    sResTabBarTxt: {
        fontSize: window.width === 320 ? 12 : 14,
        color: "#999"
    },

    sResItemTitleTxt: {
        fontSize: window.width === 320 ? 14 : 16,
        color: "#777"
    },

    hIconStyle: {
        width: 20,
        height: 20,
        alignItems: "center",
        justifyContent: "center"
    },

    sIconView: {
        width: 18,
        height: 18,
        alignItems: "center",
        justifyContent: "center"
    },

    historyFooterTxt: {
        fontSize: window.width === 320 ? 14 : 16,
        color: color.TEXT_INFO_COLOR
    },

    itemTitleTxt: {
        fontSize: 23,
        marginLeft: 5,
        color: color.HANKINS_BG
    },

    typeTxt: {
        fontSize: window.width === 320 ? 12 : 14,
        color: "#777"
    },

    sListTxt: {
        fontSize: window.width === 320 ? 12 : 14,
        color: "#777"
    },

    itemYearTxt: {
        fontSize: 13,
        marginLeft: 5,
        color: color.DEFAULT_BG_COLOR
    },

    searchHisTitleTxt: {
        fontSize: 16,
        color: color.HANKINS_BG,
        margin: 10

    },

    hotTipsTxt: {
        margin: 10,
        fontSize: window.width === 320 ? 14 : 16,
        color: "#777"
    },

    hotKeyTxt: {
        fontSize: window.width === 320 ? 12 : 14,
        color: "#FFF"
    },

    hotKeyView: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,

        backgroundColor: color.STATE_HEALTH
    },

    hisItemTxt: {
        fontSize: window.width === 320 ? 14 : 16,
        color: color.HANKINS_BG
    }
});