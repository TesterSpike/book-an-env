import {FrontendUrl} from "./frontendUrl";
import {ConfigManagerUrl} from "./configManagerUrl";


export type EnvironmentMetadata = {
    frontendUrls: FrontendUrl[];
    configManagerUrl: ConfigManagerUrl;
}