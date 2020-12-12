import {fontSize} from "../CreatePiece/em.jss";

function getBgColor(rowNum, theme) {
    if (rowNum % 2 === 0) {
        return theme.even_row_color;
    } else {
        return theme.odd_row_color;
    }
}

function listItem(rowNum, fontSize, theme) {
    return {
        gridRow: rowNum,
        color: "#a9a9a9",
        fontSize: fontSize,
        paddingLeft: "0.1em",
        paddingTop: "0.05em",
        textAlign: "left",
        backgroundColor: getBgColor(rowNum, theme),
    };
}

export const styles = {

    scroll_table: props => ({
        ...props.style,
        fontSize: props.fontSize,
        position: 'relative',
        display: 'grid',
        gridTemplateRows: "0.5em repeat(5, 1.5em) 0.5em",
        border: "1px solid #707070"
    }),

    up_arrow_row: props => ({
        gridRow: 1,
        background: props.theme.fill,
        color: props.theme.text,
        borderRadius: 0,
    }),
    row1: props => ({
        ...listItem( 2, props.fontSize, props.theme),
    }),
    row2: props => ({
        ...listItem( 3, props.fontSize, props.theme),
    }),
    row3: props => ({
        ...listItem( 4, props.fontSize, props.theme),
    }),
    row4: props => ({
        ...listItem( 5, props.fontSize, props.theme),
    }),
    row5: props => ({
        ...listItem( 6, props.fontSize, props.theme),
    }),
    down_arrow_row: props => ({
        gridRow: 7,
        background: props.theme.fill,
        color: props.theme.text,
        borderRadius: 0,
    }),
};