import {FrontendUrl} from "../types/frontendUrl";

const FrontendUrlComponent = (frontendUrls: FrontendUrl[]) => {
    return frontendUrls.map((frontEnd) => {
        return (
            <li key={frontEnd.feName}><a href={frontEnd.url}>{frontEnd.feName}</a></li>
        )
    });
}

export default FrontendUrlComponent;