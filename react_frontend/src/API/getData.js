import {dataDictApiCall} from "./getDataDict";
import {defsApiCall} from "./getDefs";


export function getData(username) {
    return Promise.all([dataDictApiCall(username), defsApiCall(username)])
}