import {ACTIONS} from '../constants';


export const updateTimeReducer = (state, action) => {
    if (action.type === ACTIONS.SET_TIME_SLOT) {
        return action.availableTimes;
    }
    if (action.type === ACTIONS.BOOKING_TIME) {
        const selected = action.time;
        return state.filter(time => time !== selected);
    }
    return state;
};