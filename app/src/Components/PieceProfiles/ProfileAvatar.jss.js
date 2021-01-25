import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../styles/themes.jss";
import {imgFillDiv} from "../Reuseables/imgFillDiv.jss";
import {fontSizes, heights, widths as avatarSize, widths} from "./PieceProfiles.jss";

export const useStyles = makeStyles({
    profile_avatar: props => ({
        '@media screen and (min-width: 768px)': {
            fontSize: fontSizes.desktop,
            height: `${heights.desktop}`,
            width: avatarSize.desktop,
        },
        '@media screen and (max-width: 767px)': {
            fontSize: fontSizes.mobile,
            height: `${heights.mobile}`,
            width: avatarSize.mobile,
            marginTop: '-0.5em'
        },
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Roboto-Light, Roboto',
    }),
    avatar_title: props => ({
        '@media screen and (min-width: 768px)': {
            fontSize: fontSizes.desktop,
            width: widths.desktop,
        },
        '@media screen and (max-width: 767px)': {
            fontSize: fontSizes.mobile,
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
    avatar_window: props => ({
        '@media screen and (min-width: 768px)': {
            fontSize: fontSizes.desktop,
            width: avatarSize.desktop,
            height: avatarSize.desktop,
        },
        '@media screen and (max-width: 767px)': {
            fontSize: fontSizes.mobile,
            width: avatarSize.mobile,
            height: avatarSize.mobile,
        },
        fontFamily: 'Roboto-Light, Roboto',
        backgroundColor: themes[props.theme].fill,
        border: `0.05em solid ${themes[props.theme].outline}`,
    }),
    piece_img: props => ({
       ...imgFillDiv,
    }),
});