import React from "react";
import { AppRegistry } from "react-native";

import dva from "./utils/dva";
import Router, { routerMiddleware } from "./RootScene";

import routerModel from "./models/router";
import movieModel from "./models/movie";
import startModel from "./models/start";
import tabLiveModel from "./models/tabLive";
import imgLoadModel from "./models/imgLoad";

const app = dva({
    initialState: {},
    models: [
        routerModel,
        movieModel,
        startModel,
        tabLiveModel,
        imgLoadModel
    ],
    onAction: [routerMiddleware],
    onError(e) {
        console.log("onError", e);
    }
});

const App = app.start(<Router/>);

// 关闭全部的警告
console.disableYellowBox = true;

AppRegistry.registerComponent("ClubPing", () => App);