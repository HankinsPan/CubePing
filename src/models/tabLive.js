import { truthy, Storage, isEmpty } from "../utils/index";

export default {
    namespace: "tabLive",

    state: {
        loading: false,
        tabLives: []
    },


    subscriptions: {
        setup({ dispatch }) {
        }
    },


    effects: {
        * saveSortTabs({ payload }, { call, put }) {
            const _reSortArray = payload.rArray;
            console.log("_reSortArray  -=-->", _reSortArray);

            yield Storage.set("sortTabArray", { rSArray: _reSortArray });
        },

        * getLastSortTabs({ payload }, { call, put }) {
            yield put({ type: "showLoading" });

            const _lastTabArray = yield call(Storage.get, "sortTabArray");
            console.log("_lastTabArray -=-->", _lastTabArray);
            console.log("truthy(_lastTabArray) -->", truthy(_lastTabArray));

            if (truthy(_lastTabArray)) {
                yield put({
                    type: "getLastSortTabsSucc",
                    _lastTabArray
                });
            } else {
                yield put({
                    type: "getLastSortTabsFail"
                });
            }
        }

    },


    reducers: {
        showLoading(state) {
            return {
                ...state,
                loading: false
            };
        },

        setState(state, { payload }) {
            return {
                ...state,
                ...payload
            };
        },


        getLastSortTabsSucc(state, payload) {
            console.log("getLastSortTabsSucc payload =>", payload);

            const _TabArray = payload._lastTabArray.rSArray;

            return {
                ...state,
                tabLives: _TabArray,
                loading: false
            };
        },


        getLastSortTabsFail(state) {
            console.log("getLastSortTabsFail ");

            return {
                ...state,
                tabLives: [],
                loading: false
            };
        }

    }

};