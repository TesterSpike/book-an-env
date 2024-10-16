import './App.css';
import React, {useState} from "react";
import EnvironmentTableComponent from "./component/table/EnvironmentTableComponent";
import {EnvironmentData} from "./component/table/types/environmentData";
import {BookingFormModalData} from './component/modal/types/BookingFormModalData';


const rows: EnvironmentData[] = [
    {
        env: "TST1",
        detail: "Some random text",
        metadata: {
            frontendUrls: [
                {
                    feName: "FE1",
                    url: "https://localhost:8080"
                },
                {
                    feName: "FE2",
                    url: "https://localhost:8080"
                }
            ],
            configManagerUrl: {
                cmName: "CM1",
                url: "https://localhost:8080"
            }
        }
    },
    {
        env: "TST2",
        detail: "",
        metadata: {
            frontendUrls: [{
                feName: "FE1",
                url: "https://localhost:8080"
            }],
            configManagerUrl: {
                cmName: "CM1",
                url: "https://localhost:8080"
            }
        }
    },
    {
        env: "TST3",
        detail: "Some random text",
        metadata: {
            frontendUrls: [{
                feName: "FE1",
                url: "https://localhost:8080"
            }],
            configManagerUrl: {
                cmName: "CM2",
                url: "https://localhost:8080"
            }
        }
    },
    {
        env: "TST4",
        detail: "Some random text",
        metadata: {
            frontendUrls: [{
                feName: "FE1",
                url: "https://localhost:8080"
            }],
            configManagerUrl: {
                cmName: "CM3",
                url: "https://localhost:8080"
            }
        }
    },
    {
        env: "TST5",
        detail: "Some random text",
        metadata: {
            frontendUrls: [{
                feName: "FE1",
                url: "https://localhost:8080"
            }],
            configManagerUrl: {
                cmName: "CM1",
                url: "https://localhost:8080"
            }
        }
    },
    {
        env: "TST6",
        detail: "Some random text",
        metadata: {
            frontendUrls: [{
                feName: "FE1",
                url: "https://localhost:8080"
            }],
            configManagerUrl: {
                cmName: "CM2",
                url: "https://localhost:8080"
            }
        },
        bookingData: {
            bookedBy: "user1",
            bookingDate: "2024-09-01",
            untilTime: "6:00:00",
            shareable: "yes",
            notes: "temporarily shareable"
        }
    },
    {
        env: "TST7", detail: "Some random text",
        metadata: {
            frontendUrls: [{
                feName: "FE1",
                url: "https://localhost:8080"
            }],
            configManagerUrl: {
                cmName: "CM1",
                url: "https://localhost:8080"
            }
        }
    },
    {
        env: "TST8", detail: "Some random text",
        metadata: {
            frontendUrls: [{
                feName: "FE1",
                url: "https://localhost:8080"
            }],
            configManagerUrl: {
                cmName: "CM3",
                url: "https://localhost:8080"
            }
        }
    },
    {
        env: "TST9", detail: "Some random text",
        metadata: {
            frontendUrls: [{
                feName: "FE1",
                url: "https://localhost:8080"
            }],
            configManagerUrl: {
                cmName: "CM3",
                url: "https://localhost:8080"
            }
        }
    }
];

const App: React.FC = () => {
    const [rowsData, setRowsData] = useState(rows);

    function releaseBooking(env: string) {
        const updatedRows: EnvironmentData[] = [];
        rowsData.forEach(row => {
            if (row.env === env) {
                row.bookingData = undefined;
            }
            updatedRows.push(row);
        })
        setRowsData(updatedRows);
    }

    function addBooking(data: BookingFormModalData) {
        const updatedRows: EnvironmentData[] = [];
        rowsData.forEach(row => {
            if (row.env === data.environmentName) {
                row.bookingData = {
                    bookedBy: data.bookedFor,
                    bookingDate: data.bookingDate,
                    notes: data.notes,
                    shareable: data.isShareable,
                    untilTime: "6 pm " + data.office
                };
            }
            updatedRows.push(row);
        })
        setRowsData(updatedRows);
    }

    return (
        <div className="App">
            <h1 className="App-header">
                Environments
            </h1>
            <div className={"Content"}>
                <div className="EnvironmentTable">
                    <EnvironmentTableComponent data={rows}
                                               onRelease={releaseBooking}
                                               onBooking={addBooking}/>
                </div>
            </div>
        </div>
    );
}

export default App;
