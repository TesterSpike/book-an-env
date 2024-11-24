import {FrontendUrl} from "./frontendUrl";
import {ConfigManagerUrl} from "./configManagerUrl";


export type LockMetadata = {
    lockState: string;
    lockNotes: string;
}

export type EnvironmentMetadata = {
    locK?: LockMetadata;
    frontendUrls: FrontendUrl[];
    configManagerUrl: ConfigManagerUrl;
}