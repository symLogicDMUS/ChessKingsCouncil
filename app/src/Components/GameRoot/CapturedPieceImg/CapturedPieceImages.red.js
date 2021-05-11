import {getCapturedDict} from "./getCapturedDict";
import {getColor} from "../../helpers/getColor";
import {getPieceImg} from "../../styles/themes/specialThemeImgs/getPieceImg";
import {getStandardPieceImg} from "../../styles/themes/specialThemeImgs/getStandardPieceImg";

export function reducer(state, action) {
    switch (action.type) {
        case "new-theme":
            return getCapturedDict(action.idDict, action.defs, action.capturedIds, action.gameType, action.theme)
        case "new-captured":
            const color = getColor(action.capturedId)
            if (action.gameType === 'Standard') {
                return {...state, [color]: [...state[color], getStandardPieceImg(action.capturedId, action.idDict, action.defs, action.theme)]}
            }
            else {
                return {...state, [color]: [...state[color], getPieceImg(action.capturedId, action.idDict, action.defs)]}
            }
        default:
            throw new Error();
    }
}