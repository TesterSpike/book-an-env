import './css/App.css';
import {EnvironmentData} from "./types/environmentData";
import {Button} from 'semantic-ui-react';
import environmentTableComponent from './component/EnvironmentTableComponent';

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


export
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
                        <Button className="MenuButton" onClick={alert}>Book Environment</Button>
                    </div>
                </menu>
                <div className="EnvironmentTable">
                    {environmentTableComponent(rows)}
                </div>
            </div>
        </div>
    );
}

export default App;
