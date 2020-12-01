import {sampleBase64ImgStrs} from "./sampleBase64ImgStrs"
import {saveImgDict} from "../../API/saveImgDict"

export async function getSetSampleImgs() {
    const result = await saveImgDict(sampleBase64ImgStrs);
    return sampleBase64ImgStrs;
}