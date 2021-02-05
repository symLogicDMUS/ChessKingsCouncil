import {sampleGames} from "./apiHelpers/sampleGames";
import {saveGameDict} from "./saveGameDict";

export async function getSetSampleGames() {
    const result = await saveGameDict(sampleGames);
    return sampleGames;
}