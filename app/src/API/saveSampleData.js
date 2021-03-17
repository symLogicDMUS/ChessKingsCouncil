import {saveDefsToDb} from "./saveDefs";
import {saveImgUrlsToDb} from "./saveImgUrls";
import {saveGameDictToDb} from "./saveGameDict";
import {sampleImgUrls} from "./apiHelpers/sampleImgUrls/dev1";
import {dbSampleGames} from "./apiHelpers/sampleGames/dev1";
import {dbSampleDefs} from "./apiHelpers/sampleDefs/dev1";

export function saveSampleData() {
    return Promise.all([saveImgUrlsToDb(sampleImgUrls), saveGameDictToDb(dbSampleGames), saveDefsToDb(dbSampleDefs)])
}