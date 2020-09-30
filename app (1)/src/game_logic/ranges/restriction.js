import {allXy} from "gameLogic/misc/allXy";


export function restriction(coordList) {
    /**get a restriction set from the coordList (threatArea || pins)
    if coordList was empty, then no restriction was found so return set of all_Xy else convert coordList to
    a set &&  return
    */
    if (! coordList) {
        return allXy
    }
    else {
        return set(coordList)
    }
}