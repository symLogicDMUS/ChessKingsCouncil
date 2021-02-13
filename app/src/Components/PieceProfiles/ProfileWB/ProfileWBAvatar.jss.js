import {themes} from "../../styles/themes.jss";
import {makeStyles} from "@material-ui/core/styles";
import {imgFillDiv} from "../../Reuseables/imgFillDiv.jss";
import {headerFontSizes, titleFontSizes} from "../Header/ProfileHeader.jss";
import {fontSizes, heights, widths as avatarSize} from "../PieceProfiles.jss";

export const useStyles = makeStyles({
    profile_avatar: props => ({
        '@media (min-aspect-ratio: 16/9)': {
            fontSize: fontSizes.desktop,
            height: `${heights.desktop}em`,
            width: avatarSize.desktop,
        },
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: fontSizes.mobile,
            height: `${heights.mobile}em`,
            width: avatarSize.mobile,
            marginTop: '-0.5em'
        },
        "@media (max-aspect-ratio: 1/2)": {
            fontSize: fontSizes.ipx,
            height: `${heights.mobile}em`,
            width: avatarSize.mobile,
        },
        '@media (aspect-ratio: 1024/1366)':{
            fontSize: fontSizes.ipad,
            height: `${heights.ipad}em`,
            width: avatarSize.ipad,
            marginTop: 0,
        },
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Roboto-Light, Roboto',
    }),
    avatar_header: props => ({
        '@media (min-aspect-ratio: 16/9)': {
            fontSize: headerFontSizes.desktop,
        },
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: headerFontSizes.mobile,
        },
        "@media (max-aspect-ratio: 1/2)": {
            fontSize: headerFontSizes.ipx,
        },
        '@media (aspect-ratio: 1024/1366)':{
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
        '@media (min-aspect-ratio: 16/9)': {
            fontSize: titleFontSizes.desktop,
        },
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: titleFontSizes.mobile,
        },
        "@media (max-aspect-ratio: 1/2)": {
            fontSize: titleFontSizes.ipx,
        },
        '@media (aspect-ratio: 1024/1366)':{
            fontSize: titleFontSizes.ipad,
        },
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].text,
        textAlign: 'center',
    }),
    avatar_window: props => ({
        '@media (min-aspect-ratio: 16/9)': {
            fontSize: fontSizes.desktop,
            width: avatarSize.desktop,
            height: avatarSize.desktop,
        },
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: fontSizes.mobile,
            width: avatarSize.mobile,
            height: avatarSize.mobile,
        },
        "@media (max-aspect-ratio: 1/2)": {
            fontSize: fontSizes.ipx,
            width: avatarSize.mobile,
            height: avatarSize.mobile,
        },
        '@media (aspect-ratio: 1024/1366)':{
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
});