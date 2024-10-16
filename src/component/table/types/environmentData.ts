import {EnvironmentMetadata} from "./environmentMetadata";
import {EnvironmentBookingData} from "./environmentBookingData";

export type EnvironmentData = {
    env: string;
    detail: string;
    metadata: EnvironmentMetadata;
    bookingData?: EnvironmentBookingData;
};