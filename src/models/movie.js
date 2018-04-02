import {NavigationActions, truthy, Storage, isEmpty} from '../utils/index';

import * as movieServer from '../server/dBanServer';

export default {
    namespace: 'movie',

    state: {
        loading: false,
        loadNext: false,

        movieList: [],
        moviePage: 0,
        movieStatus: 0,

        movieSearchList: [],
    },

    subscriptions: {
        setup({dispatch}) {
        }
    },

    effects: {
        * getMovieList({payload}, {call, put}) {
            yield put({type: 'showLoading'});

            const sProps = {
                sWords: payload.kWords,
            };

            const {data} = yield call(movieServer.getMovieList, sProps);
            console.log("data -=->", data);

            if (truthy(data)) {
                yield put({
                    type: 'getMovieSucc',
                    data,
                })
            } else {
                yield put({type: 'setState'})
            }
        },


        * getMovieNextPage({payload}, {call, put}) {
            yield put({type: 'loadNextPage'});

            const sProps = {
                sWords: payload.kWords,
                pageNo: payload.pageNo,
            };

            const {data} = yield call(movieServer.getMovieNextPage, sProps);

            if (truthy(data)) {
                yield put({
                    type: 'getMovieSucc',
                    data,
                })
            } else {
                yield put({type: 'setState'})
            }
        },


        * saveSearchKeyList({payload}, {call, put}) {
            const _saveList = payload.searchKeyList;

            console.log("saveSearchKeyList -=-->", _saveList);

            let oldTips = yield call(Storage.get, 'searchHistory');

            let saveArray = [];
            let _insList = null;

            if (truthy(oldTips)) {
                saveArray = oldTips.sKeyList;
            }

            _insList = saveArray.concat(_saveList);

            console.log("_insList -=- =-=-=--> ", _insList);

            yield Storage.set('searchHistory', {sKeyList: _insList});
        },

        * getSearchHisList({payload}, {call, put}) {
            yield put({type: 'showLoading'});

            const searchHisList = yield call(Storage.get, 'searchHistory');

            console.log("searchHisList -=-=-=--=-=-=-->", searchHisList);

            if (truthy(searchHisList)) {
                yield put({
                    type: 'getSearchListSucc',
                    searchHisList,
                })
            } else {
                yield put({
                    type: 'getSearchListFail'
                })
            }

        },


    },

    reducers: {
        showLoading(state) {
            return {...state, loading: true}
        },

        loadNextPage(state) {
            return {...state, loadNext: true}
        },

        setState(state, {payload}) {
            return {...state, ...payload}
        },

        getMovieSucc(state, payload) {
            console.log("getMovieSucc payload =>", payload);
            const movieData = payload.data.subjects;
            const _moviePage = payload.data.count;


            let status = null;
            if (isEmpty(movieData)) {
                status = 1;
            } else {
                status = 0;
            }

            return {
                ...state,
                movieList: movieData,
                moviePage: _moviePage,
                movieStatus: status,
                loading: false,
            }
        },


        getSearchListSucc(state, payload) {
            console.log("getSearchListSucc payload =>", payload);

            const _searchHisList = payload.searchHisList.sKeyList;

            return {...state, movieSearchList: _searchHisList, loading: false}
        },

        getSearchListFail(state) {
            console.log("getSearchListFail ");

            return {...state, movieSearchList: [], loading: false}
        }

    },

}