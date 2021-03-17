import {validKeyCharToUrl} from "./charMapDicts";
import {strRecursiveReplace} from "../Components/helpers/strRecursiveReplace";

export function mapValidKeyCharsToUrlChars(imgUrl) {
    for (const char of Object.keys(validKeyCharToUrl)) {
        imgUrl = strRecursiveReplace(imgUrl, char, validKeyCharToUrl[char])
    }
    return imgUrl;
}