import {saveDefsToDb} from "../saveDefs";
import {saveImgUrlsToDb} from "../saveImgUrls";
import {saveGameDictToDb} from "../saveGameDict";
import {sampleImgUrls} from "./sampleImgUrls/dev1";
import {dbSampleGames} from "./sampleGames/dev1";
import {dbSampleDefs} from "./sampleDefs/dev1";
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