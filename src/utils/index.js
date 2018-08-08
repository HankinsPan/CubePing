export { NavigationActions } from "react-navigation";
import { Dimensions } from "react-native";

export const deviceH = Dimensions.get("window").height;
export const deviceW = Dimensions.get("window").width;

export { default as Storage } from "./storage";

export const delay = time => new Promise(resolve => setTimeout(resolve, time));

export const createAction = type => payload => ({ type, payload });

export const truthy = (item) => {
    if (item === null || item === undefined) {
        return false;
    }
    return true;
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
    return true;
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
            return true;
    }

    return true;
};

/**
 * 将Object转成Array
 * @param obj
 * @returns {Array}
 */
export const obj2Array = (obj) => {
    const mArray = [];
    for (let [key, value] of Object.entries(obj)) {
        const oProps = {
            key,
            value
        };

        mArray.push(oProps);
    }

    return mArray;
};

export const objValueAcc = (obj) => {
    let total = 0;

    for (let [key, value] of Object.entries(obj)) {
        // console.log("key -=-->", key);
        // console.log("value ->", value);

        total += parseInt(value);
    }

    return total;
};

/**
 * 简单数组去重
 * @param array
 */
export const uniqueArrayNormal = (array) => {
    console.log("uniqueArrayNormal array ->", array);

    if (!truthy(array)) {
        return array;
    }
    let mArray = [];

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                i++;
                j = i;
            }
        }
        mArray.push(array[i]);
    }

    console.log("mArray ->", mArray);

    return mArray;
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
        return array;
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
                break;
            }
        }

        if (!repeat) {
            _result.push(item);
        }
    }

    return _result;
};

export const checkImage = (imageUrl) => {
    if (truthy(imageUrl) && imageUrl.length > 1) {
        return true;
    }
    return false;
};

export const getImgs = (item) => {
    const imgs = [];
    if (item === null) return imgs;
    if (item.img1 === null) return imgs;
    if (checkImage(item.img1)) {
        imgs.push(item.img1);
    }

    if (item.img2 === null) return imgs;
    if (checkImage(item.img2)) {
        imgs.push(item.img2);
    }

    if (item.img3 === null) return imgs;
    if (checkImage(item.img3)) {
        imgs.push(item.img3);
    }

    if (item.img4 === null) return imgs;
    if (checkImage(item.img4)) {
        imgs.push(item.img4);
    }

    if (item.img5 === null) return imgs;
    if (checkImage(item.img5)) {
        imgs.push(item.img5);
    }

    if (item.img6 === null) return imgs;
    if (checkImage(item.img6)) {
        imgs.push(item.img6);
    }

    if (item.img7 === null) return imgs;
    if (checkImage(item.img7)) {
        imgs.push(item.img7);
    }

    if (item.img8 === null) return imgs;
    if (checkImage(item.img8)) {
        imgs.push(item.img8);
    }

    if (item.img9 === null) return imgs;
    if (checkImage(item.img9)) {
        imgs.push(item.img9);
    }

    return imgs;
};
