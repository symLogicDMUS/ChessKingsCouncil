import {makeStyles} from "@material-ui/core/styles";
import {fontSizes, widths, widths as avatarSize} from "../PieceProfiles.jss";
import {themes} from "../../styles/themes.jss";

export const heights = {
    desktop: 13.03,
    mobile: 9,
    ipad: 9,
    ipx: 9,
    short: 9,
}

export const useStyles = makeStyles({
    profile_wb_range: props => ({
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
            fontSize: fontSizes.desktop,
            height: `${heights.desktop}em`,
            width: avatarSize.desktop,
        },
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: fontSizes.mobile,
            height: `${heights.mobile}em`,
            width: avatarSize.mobile,
            // marginTop: '-0.5em'
        },
        "@media screen and (max-device-width: 767px) and (max-aspect-ratio: 6/10)": {
            fontSize: fontSizes.ipx,
            height: `${heights.mobile}em`,
            width: avatarSize.mobile,
        },
        /*shortest phones*/
        "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 85/100) and (max-aspect-ratio: 1/1)":{
            fontSize: fontSizes.short,
            height: `${heights.short}em`,
            width: avatarSize.short,
        },
        '@media screen and (min-device-width: 768px) and (max-device-width: 1080px) and (max-aspect-ratio: 1/1)':{
            fontSize: fontSizes.ipad,
            height: `${heights.ipad}em`,
            width: avatarSize.ipad,
        },
        // margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Roboto-Light, Roboto',
    }),
    title: props => ({
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
            fontSize: fontSizes.desktop,
            width: widths.desktop,
        },
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: fontSizes.mobile,
            width: widths.mobile,
        },
        "@media screen and (max-device-width: 767px) and (max-aspect-ratio: 6/10)": {
            fontSize: fontSizes.ipx,
            width: widths.mobile,
        },
        /*shortest phones*/
        "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 85/100) and (max-aspect-ratio: 1/1)":{
            fontSize: fontSizes.short,
            width: widths.short,
        },
        '@media screen and (min-device-width: 768px) and (max-device-width: 1080px) and (max-aspect-ratio: 1/1)':{
            fontSize: fontSizes.ipad,
            width: widths.ipad,
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
    board_window: props => ({
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
            fontSize: fontSizes.desktop,
            width: avatarSize.desktop,
            height: avatarSize.desktop,
        },
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: fontSizes.mobile,
            width: avatarSize.mobile,
            height: avatarSize.mobile,
        },
        "@media screen and (max-device-width: 767px) and (max-aspect-ratio: 6/10)": {
            fontSize: fontSizes.ipx,
            width: avatarSize.mobile,
            height: avatarSize.mobile,
        },
        /*shortest phones*/
        "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 85/100) and (max-aspect-ratio: 1/1)":{
            fontSize: fontSizes.short,
            width: avatarSize.short,
            height: avatarSize.short,
        },
        '@media screen and (min-device-width: 768px) and (max-device-width: 1080px) and (max-aspect-ratio: 1/1)':{
            fontSize: fontSizes.ipad,
            width: avatarSize.ipad,
            height: avatarSize.ipad,
        },
        fontFamily: 'Roboto-Light, Roboto',
        backgroundColor: themes[props.theme].fill,
        outline: `0.05em solid ${themes[props.theme].outline}`,
    }),
    board_img: props => ({
        width: '100%',
        height: '100%',
    }),
});