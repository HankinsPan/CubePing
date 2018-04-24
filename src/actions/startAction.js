export const GET_STARTPAGE = 'start/getStartPage';

export const getStartPage = (payload) => {
    return {
        type: GET_STARTPAGE,
        payload,
    }
};