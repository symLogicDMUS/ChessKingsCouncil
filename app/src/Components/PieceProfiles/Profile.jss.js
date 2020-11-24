import makeStyles from "@material-ui/core/styles/makeStyles";
import {
    col1 as customizeCol1,
    col2 as customizeCol2,
    col3 as customizeCol3,
    columnGap as customizeColumnGap,
    profileHeaderHeight as customizeProfileHeaderHeight,
    row1 as customizeRow1,
    row2 as customizeRow2
} from "../NewGame/Customize/sizeAndPosVariables.jss";
/* not yet implemented. will go where needed when splitting load-delete header classes into different files:
import {
    row1 as loadDeleteRow1,
    row2 as loadDeleteRow2,
    col1 as loadDeleteCol1,
    col2 as loadDeleteCol2,
    columnGap as loadDeleteColumnGap,
} from "../MyPieces/sizeAndPosVariables.jss";
*/

export const styles = {
    "custom-game": {
        profile: {
            marginLeft: customizeColumnGap,
            marginBottom: customizeColumnGap,
            width: customizeCol1 + customizeColumnGap + customizeCol2 + customizeColumnGap + customizeCol3 + 2,
            height:
                customizeProfileHeaderHeight +
                customizeCol3 +
                customizeRow1 +
                customizeRow2 +
                customizeColumnGap +
                customizeRow1 +
                customizeRow2 +
                customizeColumnGap,
            borderTop: '0.8px solid #707070',
            zIndex: 'inherit',
        },
    },
    /*"load-delete": {},*/
};
