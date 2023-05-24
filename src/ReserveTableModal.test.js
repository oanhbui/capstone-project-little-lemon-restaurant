import { fireEvent, render, screen } from "@testing-library/react";
import ReserveTable from './ReserveTableModal';

describe('ReserveTable', () => {
    it('should render time slots correctly', async () => {
        const availableTimes = ['17:00', '18:00', '19:00', '20:00'];
        const dispatch = jest.fn();
        const rendered = await render(<ReserveTable availableTimes={availableTimes} dispatch={dispatch}/>);
        const reserveTableBtn = await rendered.getByText('Reserve a table').closest('button');
        expect(reserveTableBtn).toBeInTheDocument();
        console.log(reserveTableBtn);
        // await fireEvent.click(reserveTableBtn);
        // const timeSelectElement = screen.getByTestId('res-time');
        // console.log(timeSelectElement);
    });
})