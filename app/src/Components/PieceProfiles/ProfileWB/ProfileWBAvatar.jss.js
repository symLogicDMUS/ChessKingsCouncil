import {themes} from "../../styles/themes.jss";
import {makeStyles} from "@material-ui/core/styles";
import {imgFillDiv} from "../../styles/imgFillDiv.jss";
import {headerFontSizes, titleFontSizes} from "../Header/ProfileHeader.jss";
import {fontSizes, heights, widths as avatarSize} from "../PieceProfiles.jss";
import {getDrawerFontSize} from "./ProfileWB.jss";

export const avatarDrawerMargins = (hasDrawerParent) => {
    if (hasDrawerParent) {
        return {marginTop: '0.75em'}
    }
    else {
        return null;
    }
};

export const useStyles = makeStyles({
    profile_avatar: props => ({
        '@media screen and (min-width: 1040px)': {
            fontSize: fontSizes.desktop,
            height: `${heights.desktop}em`,
            width: avatarSize.desktop,
        },
        '@media screen and (max-width: 1040px)': {
            fontSize: fontSizes.mobile,
            marginTop: '-0.5em',
            height: `${heights.mobile}em`,
            width: avatarSize.mobile,
        },
        "@media screen and (max-width: 412px)": {
            fontSize: fontSizes.ipx,
            height: `${heights.mobile}em`,
            width: avatarSize.mobile,
        },

        '@media screen and (min-width: 768px) and (max-width: 1040px)':{
            fontSize: fontSizes.ipad,
            marginTop: 0,
            height: `${heights.ipad}em`,
            width: avatarSize.ipad,
        },
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Roboto-Light, Roboto',
    }),
    avatar_header: props => ({
        '@media screen and (min-width: 1040px)': {
            fontSize: headerFontSizes.desktop,
        },
        '@media screen and (max-width: 1040px)': {
            fontSize: headerFontSizes.mobile,
        },
        "@media screen and (max-width: 412px)": {
            fontSize: headerFontSizes.ipx,
        },
        '@media screen and (min-width: 768px) and (max-width: 1040px)':{
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
    avatar_title: props => ({
        '@media screen and (min-width: 1040px)': {
            fontSize: titleFontSizes.desktop,
        },
        '@media screen and (max-width: 1040px)': {
            fontSize: titleFontSizes.mobile,
        },
        "@media screen and (max-width: 412px)": {
            fontSize: titleFontSizes.ipx,
        },
        '@media screen and (min-width: 768px) and (max-width: 1040px)':{
            fontSize: titleFontSizes.ipad,
        },
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].text,
        textAlign: 'center',
    }),
    avatar_window: props => ({
        '@media screen and (min-width: 1040px)': {
            fontSize: fontSizes.desktop,
            width: avatarSize.desktop,
            height: avatarSize.desktop,
        },
        '@media screen and (max-width: 1040px)': {
            fontSize: fontSizes.mobile,
            width: avatarSize.mobile,
            height: avatarSize.mobile,
        },
        "@media screen and (max-width: 412px)": {
            fontSize: fontSizes.ipx,
            width: avatarSize.mobile,
            height: avatarSize.mobile,
        },
        '@media screen and (min-width: 768px) and (max-width: 1040px)':{
            fontSize: fontSizes.ipad,
            width: avatarSize.ipad,
            height: avatarSize.ipad,
        },
        fontFamily: 'Roboto-Light, Roboto',
        backgroundColor: themes[props.theme].fill,
        outline: `0.05em solid ${themes[props.theme].outline}`,
    }),
    piece_img: props => ({
       ...imgFillDiv,
    }),
}, {index: 1});