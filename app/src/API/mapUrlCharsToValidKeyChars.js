import {urlToValidKeyChar} from "./charMapDicts";
import {strRecursiveReplace} from "../Components/helpers/strRecursiveReplace";

export function mapUrlCharsToValidKeyChars(imgUrl) {
    for (const char of Object.keys(urlToValidKeyChar)) {
        imgUrl = strRecursiveReplace(imgUrl, char, urlToValidKeyChar[char])
    }
    return imgUrl;
}