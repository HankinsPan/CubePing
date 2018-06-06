import { truthy, isEmpty } from "../utils/index";

export default {
    namespace: "imgLoad",

    state: {
        loading: false,
        imgArray: []

    },

    subscriptions: {
        setup({ dispatch }) {

        }
    },


    effects: {},

    reducers: {
        showLoading(state) {
            return {
                ...state,
                loading: true
            };
        },

        setState(state, { payload }) {
            return {
                ...state,
                ...payload
            };
        }

    }
};

