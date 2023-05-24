import { updateTimeReducer } from './timeslots';
import { ACTIONS } from '../constants';

describe('Test updateTimeReducer', () => {
    it('should return original state when action is not found', () => {
        const originalState = 892394792343243223;
        expect(updateTimeReducer(originalState, { type: 'oiasjdoiafjoisdfdf' })).toBe(originalState)
    });

    it('should remove selected time', () => {
        const timeSlots = ['17:00', '18:00', '19:00'];
        expect(updateTimeReducer(timeSlots, { type: ACTIONS.BOOKING_TIME, time: '18:00' })).toEqual(['17:00', '19:00'])
    })
})