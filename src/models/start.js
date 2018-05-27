import {NavigationActions, truthy, isEmpty, Storage} from '../utils/index';

import * as movieServer from '../server/dBanServer';

export default {
    namespace: 'start',

    state: {
        loading: false,
        pageData: [],

        pageInfo: {
            name:'hankins',
            age:26,
            gander:'男',
            sc:'Software Developer'
        },
    },

    subscriptions: {
        setup({dispatch}) {
        },
    },

    effects: {
        * getStartPage({payload}, {call, put, select}) {
            yield put({type: 'showLoading'});

            const props = {
                sWords: payload.sName,
            };

            const pInfo = yield select(state => state.start.pageInfo);

            console.log("getStartPage pInfo ->", pInfo);

            const {data} = yield call(movieServer.getMovieList, props);

            if (truthy(data)) {
                yield put({
                    type: 'getStartPageSucc',
                    data,
                })
            } else {
                yield put({type: 'setState'})
            }
        },

    },

    reducers: {
        showLoading(state) {
            return {...state, loading: true}
        },

        setState(state, {payload}) {
            return {...state, ...payload}
        },

        getStartPageSucc(state, payload) {
            console.log("getStartPageSucc payload =>", payload);

            return {...state, loading: false}
        },


    },
}