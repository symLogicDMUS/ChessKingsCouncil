import { makeStyles } from "@material-ui/core/styles";
import {fontSize002, fontSize00219, fontSize00301} from "../../styles/fontSizes.jss";
import {themes} from "../../styles/themes.jss";
import {fontSizes} from "./SampleRangeBoard";
import {board} from "../../Reuseables/Board.jss";

export const useStyles = makeStyles({
    profile_help_text: props => ({
        width: "100%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        alignItems: "center",
        justifyContent: "space-evenly",
    }),
    text: props => ({
        fontSize: fontSize002,
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].text,
        margin: '0.75em',
    }),
    range_board_example: props => ({
        fontSize: fontSize00301,
        width: "9em",
        height: "9em",
    }),
    icon_button: props => ({
        display: "inline-flex",
        alignItems: "center",
        height: '0.8em',
        width: '0.8em',
    }),
    add_icon: props => ({
        fontSize: fontSize00219,
        height: "1em",
        position: 'relative',
        left: '0.1em',
        top: '-0.1em',
        color: themes[props.theme].text,
    }),
    flex_column: props => ({
        width: board(fontSizes.desktop).width,
        display: "flex",
        flexDirection: "column",
    }),
});