import {EnvironmentData} from "./environmentData";

export interface EnvironmentTableProps {
    data: EnvironmentData[],
    onRelease: { (env: string): void; (arg0: string): void; },
    onBooking: { (env: string): void; (arg0: string): void; }
}