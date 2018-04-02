import requestGet from '../utils/requestGet';


export const getMovieList = async function (params) {
    const sWords = params.sWords;

    return requestGet(`q=${sWords}&apikey=0b2bdeda43b5688921839c8ecb20399b`, null);
};


export const getMovieNextPage = async function (params) {
    const sWords = params.sWords;
    const page = params.pageNo;

    return requestGet(`q=${sWords}&apikey=0b2bdeda43b5688921839c8ecb20399b&start=${page}`, null);
};