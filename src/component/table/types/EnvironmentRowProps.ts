import {EnvironmentData} from "./environmentData";
import {BookingFormModalData} from "../../modal/types/BookingFormModalData";

export interface EnvironmentRowProps {
    row: EnvironmentData,
    onRelease: {
        (env: string): void;
        (arg0: string): void
    },
    onBooking: {
        (bookingData: BookingFormModalData): void;
        (arg0: BookingFormModalData): void
    }
}