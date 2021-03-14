import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../../../styles/themes.jss";
import {fontSize001685, fontSize002} from "../../../../styles/fontSizes.jss";

export const useStyles = makeStyles({
    ordered_list: props => ({
        paddingLeft: "1.45em"
    }),
    steps1: props => ({
        color: themes[props.theme].text,
        fontSize: fontSize001685,
        width: "65%",
        textAlign: "left",
    }),
    steps2: props => ({
        color: themes[props.theme].text,
        fontSize: fontSize002,
        width: "65%",
        textAlign: "left",
    }),
    gif: props => ({
        width: "65%",
        border: `0.05em solid ${themes[props.theme].outline}`
    }),
    flex_row: props => ({
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: '100%',
    }),
    text: props => ({
        color: themes[props.theme].text,
        fontSize: fontSize002,
    }),
    icon: props => ({
       fontSize: 'inherit',
       width: '1em',
       height: '1em',
       color: themes[props.theme].text,
    }),

}, {index: 1});