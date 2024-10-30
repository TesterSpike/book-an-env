import './css/InfoTable.css';
import {EnvironmentData} from "./types/environmentData";
import TableHeader from "./TableHeader";
import EnvironmentTableRowComponent from "./EnvironmentTableRowComponent";
import {EnvironmentTableProps} from "./types/EnvironmentTableProps";

export default function EnvironmentTableComponent(props: EnvironmentTableProps) {
    return (
        <table>
            <TableHeader/>
            <tbody id="environmentStatusBody">
            {
                props.data.map((row: EnvironmentData) =>
                    <EnvironmentTableRowComponent row={row} onRelease={props.onRelease} onBooking={props.onBooking}/>)
            }
            </tbody>
        </table>
    );
}
