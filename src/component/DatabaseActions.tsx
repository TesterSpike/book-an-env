import {unseed} from "../database/unseed";
import {seed} from "../database/seed";

const DatabaseActions = () => (
    <div id={"databaseActions"} className={"MenuSection"}>
        <button id={"seed"} onClick={seed}>seed</button>
        <button id={"unseed"} onClick={unseed}>unseed</button>
    </div>
);
export default DatabaseActions;