import {mapUrlCharsToValidKeyChars} from "./mapUrlCharsToValidKeyChars";

export function mapUrlListCharsToValidKeyChars(imgUrlList) {
    return imgUrlList.map(imgUrl => mapUrlCharsToValidKeyChars(imgUrl))
}