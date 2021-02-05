import {makeStyles} from "@material-ui/core/styles";
import {fontSizes, widths, widths as avatarSize} from "../PieceProfiles.jss";
import {themes} from "../../styles/themes.jss";
import {modal} from "../../helpers/modal.jss";
import {imgFillDiv} from "../../Reuseables/imgFillDiv.jss";

export const heights = {
    desktop: 13.03,
    mobile: 9,
}

export const sqrSize = {
    desktop: '1.44375em',
    mobile: '0.9375em',
}

export const useStyles = makeStyles({
    profile_wb_range: props => ({
        '@media screen and (min-width: 768px)': {
            fontSize: fontSizes.desktop,
            height: `${heights.desktop}em`,
            width: avatarSize.desktop,
        },
        '@media screen and (max-width: 767px)': {
            fontSize: fontSizes.mobile,
            height: `${heights.mobile}em`,
            width: avatarSize.mobile,
            marginTop: '-0.5em'
        },
        "@media (aspect-ratio: 375/812)": {
            fontSize: fontSizes.ipx,
            height: `${heights.mobile}em`,
            width: avatarSize.mobile,
            marginTop: '-0.5em'
        },
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Roboto-Light, Roboto',
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
        "@media (aspect-ratio: 375/812)": {
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
    board_window: props => ({
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
        "@media (aspect-ratio: 375/812)": {
            fontSize: fontSizes.ipx,
            width: avatarSize.mobile,
            height: avatarSize.mobile,
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