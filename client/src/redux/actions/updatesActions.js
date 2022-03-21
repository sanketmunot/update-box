import { UpdateActions } from "../constants/updatesConstants";

export const setRecentUpdates = (recentUpdates) =>{
    return {
        type: UpdateActions.SET_RECENT_UPDATES,
        payload: recentUpdates
    }
}

export const addRecentUpdate = (update) => {
    return {
        type: UpdateActions.ADD_RECENT_UPDATE,
        payload: update
    }
}