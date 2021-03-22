import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";

/**NOTE: width and fontSize are required props!*/
export const useStyles = makeStyles({
    scroll_table: (props) => ({
        display: "flex",
        flexDirection: "column",
        width: props.width,
        fontSize: props.fontSize,
        ...props.addedStyle,
    }),
    list_item: props => ({
        fontSize: props.fontSize,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "no-wrap",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        color: themes[props.theme].text,
    }),
    list_item_even: (props) => ({
        backgroundColor: themes[props.theme].even_row,
    }),
    list_item_odd: (props) => ({
        backgroundColor: themes[props.theme].odd_row,
    }),
    list_item_edges: props => ({
        borderLeft: `0.025em solid ${themes[props.theme].outline}`,
        borderRight: `0.025em solid ${themes[props.theme].outline}`,
    }),
    arrow_button: (props) => ({
        width: props.width,
        fontSize: props.fontSize,
        background: themes[props.theme].fill,
        color: themes[props.theme].text,
    }),
    arrow_icon: props => ({
        fontSize: props.fontSize,
    }),
    /*child of list items*/
    text: (props) => ({
        maxWidth: "97.5%",
        marginLeft: "2.5%",
        fontSize: props.fontSize,
        color: themes[props.theme].text,
        fontFamily: "Roboto-Light, Roboto",
    }),
}, {index: 1});