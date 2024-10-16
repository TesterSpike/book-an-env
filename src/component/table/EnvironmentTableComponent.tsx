import {EnvironmentData} from "../../types/environmentData";
import TableHeader from "./TableHeader";
import EnvironmentTableRowComponent from "./EnvironmentTableRowComponent";
import '../../css/InfoTable.css';
import {BookingFormModalData} from "../modal/BookingFormModal";

export default function EnvironmentTableComponent(props: {
    data: EnvironmentData[],
    onRelease: { (env: string): void; (arg0: string): void; },
    onBooking: { (data: string): void; (arg0: string): void; },
}) {
    return (
        <table>
            <TableHeader/>
            <tbody id="environmentStatusBody">
            {props.data.map((row: EnvironmentData) => EnvironmentTableRowComponent(row, props.onRelease, props.onBooking))}
            </tbody>
        </table>
    );
}
