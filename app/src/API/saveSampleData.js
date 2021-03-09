import {saveDefsToDb} from "./saveDefs";
import {saveImgDictToDb} from "./saveImgDict";
import {saveGameDictToDb} from "./saveGameDict";
import {sampleGames} from "./apiHelpers/sampleGames";
import {dbSampleDefs} from "./apiHelpers/dbSampleDefs";
import {sampleBase64ImgStrs} from "./apiHelpers/sampleBase64ImgStrs";

export function saveSampleData() {
    return Promise.all([saveImgDictToDb(sampleBase64ImgStrs), saveGameDictToDb(sampleGames), saveDefsToDb(dbSampleDefs)])
}