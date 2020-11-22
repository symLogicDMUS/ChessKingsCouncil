import {
    col1 as customizeCol1,
    col2 as customizeCol2, col3 as customizeCol3,
    columnGap as customizeColumnGap, row1 as customizeRow1, row2 as customizeRow2
} from "../../NewGame/Customize/sizeAndPosVariables.jss";

export const profileWB = {
    position: "relative",
    display: "grid",
    zIndex: 'inherit',
    backgroundColor: '#515151',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    top: customizeColumnGap * 2,
    gridTemplateColumns: `${customizeCol1}px ${customizeCol2}px ${customizeCol3}px`,
    gridTemplateRows: `${customizeRow1}px ${customizeRow2}px`,
    columnGap: customizeColumnGap,
    marginBottom: customizeColumnGap,
}