import {render, screen} from "@testing-library/react";
import {EnvironmentTableRowComponent} from "../EnvironmentTableRowComponent";
import {EnvironmentData} from "../types/environmentData";
import React from "react";

const testData: EnvironmentData = {
    detail: "",
    env: "Test1",
    metadata: {
        frontendUrls: [
            {
                feName: "fe1",
                url: "https://fe1.url"
            },
            {
                feName: "fe2",
                url: "https://fe2.url"
            }
        ],
        configManagerUrl: {
            cmName: "cm1",
            url:"https://cm.url"
        }
    }
};

const testDataWithDetails:EnvironmentData = {
    detail: "Info Text", env: "Test1", metadata: {frontendUrls: [], configManagerUrl:{cmName: "CM1", url: "https://localhost:8080"}}
}

const testDataWithBooking:EnvironmentData = {
    bookingData: {
        bookedBy: "User 1",
        office: "LDN",
        shareable: "Yes",
        notes: "Test notes",
        bookingDate: "01-09-2024",
        untilTime: new Date(2024, 9, 1, 18),
    },
    detail: "", env: "Test 1", metadata: {frontendUrls: [], configManagerUrl:{cmName: "CM1", url: "https://localhost:8080"}}
}

describe('TableRowComponent', () => {
    it('renders correctly', async () => {
        render(<table><tbody><EnvironmentTableRowComponent row={testData} onRelease={jest.fn} onBooking={jest.fn}/></tbody></table>);

        expect(await screen.findAllByRole('row')).toHaveLength(1);
        expect(await screen.findAllByRole('cell')).toHaveLength(9);
    })

    it('has environment details', async () => {
        render(<table><tbody><EnvironmentTableRowComponent row={testData} onRelease={jest.fn} onBooking={jest.fn}/></tbody></table>);

        expect(screen.getByText('Test1')).toBeInTheDocument();
        expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

        expect(screen.getByText('fe1')).toBeInTheDocument();
        expect(screen.getByText('fe1').getAttribute('href')).toEqual('https://fe1.url');
        expect(screen.getByText('fe2')).toBeInTheDocument();
        expect(screen.getByText('fe2').getAttribute('href')).toEqual('https://fe2.url');

        expect(screen.getByText('cm1')).toBeInTheDocument();
        expect(screen.getByText('cm1').getAttribute('href')).toEqual('https://cm.url');
    });

    it('has info icon if has info details', async () => {
        render(<table><tbody><EnvironmentTableRowComponent row={testDataWithDetails} onRelease={jest.fn} onBooking={jest.fn}/></tbody></table>);

        expect(screen.getByRole('tooltip')).toBeInTheDocument();
    });

    it('has no booking details if not booked', async () => {
        render(<table><tbody><EnvironmentTableRowComponent row={testData} onRelease={jest.fn} onBooking={jest.fn}/></tbody></table>);

        expect(screen.getByRole('button')).toBeInTheDocument();
        expect(screen.getByRole('button').textContent).toEqual('Book');
        const cells = await screen.findAllByRole('cell');
        expect(cells[3].textContent).toEqual('');
        expect(cells[4].textContent).toEqual('');
        expect(cells[5].textContent).toEqual('');
        expect(cells[6].textContent).toEqual('');
        expect(cells[7].textContent).toEqual('');
    })

    it('has booking details if booked', async () => {
        render(<table><tbody><EnvironmentTableRowComponent row={testDataWithBooking} onRelease={jest.fn} onBooking={jest.fn}/></tbody></table>);

        expect(screen.getByRole('button')).toBeInTheDocument();
        expect(screen.getByRole('button').textContent).toEqual('Release');
        const cells = await screen.findAllByRole('cell');
        expect(cells[3].textContent).toEqual('User 1');
        expect(cells[4].textContent).toEqual('LDN');
        expect(cells[5].textContent).toEqual('01/10/2024, 18:00:00');
        expect(cells[6].textContent).toEqual('Yes');
        expect(cells[7].textContent).toEqual('Test notes');
    });
});
