import { saveDefsToDb } from "../saveDefs";
import { saveImgUrlsToDb } from "../saveImgUrls";
import { saveGameDictToDb } from "../saveGameDict";
import { sampleImgs } from "./sampleImgs";
import { dbSampleGames } from "./sampleGames";
import { dbSampleDefs } from "./sampleDefs";

export async function saveSampleData() {
    return Promise.all([
        saveImgUrlsToDb(sampleImgs),
        saveGameDictToDb(dbSampleGames),
        saveDefsToDb(dbSampleDefs),
    ]);
}
