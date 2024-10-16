import {FrontendUrl} from "./types/frontendUrl";

export default function FrontendUrlComponent(frontendUrls: FrontendUrl[]) {
    return frontendUrls.map((frontEnd) => {
        return (
            <div key={frontEnd.feName}><a href={frontEnd.url}>{frontEnd.feName}</a></div>
        )
    });
}