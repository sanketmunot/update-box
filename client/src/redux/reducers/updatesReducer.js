import { UpdateActions } from "../constants/updatesConstants";
import { combineReducers } from "redux";
const initialState = [];

function add_update(state, payload) {
    // state.pop()
    // state.push(payload)
    console.log('state',state)
    console.log('payload',payload);
    
    return [payload,...state.slice(0,6)]
}
export const recentUpdatesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UpdateActions.SET_RECENT_UPDATES:
      return payload;
    case UpdateActions.ADD_RECENT_UPDATE:
      return add_update(state, payload);
    default:
      return state;
  }
};

const updatesReducers = combineReducers({
  recentUpdates: recentUpdatesReducer,
});

export default updatesReducers;
