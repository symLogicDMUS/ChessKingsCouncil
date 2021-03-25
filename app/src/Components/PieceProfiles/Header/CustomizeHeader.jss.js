import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";
import {fontSize0025, fontSizeW0048} from "../../styles/fontSizes.jss";

export const useStyles = makeStyles({
    header: props => ({
        '@media screen and (max-width: 960px)': {
            borderTop: `0.05em solid ${themes[props.theme].outline}`,
            borderBottom: `0.05em solid ${themes[props.theme].outline}`,
            justifyContent: 'space-between',
        },
    }),
    box: props => ({
        '@media screen and (min-width: 960px)': {
            width: '14.333vw',
        },
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        justifyContent: 'flex-start',
        alignItems: 'baseline',
    }),
    sub_button: props => ({
        width: '2.75vw',
        height: '2.75vw',
    }),
    sub_icon: props => ({
        '@media screen and (min-width: 960px)': {
            width: '1.8vw',
            height: '1.8vw',
        },
    }),
    icon_button_style: props => ({
        justifyContent: "space-between",
        alignItems: "center",
    }),
    checkbox_root: props => ({
        '@media screen and (max-width: 960px)': {
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        '@media screen and (min-width: 960px)': {
            marginLeft: '-0.1em',
        },
    }),
    checkbox_gen: props => ({
        '@media screen and (max-width: 960px)': {
            fontSize: '3.5vh',
        },
        '@media screen and (min-width: 960px)': {
            fontSize: fontSize0025,
        },
    }),
    checkbox_text: props => ({
        '@media screen and (max-width: 960px)': {
            fontSize: '4vh',
        },
        '@media screen and (min-width: 960px)': {
            fontSize: fontSize0025,
        },
    }),
    selected: props => ({
        color: themes[props.theme].text,
    }),
    unselected: props => ({
        color: 'rgba(0, 0, 0, 0)',
    }),
    no_sub_unselected: props => ({
        color: themes[props.theme].outline,
    }),
}, {index: 1});