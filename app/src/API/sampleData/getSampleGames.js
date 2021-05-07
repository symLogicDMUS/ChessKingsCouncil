import {dbSampleGames} from "./sampleGames";
import {copy} from "../../Components/helpers/copy";
import {refactorDefOffsets} from "./refactorDefOffsets";

export function getSampleGames() {
    const games = copy(dbSampleGames);
    for (const gameName of Object.keys(games)) {
        games[gameName].defs = refactorDefOffsets(games[gameName].defs)
        if (! games[gameName].imgUrlStrs) {
            games[gameName].imgUrlStrs = []
        }
    }
    return games;
}