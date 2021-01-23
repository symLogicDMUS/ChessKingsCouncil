import { makeStyles } from "@material-ui/core/styles";
import { themes } from "../../styles/themes.jss";
import {fontSize0023} from "../../styles/fontSizes.jss";

const getArrowButtonHeight = (tableHeight) => tableHeight * 0.08;

const list_item = (theme, fontSize, tableHeight, numRows) => ({
    fontSize: fontSize,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "no-wrap",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    color: themes[theme].text,
    borderLeft: `0.05em solid ${themes[theme].outline}`,
    borderRight: `0.05em solid ${themes[theme].outline}`,
    height: `${(tableHeight - getArrowButtonHeight(tableHeight)*2)/numRows}em`,
});

/**NOTE: width and fontSize are required props!*/
export const useStyles = makeStyles({
    scroll_table: (props) => ({
        display: "flex",
        flexDirection: "column",
        width: props.style.width,
        fontSize: props.style.fontSize,
        height: `${props.style.height}em`,
        ...props.addedStyle,
    }),
    list_item_even: (props) => ({
        ...list_item(
            props.theme,
            props.style.fontSize,
            props.style.height,
            props.numRows
        ),
        backgroundColor: themes[props.theme].even_row,
    }),
    list_item_odd: (props) => ({
        ...list_item(
            props.theme,
            props.style.fontSize,
            props.style.height,
            props.numRows
        ),
        backgroundColor: themes[props.theme].odd_row,
    }),
    arrow_button: (props) => ({
        fontSize: props.style.fontSize,
        width: props.style.width,
        height: `${getArrowButtonHeight(props.style.height)}em`,
        border: `0.05em solid ${themes[props.theme].outline}`,
        background: themes[props.theme].fill,
        color: themes[props.theme].text,
    }),
    /*child of list items*/
    text: (props) => ({
        fontSize: "1em",
        maxWidth: "97.5%",
        marginLeft: "2.5%",
        color: themes[props.theme].text,
        fontFamily: "Roboto-Light, Roboto",
    }),
});