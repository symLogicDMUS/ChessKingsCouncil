import makeStyles from "@material-ui/core/styles/makeStyles";
import {neighborWidth} from "../../Reuseables/Drawers/PersistentDrawer.jss";
import {fontSizes, widths} from "../PieceProfiles.jss";
import {themes} from "../../styles/themes.jss";
import {profileHeight} from "../Profile.jss";
import {modal} from "../../helpers/modal.jss";

export const getDrawerFontSize = (hasDrawerParent) => {
    if (hasDrawerParent) {
        return {fontSize: neighborWidth*0.13333*0.65}
    }
    else {
        return null;
    }
};

export const useStyles = makeStyles({
    modal: props => ({
       ...modal,
       zIndex: 9,
    }),
    profile_wb: props => ({
        zIndex: 'inherit',
        display: 'flex',
        '@media screen and (max-device-width: 1040px)': {
            fontSize: fontSizes.mobile,
            ...getDrawerFontSize(props.hasDrawerParent),
            height: `${profileHeight*0.85}`,
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
        '@media screen and (min-device-width: 768px) and (max-device-width: 1040px)':{
            width: '100%',
            fontSize: fontSizes.ipad,
            ...getDrawerFontSize(props.hasDrawerParent),
            flexDirection: 'row',
            flexWrap: 'no-wrap',
            justifyContent: 'space-between',
            marginBottom: '0.7em',
            marginTop: '0.7em',
        },
        '@media screen and (min-device-width: 1040px)': {
            width: '100%',
            fontSize: fontSizes.desktop,
            marginTop: '0.7em',
            marginBottom: '0.7em',
            flexDirection: 'row',
            flexWrap: 'no-wrap',
            justifyContent: 'space-between',
        },
    }),
    range_header: props => ({
        '@media screen and (max-device-width: 1040px)': {
            fontSize: fontSizes.mobile,
            width: widths.mobile,
            ...getDrawerFontSize(props.hasDrawerParent),
        },
        '@media screen and (min-device-width: 768px) and (max-device-width: 1040px)':{
            fontSize: fontSizes.ipad,
            width: widths.ipad,
            ...getDrawerFontSize(props.hasDrawerParent),
        },
        '@media screen and (min-device-width: 1040px)': {
            fontSize: fontSizes.desktop,
            width: widths.desktop,
        },
        height: '1.5em',
        display: 'flex',
        flexWrap: 'no-wrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row-reverse',
        fontFamily: 'Roboto-Light, Roboto',
        backgroundColor: themes[props.theme].fill,
        borderTop: `0.05em solid ${themes[props.theme].outline}`,
        borderLeft: `0.05em solid ${themes[props.theme].outline}`,
        borderRight: `0.05em solid ${themes[props.theme].outline}`,
    }),
    range_modal: props => ({
        '@media screen and (min-device-width: 1040px)': {
            fontSize: fontSizes.desktop,
        },
        '@media screen and (max-device-width: 1040px)': {
            fontSize: fontSizes.mobile,
            ...getDrawerFontSize(props.hasDrawerParent),
        },
        '@media screen and (min-device-width: 768px) and (max-device-width: 1040px)':{
            fontSize: fontSizes.ipad,
            ...getDrawerFontSize(props.hasDrawerParent),
        },
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '0.25em',
        backgroundColor: themes[props.theme].fill,
        border: `0.1em solid ${themes[props.theme].outline}`,
    }),
}, {index: 1})