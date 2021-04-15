import {mapUrlCharsToValidKeyChars} from "./mapUrlCharsToValidKeyChars";

export function mapUrlListCharsToValidKeyChars(imgUrlList) {
    let newImgUrl;
    const newImgUrlList = []
    for (const imgUrl of imgUrlList) {
        newImgUrl = mapUrlCharsToValidKeyChars(imgUrl);
        newImgUrlList.push(newImgUrl)
    }
    return newImgUrlList;
    // return imgUrlList.map(imgUrl => mapUrlCharsToValidKeyChars(imgUrl))
}