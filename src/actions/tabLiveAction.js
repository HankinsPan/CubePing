export const SAVE_SOERT_TABS = "tabLive/saveSortTabs";
export const GET_LAST_SORTTABS = "tabLive/getLastSortTabs";

export function saveSortTabs(payload) {
    return {
        type: SAVE_SOERT_TABS,
        payload
    };
}

export function getLastSortTabs() {
    return {
        type: GET_LAST_SORTTABS
    };
}