import {makeStyles} from "@material-ui/core/styles";
import {fontSizes, widths} from "./PieceProfiles.jss";
import {themes} from "../styles/themes.jss";
import {fontSize0025, fontSizeW003224, fontSizeW0048, fontSizeW005, fontSizeW0055} from "../styles/fontSizes.jss";
import {headerFontSizes, titleFontSizes} from "./Header/ProfileHeader.jss";

export const useStyles = makeStyles({
    header: props => ({
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
            fontSize: headerFontSizes.desktop,
        },
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: headerFontSizes.mobile,
        },
        "@media screen and (max-device-width: 767px) and (max-aspect-ratio: 6/10)": {
            fontSize: headerFontSizes.ipx,
        },
        '@media screen and (min-device-width: 768px) and (max-device-width: 991px) and (max-aspect-ratio: 1/1)':{
            fontSize: headerFontSizes.ipad,
        },
        width: '100%',
        height: '1.5em',
        display: 'flex',
        flexWrap: 'no-wrap',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row-reverse',
        fontFamily: 'Roboto-Light, Roboto',
        backgroundColor: themes[props.theme].fill,
        outline: `0.05em solid ${themes[props.theme].outline}`,
    }),
    /*Parts of the range table's header: */
    title: props => ({
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
            fontSize: titleFontSizes.desktop,
        },
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: titleFontSizes.mobile,
        },
        "@media screen and (max-device-width: 767px) and (max-aspect-ratio: 6/10)": {
            fontSize: titleFontSizes.ipx,
        },
        '@media screen and (min-device-width: 768px) and (max-device-width: 991px) and (max-aspect-ratio: 1/1)':{
            fontSize: titleFontSizes.ipad,
        },
        marginLeft: 'auto',
        transform: 'translate(0.5em, 0)',
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].text,
        textAlign: 'center',
    }),
    expand_widget: props => ({
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
            fontSize: headerFontSizes.desktop,
        },
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: headerFontSizes.mobile,
        },
        "@media screen and (max-device-width: 767px) and (max-aspect-ratio: 6/10)": {
            fontSize: headerFontSizes.ipx,
        },
        '@media screen and (min-device-width: 768px) and (max-device-width: 991px) and (max-aspect-ratio: 1/1)':{
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
});