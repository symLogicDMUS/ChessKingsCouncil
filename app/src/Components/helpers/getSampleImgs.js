import {sampleBase64ImgStrs} from "./sampleBase64ImgStrs"
import {saveImgDict} from "../../API/saveImgDict"

export async function getSetSampleImgs(mode) {
    const result = await saveImgDict(mode, sampleBase64ImgStrs);
    return sampleBase64ImgStrs;
}