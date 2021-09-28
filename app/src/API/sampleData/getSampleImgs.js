import { sampleImgs } from "./sampleImgs";
import { copy } from "../../Components/helpers/copy";

export function getSampleImgs() {
    return copy(sampleImgs);
}
