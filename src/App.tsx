import './css/App.css';
import './css/InfoTable.css';
import './css/Modal.css'
import {EnvironmentData} from "./types/environmentData";
import environmentTableComponent from './component/EnvironmentTableComponent';
import React from "react";

const App: React.FC = () => {
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
                shareable: true,
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

    return (
        <div className="App">
            <h1 className="App-header">
                Environments
            </h1>
            <div className={"Content"}>
                <div className="EnvironmentTable">
                    {environmentTableComponent(rows)}
                </div>
            </div>
        </div>
    );
}

export default App;
