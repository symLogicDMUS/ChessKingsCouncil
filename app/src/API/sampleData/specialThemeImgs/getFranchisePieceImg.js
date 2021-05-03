import {getPieceName} from "../../../Components/helpers/getPieceName";
import {franchisePieceImgs} from "./franchisePieceImgs";

/**
 *
 * @param specialTheme: theme named after a franchise like Star Wars
 * @param id
 * @param idDict
 * @returns {*}
 */
export function getFranchisePieceImg(specialTheme, id, idDict) {
    let name = getPieceName(id, idDict);
    let color = id[0];
    return franchisePieceImgs[specialTheme][name][color]
}