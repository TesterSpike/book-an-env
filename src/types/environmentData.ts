import {EnvironmentMetadata} from "./environmentMetadata";
import {EnvironmentBookingData} from "./environmentBookingData";

export type EnvironmentData = {
    env: string;
    metadata: EnvironmentMetadata;
    bookingData?: EnvironmentBookingData;
};