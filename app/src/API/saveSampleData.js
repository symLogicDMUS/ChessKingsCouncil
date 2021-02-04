import {saveImgDict} from "./saveImgDict";
import {sampleBase64ImgStrs} from "../../../python/db_recovery/test_objects/sampleBase64ImgStrs";
import {saveGameDict} from "../saveGameDict";
import {sampleGames} from "./apiHelpers/sampleGames";

async function saveSampleDataToDb(pageName) {
    switch (pageName) {
        case 'CreatePiece':
            return saveImgDict(sampleBase64ImgStrs)
        case 'LoadGame':
            return saveGameDict(sampleGames)
    }
}


export function saveSampleData(pageName) {

}