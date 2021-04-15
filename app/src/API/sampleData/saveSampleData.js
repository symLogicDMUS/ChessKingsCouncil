import {saveDefsToDb} from "../saveDefs";
import {saveImgUrlsToDb} from "../saveImgUrls";
import {saveGameDictToDb} from "../saveGameDict";
import {sampleImgUrls} from "./sampleImgUrls/dev1";
import {dbSampleGames} from "./sampleGames/db/dev1";
import {dbSampleDefs} from "./sampleDefs/db/dev1";
import {sampleImgRefCounts} from "./sampleImgRefCounts/dev1";
import {saveUrlRefsToDb} from "../saveUrlRefsToDb";

export function saveSampleData() {
    return Promise.all([
        saveImgUrlsToDb(sampleImgUrls),
        saveUrlRefsToDb(sampleImgRefCounts),
        saveGameDictToDb(dbSampleGames),
        saveDefsToDb(dbSampleDefs)
    ])
}