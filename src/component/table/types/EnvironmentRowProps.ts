import {EnvironmentData} from "./environmentData";

export interface EnvironmentRowProps {
    row: EnvironmentData
    onRelease(env: string): void
    onBooking(env: string): void
}