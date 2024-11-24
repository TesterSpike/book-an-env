import {render, screen} from "@testing-library/react";
import {EnvironmentTableComponent} from "../EnvironmentTableComponent";

describe('TableComponent renders correctly', () => {
    const testData =
        [
            {
                "env": "TST1",
                "detail": "Some random text",
                "metadata": {
                    "frontendUrls": [
                        {
                            "feName": "FE1",
                            "url": "https://localhost:8080"
                        },
                        {
                            "feName": "FE2",
                            "url": "https://localhost:8080"
                        }
                    ],
                    "configManagerUrl": {
                        "cmName": "CM1",
                        "url": "https://localhost:8080"
                    }
                }
            },
            {
                "env": "TST2",
                "detail": "",
                "metadata": {
                    "frontendUrls": [
                        {
                            "feName": "FE1",
                            "url": "https://localhost:8080"
                        }
                    ],
                    "configManagerUrl": {
                        "cmName": "CM1",
                        "url": "https://localhost:8080"
                    }
                }
            },
        ]

    it('has a header row', async () => {
        render(<EnvironmentTableComponent data={testData} onRelease={jest.fn} onBooking={jest.fn}/>);
        expect((await screen.findAllByRole('columnheader'))[0]).toBeInTheDocument();
    });

    it('has content rows', async () => {
        render(<EnvironmentTableComponent data={testData} onRelease={jest.fn} onBooking={jest.fn}/>);
        expect((await screen.findAllByRole('row'))[0]).toBeInTheDocument();
        expect(await screen.findAllByRole('row')).toHaveLength(3);
        expect((await screen.findAllByRole('cell'))[0]).toBeInTheDocument();
    });
});