import {sampleImgUrls} from "./prod";
import {copy} from "../../../Components/helpers/copy";

export function getSampleImgUrls() {
    return copy(sampleImgUrls);
}