import {sampleBase64ImgStrs} from "./apiHelpers/sampleBase64ImgStrs"
import {saveImgDict} from "./saveImgDict"

export async function getSetSampleImgs() {
    const result = await saveImgDict(sampleBase64ImgStrs);
    return sampleBase64ImgStrs;
}