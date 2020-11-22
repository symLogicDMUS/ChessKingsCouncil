import makeStyles from "@material-ui/core/styles/makeStyles";
import {profile} from "./styles/profile.jss";
import {imgLabel} from "./styles/imgLabel.jss";
import {imgWindow} from "./styles/imgWindow.jss";
import {profileWB} from "./styles/profileWB.jss";
import {pieceProfileImg} from "./styles/pieceProfileImg.jss";
import {displayBoardModal} from "./styles/displayBoardModal.jss";
import {rangeTable} from "./styles/rangeTable.jss";
/* not yet implemented. will go where needed when spliting load-delete header classes into different files:
import {
    row1 as loadDeleteRow1,
    row2 as loadDeleteRow2,
    col1 as loadDeleteCol1,
    col2 as loadDeleteCol2,
    columnGap as loadDeleteColumnGap,
} from "../MyPieces/sizeAndPosVariables.jss";
*/


export const useStyles = {
    "custom-game": makeStyles({
        profile: profile,
        profileWB: profileWB,
        imgLabel: imgLabel,
        imgWindow: imgWindow,
        pieceProfileImg: pieceProfileImg,
        rangeTable: rangeTable,
        displayBoardModal: displayBoardModal,
    }),
    /*"load-delete": makeStyles({}),*/
};
