import {mapValidKeyCharsToUrlChars} from "./mapValidKeyCharsToUrlChars";

export function mapValidKeyListCharsToUrlChars(imgUrlList) {
    return imgUrlList.map(imgUrl => mapValidKeyCharsToUrlChars(imgUrl))
}