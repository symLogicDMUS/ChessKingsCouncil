import { makeStyles } from "@material-ui/core/styles";
import { themes } from "../../styles/themes/themes.jss";

/**NOTE: width is a required props!*/
export const useStyles = makeStyles(
    {
        scroll_table: (props) => ({
            display: "flex",
            flexDirection: "column",
        }),
        list_item: (props) => ({
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
        arrow_button: (props) => ({
            width: props.width,
            color: themes[props.theme].text,
            background: themes[props.theme].fill,
        }),
        arrow_icon: (props) => ({
            color: themes[props.theme].text,
        }),
        /*child of list items*/
        text: (props) => ({
            maxWidth: "97.5%",
            marginLeft: "2.5%",
            color: themes[props.theme].text,
            fontFamily: "Roboto-Light, Roboto",
        }),
    },
    { index: 1 }
);
