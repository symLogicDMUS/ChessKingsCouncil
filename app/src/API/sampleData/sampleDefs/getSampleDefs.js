import {sampleDefs} from "./frontend/prod";
import {copy} from "../../../Components/helpers/copy";

export function getSampleDefs() {
    return copy(sampleDefs);
}