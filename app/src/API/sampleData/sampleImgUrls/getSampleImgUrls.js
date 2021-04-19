import {sampleImgUrls} from "./dev1";
import {copy} from "../../../Components/helpers/copy";

export function getSampleImgUrls() {
    return copy(sampleImgUrls);
}