import {EnvironmentData} from "../../types/environmentData";
import TableHeader from "./TableHeader";
import EnvironmentTableRowComponent from "./EnvironmentTableRowComponent";

function EnvironmentTableComponent(props: { rows: EnvironmentData[]; }) {
    const tableRows = props.rows.map(row => EnvironmentTableRowComponent(row));
    return (
        <table>
            <TableHeader/>
            <tbody id="environmentStatusBody">
            {tableRows}
            </tbody>
        </table>
    );
}

export default EnvironmentTableComponent;