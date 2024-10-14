import {EnvironmentData} from "../../types/environmentData";
import TableHeader from "./TableHeader";
import EnvironmentTableRowComponent from "./EnvironmentTableRowComponent";
import '../../css/InfoTable.css';

export default function EnvironmentTableComponent(props: { rows: EnvironmentData[]; }) {
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
