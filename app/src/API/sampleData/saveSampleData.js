import {saveDefsToDb} from "../saveDefs";
import {saveImgUrlsToDb} from "../saveImgUrls";
import {saveGameDictToDb} from "../saveGameDict";
import {sampleImgUrls} from "./sampleImgUrls/prod";
import {dbSampleGames} from "./sampleGames/db/prod";
import {dbSampleDefs} from "./sampleDefs/db/prod";
import {sampleImgRefCounts} from "./sampleImgRefCounts/prod";
import {saveUrlRefsToDb} from "../saveUrlRefsToDb";

export async function saveSampleData() {
    return Promise.all([
        saveImgUrlsToDb(sampleImgUrls),
        saveUrlRefsToDb(sampleImgRefCounts),
        saveGameDictToDb(dbSampleGames),
        saveDefsToDb(dbSampleDefs)
    ])
}