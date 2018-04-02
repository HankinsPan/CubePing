export {NavigationActions} from 'react-navigation'
import {Dimensions} from 'react-native';

const deviceH = Dimensions.get('window').height;
const deviceW = Dimensions.get('window').width;

export {default as Storage} from './storage'

export const delay = time => new Promise(resolve => setTimeout(resolve, time));

export const createAction = type => payload => ({type, payload});

export const truthy = (item) => {
    if (item === null || item === undefined) {
        return false
    }
    return true
};


/**
 * 判断obj是否为空
 * @param e
 * @returns {boolean}
 */
export const isEmptyObject = (e) => {
    var t;
    for (t in e)
        return false;
    return true
};


/**
 * 判断是否为空
 * @param obj
 * @returns {boolean}
 */
export const isEmpty = (obj) => {
    if (obj === null)
        return true;

    if (obj === undefined)
        return true;

    if (obj.length > 0)
        return false;

    if (obj.length === 0)
        return true;

    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key))
            return true
    }

    return true;
};

/**
 * JSON 数组去重 by Key
 * @param array
 * @param key
 * @returns {*}
 */
export const uniqueByKey = (array, key) => {
    console.log(">>>>>>> array ->", array);
    console.log(">-----> key ->", key);

    if (!truthy(array)) {
        return array
    }

    let mArray = [];
    array.forEach((aData) => {
        if (aData) {
            mArray.push(aData);
        }
    });

    console.log("uniqueByKey mArray ->", mArray);
    const _result = [mArray[0]];

    console.log("_result -=-+++++++-->", _result);

    for (let i = 0; i < mArray.length; i++) {
        let item = mArray[i];
        let repeat = false;

        for (let j = 0; j < _result.length; j++) {
            if (item[key] === _result[j][key]) {
                repeat = true;
                break
            }
        }

        if (!repeat) {
            _result.push(item)
        }
    }

    return _result;
};
