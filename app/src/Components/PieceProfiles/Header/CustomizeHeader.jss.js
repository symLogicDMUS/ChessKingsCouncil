import {makeStyles} from "@material-ui/core/styles";
import {header, text} from "./PieceHeader.jss";
import {themes} from "../../styles/themes.jss";
import {
    fontSize0024,
    fontSize0025, fontSize0026,
    fontSize0028
} from "../../styles/fontSizes.jss";
import {fontSizes} from "../PieceProfiles.jss";

export const widths = {
    desktop: '11.55em',
    mobile: '7.5em'
}

export const checkbox_root = (theme) => ({
    ...text(theme),
    '@media screen and (min-width: 768px)': {
        marginLeft: '-0.15em',
    },
});

export const checkbox_style = () => ({
    '@media screen and (min-width: 768px)': {
        fontSize: fontSizes.desktop,
    },
    '@media screen and (max-width: 767px)': {
        fontSize: fontSize0028,
    },
});

export const useStyles = makeStyles({
    header: props => ({
        ...header(props.style, props.theme),
        justifyContent: 'space-between',
        height: '2em',
        '@media screen and (max-width: 767px)': {
            borderTop: `0.05em solid ${themes[props.theme].outline}`,
            borderBottom: `0.05em solid ${themes[props.theme].outline}`,
            marginTop: '0.75em',
            width: '94%'
        },
    }),
    piece_name: props => ({
        '@media screen and (min-width: 768px)': {
            fontSize: fontSize0025,
        },
        '@media screen and (max-width: 767px)': {
            fontSize: fontSize0026,
        },
        color: themes[props.theme].text,
        fontFamily: 'Roboto-Light, Roboto',
    }),
    box: props => ({
        '@media screen and (min-width: 768px)': {
            fontSize: fontSizes.desktop,
            width: widths.desktop,
        },
        '@media screen and (max-width: 767px)': {
            fontSize: fontSizes.mobile,
        },
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        justifyContent: 'flex-start',
    }),
    sub_button: props => ({
        fontSize: '1em',
        width: '1.5em',
        height: '1.5em',
    }),
    sub_icon: props => ({
        fontSize: '1em',
        '@media screen and (min-width: 768px)': {
            width: '1.25em',
            height: '1.25em',
        },
        '@media screen and (max-width: 767px)': {
            width: '1em',
            height: '1em',
        },
    }),
    no_sub_icon: props => ({
        '@media screen and (min-width: 768px)': {
            width: '1.2em',
            height: '1.2em',
        },
        '@media screen and (max-width: 767px)': {
            width: '1em',
            height: '1em',
        },
    }),
    no_sub_button: props => ({
        width: "0.9em",
        height: "0.9em",
    }),
});