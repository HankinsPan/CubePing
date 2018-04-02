import React from 'react'
import {AppRegistry} from 'react-native'

import dva from './utils/dva'
import Router, {routerMiddleware} from './RootScene'

import routerModel from './models/router'
import movieModel from './models/movie'

const app = dva({
    initialState: {},
    models: [
        routerModel,
        movieModel,
    ],
    onAction: [routerMiddleware],
    onError(e) {
        console.log('onError', e)
    },
});

const App = app.start(<Router/>);

// 关闭全部的警告
console.disableYellowBox = true;

AppRegistry.registerComponent('ClubPing', () => App);