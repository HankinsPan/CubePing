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