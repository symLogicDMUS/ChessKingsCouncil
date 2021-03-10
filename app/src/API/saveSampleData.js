import {saveDefsToDb} from "./saveDefs";
import {saveImgDictToDb} from "./saveImgDict";
import {saveGameDictToDb} from "./saveGameDict";
import {sampleImgUrls} from "./apiHelpers/sampleImgUrls/dev1";
import {sampleGames} from "./apiHelpers/sampleGames/dev1";
import {dbSampleDefs} from "./apiHelpers/sampleDefs/dev1";

export function saveSampleData() {
    return Promise.all([saveImgDictToDb(sampleImgUrls), saveGameDictToDb(sampleGames), saveDefsToDb(dbSampleDefs)])
}