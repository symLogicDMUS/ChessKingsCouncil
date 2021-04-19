import {sampleGames} from "./frontend/dev1";
import {copy} from "../../../Components/helpers/copy";

export function getSampleGames() {
    return copy(sampleGames);
}