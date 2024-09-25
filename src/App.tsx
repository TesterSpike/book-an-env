import './css/App.css';
import environmentStatusComponent from "./component/environmentStatusComponent";
import {EnvironmentData} from "./types/environmentData";

const rows: EnvironmentData[] = [
    {
        env: "TST1",
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
        env: "TST7",
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
        env: "TST8",
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
        env: "TST9",
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

function App() {
    return (
        <div className="App">
            <header className="App-header">
                Book an environment!
            </header>
            <div className={"Content"}>
                <menu className={"Menu"}>
                    <h3>Menu</h3>
                    <div className={"MenuSection"}>
                        <button className="MenuButton" onClick={alert}>Book Environment</button>
                    </div>
                </menu>
                <div className="EnvironmentTable">
                    {environmentStatusComponent(rows)}
                </div>
            </div>
        </div>
    );
}

export default App;
