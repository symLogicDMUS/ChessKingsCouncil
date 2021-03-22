import makeStyles from "@material-ui/core/styles/makeStyles";
import {neighborWidth} from "../../Reuseables/Drawers/PersistentDrawer.jss";
import {fontSizes, widths} from "../PieceProfiles.jss";
import {themes} from "../../styles/themes.jss";
import {profileHeight} from "../Profile.jss";
import {modal} from "../../helpers/modal.jss";

export const useStyles = makeStyles({
    modal: props => ({
       ...modal,
       zIndex: 9,
    }),
    profile_wb: props => ({
        zIndex: 'inherit',
        display: 'flex',
        '@media screen and (max-width: 1040px)': {
            fontSize: fontSizes.mobile,
            height: `${profileHeight*0.85}`,
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
        '@media screen and (min-width: 768px) and (max-width: 1040px)':{
            width: '100%',
            fontSize: fontSizes.ipad,
            flexDirection: 'row',
            flexWrap: 'no-wrap',
            justifyContent: 'space-between',
            marginBottom: '0.7em',
            marginTop: '0.7em',
        },
        '@media screen and (min-width: 1040px)': {
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
        '@media screen and (max-width: 1040px)': {
            fontSize: fontSizes.mobile,
            width: widths.mobile,
        },
        '@media screen and (min-width: 768px) and (max-width: 1040px)':{
            fontSize: fontSizes.ipad,
            width: widths.ipad,
        },
        '@media screen and (min-width: 1040px)': {
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
        '@media screen and (min-width: 1040px)': {
            fontSize: fontSizes.desktop,
        },
        '@media screen and (max-width: 1040px)': {
            fontSize: fontSizes.mobile,
        },
        '@media screen and (min-width: 768px) and (max-width: 1040px)':{
            fontSize: fontSizes.ipad,
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
    profile_wb_drawer_item: props => ({
        fontSize: neighborWidth*0.13333*0.65,
    }),
    drawer_item_margins: props => ({
        marginTop: '1.5em',
    }),
}, {index: 1})