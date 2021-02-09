import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";
import {board} from "../../Reuseables/Board.jss";
import {imgFillDiv} from "../../Reuseables/imgFillDiv.jss";
import {
    fontSize002,
    fontSize00219,
    fontSize0023,
    fontSizeW0028,
    fontSizeW0031,
    fontSizeW0045,
    fontSizeW005,
} from "../../styles/fontSizes.jss";


export const fontSizes = {
    desktop: fontSize0023,
    mobile: fontSizeW0045,
    ipx: fontSizeW005,
}

export const widths = {
    desktop: '11.55em',
    mobile: '7.5em',
}

export const heights = {
    desktop: '13.03em',
    mobile: '9em',
}

export const useStyles = makeStyles({
    profile_help_text: props => ({
        '@media screen and (max-width: 767px)': {
            height: '225vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'space-evenly',
        },
        '@media (max-aspect-ratio: 1/2)': {
            height: '200vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'space-evenly',
        },
    }),
    flexbox: props => ({
        width: '95%',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'row',
        '@media screen and (min-width: 768px)': {
            justifyContent: 'center',
        },
        '@media screen and (max-width: 767px)': {
            justifyContent: 'space-between',
        },
    }),
    text: props => ({
        fontSize: fontSize002,
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].text,
    }),
    range_board_example: props => ({
        '@media screen and (min-width: 768px)': {
            fontSize: fontSizes.desktop,
            width: "9em",
            height: "9em",
            marginLeft: '1vw',
        },
        '@media screen and (max-width: 767px)': {
            fontSize: fontSizes.mobile,
            width: '1em',
            height: '1em',
            borderRadius: '0.035em',
            border: "0.0075em solid #2b2b2b",
        },
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
        display: "flex",
        flexDirection: "column",
        '@media screen and (min-width: 768px)': {
            width: board(fontSizes.desktop).width,
        },
        '@media screen and (max-width: 767px)': {
            width: '95%',
            margin: 'auto',
            alignItems: 'center',
        },
    }),
    profile: props => ({
        width: '95%',
        margin: 'auto',
        display: 'flex',
        '@media screen and (min-width: 768px)': {
            flexDirection: 'row',
            justifyContent: 'center',
        },
        '@media screen and (max-width: 767px)': {
            height: '80vh',
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
        '@media (max-aspect-ratio: 1/2)': {
            height: '70vh',
            flexDirection: 'column',
            justifyContent: 'space-between',
        },

    }),
    item: props => ({
        '@media screen and (min-width: 768px)': {
            fontSize: fontSizes.desktop,
            height: `${heights.desktop}em`,
            width: widths.desktop,
        },
        '@media screen and (max-width: 767px)': {
            fontSize: fontSizes.mobile,
            height: `${heights.mobile}em`,
            width: widths.mobile,
            marginTop: '-0.5em'
        },
        "@media (max-aspect-ratio: 1/2)": {
            fontSize: fontSizes.ipx,
            height: `${heights.mobile}em`,
            width: widths.mobile,
        },
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Roboto-Light, Roboto',
    }),
    window: props => ({
        '@media screen and (min-width: 768px)': {
            fontSize: fontSizes.desktop,
            width: widths.desktop,
            height: widths.desktop,
        },
        '@media screen and (max-width: 767px)': {
            fontSize: fontSizes.mobile,
            width: widths.mobile,
            height: widths.mobile,
        },
        "@media (max-aspect-ratio: 1/2)": {
            fontSize: fontSizes.ipx,
            width: widths.mobile,
            height: widths.mobile,
        },
        fontFamily: 'Roboto-Light, Roboto',
        backgroundColor: themes[props.theme].fill,
        border: `0.05em solid ${themes[props.theme].outline}`,
    }),
    piece_img: props => ({
        ...imgFillDiv,
    }),
    title: props => ({
        '@media screen and (min-width: 768px)': {
            fontSize: fontSizes.desktop,
            width: widths.desktop,
        },
        '@media screen and (max-width: 767px)': {
            fontSize: fontSizes.mobile,
            width: widths.mobile,
        },
        "@media (max-aspect-ratio: 1/2)": {
            fontSize: fontSizes.ipx,
            width: widths.mobile,
        },
        width: '100%',
        height: '1.5em',
        textAlign: 'center',
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].text,
        backgroundColor: themes[props.theme].fill,
        borderTop: `0.05em solid ${themes[props.theme].outline}`,
        borderLeft: `0.05em solid ${themes[props.theme].outline}`,
        borderRight: `0.05em solid ${themes[props.theme].outline}`,
    }),
    board_img: props => ({
        width: '100%',
        height: '100%',
    }),
    header: props => ({
        '@media screen and (min-width: 768px)': {
            fontSize: fontSizes.desktop,
            width: widths.desktop,
        },
        '@media screen and (max-width: 767px)': {
            fontSize: fontSizes.mobile,
            width: widths.mobile,
        },
        "@media (max-aspect-ratio: 1/2)": {
            fontSize: fontSizes.ipx,
            width: widths.mobile,
        },
        height: '1.5em',
        display: 'flex',
        flexWrap: 'no-wrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row-reverse',
        fontFamily: 'Roboto-Light, Roboto',
        backgroundColor: themes[props.theme].fill,
        outline: `0.05em solid ${themes[props.theme].outline}`,
    }),
    expand_widget: props => ({
        '@media screen and (min-width: 768px)': {
            fontSize: '1em',
            width: '1.5em',
            height: '1.5em',
            marginLeft: '1em',
        },
        '@media screen and (max-width: 767px)': {
            fontSize: '0.25em',
            width: '1.5em',
            height: '1.5em',
            marginLeft: '1em',
        },
        "@media (max-aspect-ratio: 1/2)": {
            fontSize: '0.25em',
            width: '1.5em',
            height: '1.5em',
            marginLeft: '1em',
        },
        cursor: 'pointer',
        color: themes[props.theme].text,
    }),
    expand_icon: props => ({
        '@media screen and (min-width: 768px)': {
            fontSize: fontSizes.desktop,
            width: '1em',
            height: '1em',
        },
        '@media screen and (max-width: 767px)': {
            fontSize: fontSizes.mobile,
            width: '0.7em',
            height: '0.7em',
        },
        "@media (max-aspect-ratio: 1/2)": {
            fontSize: fontSizes.ipx,
            width: '0.7em',
            height: '0.7em',
        },
    }),
});