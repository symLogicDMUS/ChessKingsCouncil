import {
    col1 as customizeCol1,
    col2 as customizeCol2,
    col3 as customizeCol3,
    columnGap as customizeColumnGap,
    profileHeaderHeight as customizeProfileHeaderHeight,
    row1 as customizeRow1,
    row2 as customizeRow2
} from "../../NewGame/Customize/sizeAndPosVariables.jss";

export const profile = {
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
    borderTop: "1px solid #707070",
}