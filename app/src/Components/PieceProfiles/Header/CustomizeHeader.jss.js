import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";
import {fontSizes, widths} from "../PieceProfiles.jss";
import {fontSize0025, fontSize0028, fontSizeW003224, fontSizeW0048}
    from "../../styles/fontSizes.jss";

export const useStyles = makeStyles({
    header: props => ({
        height: '2em',
        '@media screen and (max-width: 1040px)': {
            borderTop: `0.05em solid ${themes[props.theme].outline}`,
            borderBottom: `0.05em solid ${themes[props.theme].outline}`,
        },
    }),
    piece_name: props => ({
        '@media screen and (min-width: 1040px)': {
            fontSize: fontSize0025,
        },
        '@media screen and (max-width: 1040px)': {
            fontSize: fontSizeW0048,
        },
        '@media screen and (min-width: 768px) and (max-width: 1040px)':{
            fontSize: fontSizeW003224,
        },
        color: themes[props.theme].text,
        fontFamily: 'Roboto-Light, Roboto',
    }),
    box: props => ({
        '@media screen and (min-width: 1040px)': {
            fontSize: fontSizes.desktop,
            width: widths.desktop,
        },
        '@media screen and (max-width: 1040px)': {
            fontSize: fontSizes.mobile,
            width: 'unset',
        },
        '@media screen and (min-width: 768px) and (max-width: 1040px)': {
            fontSize: fontSizes.ipad,
            width: widths.ipad,
        },
        // border: '1px dashed red',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        justifyContent: 'flex-start',
        alignItems: 'baseline'
    }),
    sub_button: props => ({}),
    checkbox_text: props => ({
       '@media screen and (min-width: 1040px)': {
           fontSize: fontSize0025,
       },
        '@media screen and (max-width: 1040px)': {
            fontSize: fontSizeW0048,
        },
        '@media screen and (min-width: 768px) and (max-width: 1040px)':{
            fontSize: fontSizeW003224,
        },
    }),
    icon_button_style: props => ({
        justifyContent: "space-between",
        alignItems: "center",
    }),
    sub_icon: props => ({
        '@media screen and (min-width: 1040px)': {
            fontSize: fontSize0028,
            width: '1.25em',
            height: '1.25em',
        },
    }),
    no_sub_icon: props => ({
        '@media screen and (min-width: 1040px)': {
            fontSize: fontSize0028,
            width: '1.2em',
            height: '1.2em',
        },
        '@media screen and (max-width: 1040px)': {
            fontSize: fontSize0028,
            width: '1em',
            height: '1em',
        },
    }),
    no_sub_button: props => ({
        width: "0.9em",
        height: "0.9em",
    }),
    checkbox: props => ({
        '@media screen and (max-width: 1040px)': {
            fontSize: fontSizeW0048,
            marginRight: 'auto',
        },
        '@media screen and (min-width: 768px) and (max-width: 1040px)': {
            fontSize: fontSizeW003224,
            margin: 'auto',
        },
        '@media screen and (min-width: 1040px)': {
            fontSize: fontSize0025,
        },
    }),
    checkbox_root: props => ({
        '@media screen and (min-width: 1040px)': {
            marginLeft: '-0.15em',
        },
        '@media screen and (min-width: 768px) and (max-width: 1040px)': {
            marginLeft: '-0.15em',
        },
    }),
    checkbox_gen: props => ({
        '@media screen and (max-width: 1040px)': {
            fontSize: fontSizeW0048,
            marginRight: 'auto'
        },
        '@media screen and (min-width: 768px) and (max-width: 1040px)': {
            marginLeft: '-0.15em',
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
}, {index: 1});