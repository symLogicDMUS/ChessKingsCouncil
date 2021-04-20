import {sampleGames} from "./frontend/prod";
import {copy} from "../../../Components/helpers/copy";

export function getSampleGames() {
    return copy(sampleGames);
}