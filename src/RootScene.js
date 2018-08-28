import React, { PureComponent } from "react";
import { BackHandler, StatusBar, ToastAndroid } from "react-native";
import {
    StackNavigator,
    TabNavigator,
    TabBarBottom,
    addNavigationHelpers,
    NavigationActions
} from "react-navigation";
import {
    createReduxBoundAddListener,
    createReactNavigationReduxMiddleware
} from "react-navigation-redux-helpers";

import { connect } from "react-redux";

import SplashScreen from "react-native-splash-screen";
import * as color from "./utils/colors";
import StartScene from "./scene/start/StartPage";
import StartSceneV2 from "./scene/start/StartPageV2";
import StartSceneV3 from "./scene/start/StartPageV3";
import StartSceneV4 from "./scene/start/StartPageV4";


import ItemCheckPage from "./components/itemCheck/itemCheckPage";
import DraggablePage from "./components/draggable/dragPage";
import SwiperPage from "./components/swiperPage/swiperPage";

import SlidePage from "./components/slideCard/slideCard";
import StatusPage from "./components/statusPages/statusBarPage";

import SearchPage from "./components/search/searchPage";
import SearchPageV2 from "./components/search/searchPageV2";
import SearchPageV3 from "./components/search/searchPageV3";

import AreaPage from "./components/areaPage/areaPage";
import ToastPage from "./components/toastPage/toastPage";
import VideoPlayer from "./components/videoPlayer/videoPlayer";
import VideoPlayerV2 from "./components/videoPlayer/videoPlayerV2";
import ContextPage from "./components/contextPage/contextPageOne";
import CarouselPage from "./components/carouselPage/carouselPage";
import ScrollPageH from "./components/carouselPage/scrollPage";
import ImageGrid from "./components/imageGrid/imageDrid";
import AnimPage from "./components/animPage/animViewPage";
import ImageCarousel from "./components/imageCarousel/imageCarousel";
import PdfPage from "./components/pdfPage/pdfScene";

import DomPage from "./components/domPage/domPage";
import CallBackScene from "./components/callBackPage/callBackPage";
import ScrollPage from "./components/scrollPage/scrollPage";
import LiveTabPage from "./components/liveTabPage/liveTabPage";
import ImgScanPage from "./components/imageScanPage/imageScanPage";
import ImgScanV2 from "./components/imageScanPage/imageScanV2";
import ImgScanV3 from "./components/imageScanPage/imageScanV3";
import ImgTypeSet from "./components/imageScanPage/imgTypeSet";
import TextInputBar from "./components/textInputBar/textInputBar";
import ImgScanPageV2 from "./components/imgScanPageV2/ImgScanPageV2";

import NukaCarousel from "./components/nukaCarousel/nukaCarousel";
import SmallPage from "./components/smallPage/smallPage";

import VideoRecord from "./components/videoDom/videoRecord";
import GlassView from "./components/glassView/glassPage";

const AppNavigator = StackNavigator(
  {
      Main: { screen: StartScene },

      ItemCheck: { screen: ItemCheckPage },
      Draggable: { screen: DraggablePage },
      SwiperPage: { screen: SwiperPage },

      SlidePage: { screen: SlidePage },
      StatusPage: { screen: StatusPage },

      Search: { screen: SearchPage },
      SearchUp: { screen: SearchPageV2 },
      SearchNew: { screen: SearchPageV3 },
      AreaPage: { screen: AreaPage },

      ToastPage: { screen: ToastPage },
      VideoPage: { screen: VideoPlayerV2 },
      ContextPage: { screen: ContextPage },
      CarouselPage: { screen: CarouselPage },
      ScrollPageV2: { screen: ScrollPageH },
      ImageGrid: { screen: ImageGrid },
      AnimPage: { screen: AnimPage },
      ImageCarousel: { screen: ImageCarousel },
      DomPage: { screen: DomPage },
      PdfPage: { screen: PdfPage },

      CallBackPage: { screen: CallBackScene },

      ScrollPage: { screen: ScrollPage },
      LiveTabPage: { screen: LiveTabPage },
      ImgScanPage: { screen: ImgScanPage },
      ImgScanV2: { screen: ImgScanV2 },
      ImgScanV3: { screen: ImgScanV3 },
      ImgTypeSet: { screen: ImgTypeSet },
      TextInputBar: { screen: TextInputBar },
      ImgScanPageV2: { screen: ImgScanPageV2 },
      NukaCarousel: { screen: NukaCarousel },
      SmallPage: { screen: SmallPage },

      VideoRecord: { screen: VideoRecord },
      GlassView: { screen: GlassView }
  },
  {
      headerMode: "none",
      mode: "modal",
      navigationOptions: {
          headerStyle: { backgroundColor: color.LINE_NOMAL_COLOR },
          headerBackTitle: null,
          //headerBackTitle: '返回',
          // headerTintColor: '#333333',
          headerTintColor: color.HANKINS_DARK,
          showIcon: true
      }
  }
);

function getCurrentScreen(navigationState) {
    if (!navigationState) {
        return null;
    }
    const route = navigationState.routes[navigationState.index];
    if (route.routes) {
        return getCurrentScreen(route);
    }
    return route.routeName;
}

export const routerMiddleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.router
);
const addListener = createReduxBoundAddListener("root");


@connect(({ router }) => ({ router }))
class Router extends PureComponent {
    constructor(props) {
        super(props);
        StatusBar.setBarStyle("light-content");
    }

    componentWillMount() {
        BackHandler.addEventListener("hardwareBackPress", this.backHandle);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.backHandle);
    }

    backHandle = () => {
        const currentScreen = getCurrentScreen(this.props.router);

        if (currentScreen === "SignInNavigator") {
            BackHandler.exitApp();
        } else if (currentScreen !== "Home") {
            this.props.dispatch(NavigationActions.back());
            return true;
        } else {
            if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
                return false;
            }
            this.lastBackPressed = Date.now();
            ToastAndroid.show("再次点击退出应用", ToastAndroid.SHORT);
            return true;
        }

        return false;
    };

    render() {
        const currentScreen = getCurrentScreen(this.props.router);
        console.log("Router props ->", this.props);
        console.log("currentScreen ->", currentScreen);

        const { dispatch, router } = this.props;

        const navigation = addNavigationHelpers({
            dispatch,
            state: router,
            addListener
        });
        return <AppNavigator navigation={navigation}/>;
    }
}

export function routerReducer(state, action = {}) {
    return AppNavigator.router.getStateForAction(action, state);
}

export default Router;