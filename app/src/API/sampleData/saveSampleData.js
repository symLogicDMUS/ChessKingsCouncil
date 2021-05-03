import {saveDefsToDb} from "../saveDefs";
import {saveImgUrlsToDb} from "../saveImgUrls";
import {saveGameDictToDb} from "../saveGameDict";
import {sampleImgUrls} from "./sampleImgUrls";
import {dbSampleGames} from "./sampleGames";
import {dbSampleDefs} from "./sampleDefs";

export async function saveSampleData() {
    return Promise.all([
        saveImgUrlsToDb(sampleImgUrls),
        saveGameDictToDb(dbSampleGames),
        saveDefsToDb(dbSampleDefs)
    ])
}