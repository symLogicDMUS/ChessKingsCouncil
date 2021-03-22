import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";
import {fontSizes, widths} from "../PieceProfiles.jss";
import {fontSize002, fontSizeW0025, fontSizeW003224, fontSizeW0035,
} from "../../styles/fontSizes.jss";

export const useStyles = makeStyles({
    header: props => ({
        justifyContent: 'space-between',
    }),
    buttons_outer_flexbox: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexGrow: 3,
        "@media screen and (max-width: 412px)": {
            flexGrow: 0,
            marginLeft: '1em',
        },
    }),
    button: props => ({
        '@media screen and (min-width: 1040px)': {
            fontSize: fontSize002,
            width: '6.1em',
            height: '2em',
        },
        '@media screen and (max-width: 1040px)': {
            fontSize: fontSize002,
            width: '6.9em',
            height: '1.9em',
            maxWidth: '100em',
        },
        border: `0.05em solid ${themes[props.theme].outline}`
    }),
    buttons_inner_flexbox: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        '@media screen and (min-width: 1040px)': {
            fontSize: fontSizes.desktop,
            width: widths.desktop,
        },
        '@media screen and (max-width: 1040px)': {
            fontSize: fontSizes.mobile,
            width: widths.mobile,
        },

        '@media screen and (min-width: 768px) and (max-width: 1040px)':{
            fontSize: fontSizes.ipad,
            width: widths.ipad,
        },
        marginLeft: '1em',
    }),
    load_button: props => ({
        '@media screen and (min-width: 1040px)': {
            fontSize: fontSize002,
            width: '6.1em',
            height: '2em',
            marginRight: '0.5em',
        },
        '@media screen and (max-width: 1040px)': {
            fontSize: fontSizeW003224,
            '& .MuiButton-label': {
                minHeight: 'unset',
                lineHeight: '0.85em',
            },
            width: '6.25em',
            height: '2.1em',
        },
        '@media screen and (min-width: 768px) and (max-width: 1040px)':{
            fontSize: fontSizeW0025,
            '& .MuiButton-label': {
                minHeight: 'unset',
                lineHeight: '0.85em',
            },
            width: '5em',
        },
        border: `0.05em solid ${themes[props.theme].outline}`,
    }),
    delete_button: props => ({
        '@media screen and (min-width: 1040px)': {
            fontSize: fontSize002,
            width: '6.1em',
            height: '2em',
            marginLeft: "0.5em",
        },
        '@media screen and (max-width: 1040px)': {
            fontSize: fontSizeW003224,
            '& .MuiButton-label': {
                minHeight: 'unset',
                lineHeight: '0.85em',
            },
            width: '6.25em',
            height: '2.1em',
        },

        '@media screen and (min-width: 768px) and (max-width: 1040px)':{
            fontSize: fontSizeW0025,
            '& .MuiButton-label': {
                minHeight: 'unset',
                minWidth: 'unset',
                lineHeight: '0.85em',
            },
            width: '5em',
        },
        border: `0.05em solid ${themes[props.theme].outline}`
    }),
    icon: props => ({
        '@media screen and (max-width: 1040px)': {
            fontSize: fontSizeW0035
        },
        '@media screen and (min-width: 768px) and (max-width: 1040px)': {
            fontSize: fontSizeW0025
        },
        color: themes[props.theme].text,
    }),
    delete_icon: props => ({
        transform: 'translate(0.25em, 0)',
    }),
}, {index: 1});