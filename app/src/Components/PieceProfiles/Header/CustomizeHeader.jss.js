import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";
import {fontSize0025, fontSize0028, fontSizeW0048}
        from "../../styles/fontSizes.jss";
import {headerWidthDesktop} from "./ProfileHeader.jss";

export const useStyles = makeStyles({
    header: props => ({
        '@media screen and (max-width: 1040px)': {
            borderTop: `0.05em solid ${themes[props.theme].outline}`,
            borderBottom: `0.05em solid ${themes[props.theme].outline}`,
        },
    }),
    box: props => ({
        '@media screen and (min-width: 1040px)': {
            width: '14.333vw',
        },
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        justifyContent: 'flex-start',
        alignItems: 'baseline',
        // border: '1px dashed red',
    }),
    sub_button: props => ({
        width: '2.75vw',
        height: '2.75vw',
    }),
    sub_icon: props => ({
        '@media screen and (min-width: 1040px)': {
            width: '1.8vw',
            height: '1.8vw',
        },
    }),
    checkbox_text: props => ({
        '@media screen and (min-width: 1040px)': {
            fontSize: fontSize0025,
        },
        '@media screen and (max-width: 1040px)': {
            fontSize: fontSizeW0048,
        },
    }),
    icon_button_style: props => ({
        justifyContent: "space-between",
        alignItems: "center",
    }),

    checkbox: props => ({
        '@media screen and (max-width: 1040px)': {
            fontSize: fontSizeW0048,
            marginRight: 'auto',
        },
        '@media screen and (min-width: 1040px)': {
            fontSize: fontSize0025,
        },
    }),
    checkbox_root: props => ({
        '@media screen and (min-width: 1040px)': {
            marginLeft: '-0.15em',
        },
    }),
    checkbox_gen: props => ({
        '@media screen and (max-width: 1040px)': {
            fontSize: fontSizeW0048,
            marginRight: 'auto'
        },
        '@media screen and (min-width: 1040px)': {
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