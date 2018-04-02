import {NORAML_FETCH} from './constants'
import {isEmpty} from "./index";

require('es6-promise').polyfill();
require('fetch-everywhere');

function parseJSON(response) {
    return response.json();
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

export default function request(restful) {
    console.log("get url ->", NORAML_FETCH + restful);

    return fetch(NORAML_FETCH + restful)
        .then(checkStatus)
        .then(parseJSON)
        .then(data => ({data}))
        .catch(err => ({err}))
}