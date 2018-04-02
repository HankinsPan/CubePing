export const GET_MOVIE_LIST = 'movie/getMovieList';
export const GET_MOVIE_NEXT = 'movie/getMovieNextPage';


export const SAVE_SEARCH_KEYLIST = 'movie/saveSearchKeyList';
export const GET_SEARCH_HISLIST = 'movie/getSearchHisList';

export function getMovieList(payload) {
    return {
        type: GET_MOVIE_LIST,
        payload,
    }
}

export function getMovieNextPage(payload) {
    return {
        type: GET_MOVIE_NEXT,
        payload,
    }
}

export function saveSearchKeyList(payload) {
    return {
        type: SAVE_SEARCH_KEYLIST,
        payload,
    }
}

export function getSearchHisList() {
    return {
        type: GET_SEARCH_HISLIST,
    }
}