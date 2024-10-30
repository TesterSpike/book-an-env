import {EnvironmentData} from "./environmentData";
import {BookingFormModalData} from "../../modal/types/BookingFormModalData";

export interface EnvironmentTableProps {
    data: EnvironmentData[],
    onRelease: { (env: string): void; (arg0: string): void; },
    onBooking: { (data: BookingFormModalData): void; (arg0: BookingFormModalData): void; }
}