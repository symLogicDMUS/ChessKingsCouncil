import {makeStyles} from "@material-ui/core/styles";
import {fontSizes, widths, widths as avatarSize} from "../PieceProfiles.jss";
import {themes} from "../../styles/themes.jss";
import {getDrawerFontSize} from "./ProfileWB.jss";
import {neighborWidth} from "../../Reuseables/Drawers/PersistentDrawer.jss";

export const heights = {
    desktop: 13.03,
    mobile: 9,
    ipad: 9,
    ipx: 9,
    short: 9,
}

export const drawerMargins = (hasDrawerParent) => {
    if (hasDrawerParent) {
        return {
            marginTop: '1.5em',
        }
    }
    else {
        return null;
    }
};

export const useStyles = makeStyles({
    profile_wb_range: props => ({
        '@media screen and (min-width: 1040px)': {
            fontSize: fontSizes.desktop,
            height: `${heights.desktop}em`,
            width: avatarSize.desktop,
        },
        '@media screen and (max-width: 1040px)': {
            fontSize: fontSizes.mobile,
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
            height: `${heights.ipad}em`,
            width: avatarSize.ipad,
        },
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Roboto-Light, Roboto',
    }),
    board_window: props => ({
        display: 'grid',
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
}, {index: 1});