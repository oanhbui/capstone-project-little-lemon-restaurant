import { fireEvent, render, screen } from "@testing-library/react";
import ReserveTable from './ReserveTableModal';

jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn()
}))
describe('ReserveTable', () => {
    beforeEach(() => {
        global.fetchAPI = jest.fn()
    })

    it('should render time slots correctly', async () => {
        global.fetchAPI.mockReturnValue(['4:00', '7:00']);


        const availableTimes = ['17:00', '18:00', '19:00', '20:00'];
        const dispatch = jest.fn();
        const rendered = await render(<ReserveTable availableTimes={availableTimes} dispatch={dispatch}/>);

        const reserveTableBtn = await rendered.getByText('Reserve a table').closest('button');
        expect(reserveTableBtn).toBeInTheDocument();
        await fireEvent.click(reserveTableBtn);
        const timeSelectElement = screen.getByTestId('res-time');
        expect(timeSelectElement.children.length).toBe(5);
    });

    it('should display invalid number of guest when input -1', async () => {
        const availableTimes = ['17:00', '18:00', '19:00', '20:00'];
        const dispatch = jest.fn();
        const rendered = await render(<ReserveTable availableTimes={availableTimes} dispatch={dispatch}/>);

        const reserveTableBtn = await rendered.getByText('Reserve a table').closest('button');
        expect(reserveTableBtn).toBeInTheDocument();
        await fireEvent.click(reserveTableBtn);

        const guestEl = await rendered.getByTestId('guests');
        fireEvent.change(guestEl, {target: {value: '-1'}});
        fireEvent.blur(guestEl);
        const errMsg = await rendered.getByTestId('guest-error-message');
        expect(errMsg.textContent).toBe('Please reserve for at least 1 guest');

    });

    it('should display error when not input guests', async () => {
        const availableTimes = ['17:00', '18:00', '19:00', '20:00'];
        const dispatch = jest.fn();
        const rendered = await render(<ReserveTable availableTimes={availableTimes} dispatch={dispatch}/>);

        const reserveTableBtn = await rendered.getByText('Reserve a table').closest('button');
        expect(reserveTableBtn).toBeInTheDocument();
        await fireEvent.click(reserveTableBtn);

        const guestEl = await rendered.getByTestId('guests');
        fireEvent.blur(guestEl);
        const errMsg = await rendered.getByTestId('guest-error-message');
        expect(errMsg.textContent).toBe('Please enter number of guests');

    })
})