import '../../css/InfoTable.css';
import {EnvironmentData} from "../../types/environmentData";
import {BookingFormModalData} from '../modal/types/BookingFormModalData';
import TableHeader from "./TableHeader";
import EnvironmentTableRowComponent from "./EnvironmentTableRowComponent";

export default function EnvironmentTableComponent(props: {
    data: EnvironmentData[],
    onRelease: { (env: string): void; (arg0: string): void; },
    onBooking: { (data: BookingFormModalData): void; (arg0: BookingFormModalData): void; },
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
