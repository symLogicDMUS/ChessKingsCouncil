import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";
import {board} from "../../Reuseables/Board/Board.jss";
import {imgFillDiv} from "../../styles/imgFillDiv.jss";
import {
    fontSize00219,
    fontSize0025,
    fontSizeW0045,
    fontSizeW005,
} from "../../styles/fontSizes.jss";
import {headerFontSizes, titleFontSizes} from "../Header/ProfileHeader.jss";


export const fontSizes = {
    desktop: fontSize0025,
    mobile: fontSizeW0045,
    ipx: fontSizeW005,
    ipad: fontSizeW0045,
}

export const widths = {
    desktop: '11.55em',
    mobile: '7.5em',
}

export const heights = {
    desktop: '13.03em',
    mobile: '9em',
}

export const subtitle = (fontSize, theme) => ({
    fontSize: fontSize,
    fontFamily: 'Roboto-Light, Roboto',
    color: themes[theme].text,
    justifyContent: 'center',
});

export const item_title = (theme) => ({
    '@media screen and (min-width: 1040px)': {
        fontSize: titleFontSizes.desktop,
    },
    '@media screen and (max-width: 1040px)': {
        fontSize: titleFontSizes.mobile,
    },
    "@media screen and (max-width: 412px)": {
        fontSize: titleFontSizes.ipx,
    },
    '@media screen and (min-width: 768px) and (max-width: 1040px)': {
        fontSize: titleFontSizes.ipad,
    },
    fontFamily: 'Roboto-Light, Roboto',
    color: themes[theme].text,
    textAlign: 'center',
});

export const range_list_button_style = (screenCase) => ({
    borderRadius: 0,
    fontSize: fontSizes[screenCase],
    width: '100%',
});

export const range_list_row_style = () => ({
    cursor: 'pointer'
});

export const range_list_gen_style = (screenCase) => ({
    height: 8, //converted to em units in ScrollTable.jss
    fontSize: fontSizes[screenCase],
    width: board(fontSizes[screenCase]).width
});

export const useStyles = makeStyles({
    profile_help_text: props => ({
        '@media screen and (max-width: 1040px)': {
            height: '225vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'space-evenly',
        },
        '@media screen and (max-width: 412px)': {
            height: '200vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'space-evenly',
        },
    }),
    flexbox: props => ({
        margin: 'auto',
        display: 'flex',
        flexDirection: 'row',
        '@media screen and (min-width: 1040px)': {
            width: '60%',
            justifyContent: 'space-between',
        },
        '@media screen and (max-width: 1040px)': {
            width: '95%',
            justifyContent: 'space-between',
        },
    }),
    range_board_example: props => ({
        '@media screen and (min-width: 1040px)': {
            fontSize: fontSizes.desktop,
            width: "9em",
            height: "9em",
            marginLeft: '1vw',
            outline: `0.0075em solid ${themes[props.theme].outline}`,
        },
        '@media screen and (max-width: 1040px)': {
            fontSize: fontSizes.mobile,
            width: '1em',
            height: '1em',
            outline: `0.01em solid ${themes[props.theme].outline}`,
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
    partial_range_example: props => ({
        display: "flex",
        '@media screen and (min-width: 1040px)': {
            flexDirection: "row",
            width: '95%',
            justifyContent: 'space-evenly',
        },
        '@media screen and (max-width: 1040px)': {
            flexDirection: "column",
            width: '95%',
            margin: 'auto',
            alignItems: 'center',
        },
        '@media screen and (min-width: 768px) and (max-width: 1040px)':{
            flexDirection: 'row',
        },
    }),
    profile: props => ({
        width: '95%',
        margin: 'auto',
        display: 'flex',
        '@media screen and (min-width: 1040px)': {
            height: '125vh',
            flexDirection: 'column',
            flexWrap: 'wrap',
        },
        '@media screen and (max-width: 1040px)': {
            height: '80vh',
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
        '@media screen and (max-width: 412px)': {
            height: '70vh',
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
        '@media screen and (min-width: 768px) and (max-width: 1040px)': {
            height: '100vh',
        },
    }),
    item: props => ({
        '@media screen and (min-width: 1040px)': {
            fontSize: fontSizes.desktop,
            height: `${heights.desktop}em`,
            width: widths.desktop,
        },
        '@media screen and (max-width: 1040px)': {
            fontSize: fontSizes.mobile,
            height: `${heights.mobile}em`,
            width: widths.mobile,
            marginTop: '-0.5em'
        },
        "@media screen and (max-width: 412px)": {
            fontSize: fontSizes.ipx,
            height: `${heights.mobile}em`,
            width: widths.mobile,
        },
        '@media screen and (min-width: 768px) and (max-width: 1040px)': {
            fontSize: fontSizes.ipad,
            height: `${heights.mobile}em`,
            width: widths.mobile,
        },
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Roboto-Light, Roboto',
    }),
    window: props => ({
        '@media screen and (min-width: 1040px)': {
            fontSize: fontSizes.desktop,
            width: widths.desktop,
            height: widths.desktop,
        },
        '@media screen and (max-width: 1040px)': {
            fontSize: fontSizes.mobile,
            width: widths.mobile,
            height: widths.mobile,
        },
        "@media screen and (max-width: 412px)": {
            fontSize: fontSizes.ipx,
            width: widths.mobile,
            height: widths.mobile,
        },
        '@media screen and (min-width: 768px) and (max-width: 1040px)': {
            fontSize: fontSizes.ipad,
            width: widths.mobile,
            height: widths.mobile,
        },
        fontFamily: 'Roboto-Light, Roboto',
        backgroundColor: themes[props.theme].fill,
        outline: `0.05em solid ${themes[props.theme].outline}`,
    }),
    piece_img: props => ({
        ...imgFillDiv,
    }),
    board_img: props => ({
        width: '100%',
        height: '100%',
    }),
    header: props => ({
        '@media screen and (min-width: 1040px)': {
            fontSize: headerFontSizes.desktop,
        },
        '@media screen and (max-width: 1040px)': {
            fontSize: headerFontSizes.mobile,
        },
        "@media screen and (max-width: 412px)": {
            fontSize: headerFontSizes.ipx,
        },
        '@media screen and (min-width: 768px) and (max-width: 1040px)': {
            fontSize: headerFontSizes.ipad,
        },
        width: '100%',
        height: '1.5em',
        display: 'flex',
        flexWrap: 'no-wrap',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row-reverse',
        backgroundColor: themes[props.theme].fill,
        outline: `0.05em solid ${themes[props.theme].outline}`,
    }),
    range_title: props => ({
        ...item_title(props.theme),
        marginLeft: 'auto',
        transform: 'translate(0.5em, 0)',
    }),
    avatar_title: props => ({
        ...item_title(props.theme)
    }),
    expand_widget: props => ({
        '@media screen and (min-width: 1040px)': {
            fontSize: headerFontSizes.desktop,
        },
        '@media screen and (max-width: 1040px)': {
            fontSize: headerFontSizes.mobile,
        },
        "@media screen and (max-width: 412px)": {
            fontSize: headerFontSizes.ipx,
        },
        '@media screen and (min-width: 768px) and (max-width: 1040px)': {
            fontSize: headerFontSizes.ipad,
        },
        marginLeft: 'auto',
        width: '1em',
        height: '1em',
        cursor: 'pointer',
        color: themes[props.theme].text,
    }),
    expand_icon: props => ({
        fontSize: 'inherit',
        width: '1em',
        height: '1em',
    }),
}, {index: 1});