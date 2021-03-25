import makeStyles from "@material-ui/core/styles/makeStyles";
import {neighborWidth} from "../../Reuseables/Drawers/PersistentDrawer.jss";
import {modal} from "../../helpers/modal.jss";
import {themes} from "../../styles/themes.jss";
import {headerWidthwide} from "../Header/ProfileHeader.jss";

export const useStyles = makeStyles({
    modal: props => ({
        ...modal,
        zIndex: 9,
    }),
    profile_wb: props => ({
        zIndex: 'inherit',
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
        '@media screen and (max-width: 960px)': {
            flexDirection: 'column',
        },
        '@media screen and (min-width: 960px)': {
            flexDirection: 'row',
            width: headerWidthwide,
            marginTop: '0.875vw',
            marginBottom: '0.875vw',
        },
    }),
    white_profile: props => ({
        '@media screen and (max-width: 960px)': {
            marginLeft: '5vw',
            marginRight: '2.5vw',
        },
    }),
    black_profile: props => ({
        '@media screen and (max-width: 960px)': {
            marginLeft: '2.5vw',
        },
    }),
    sqr_item_area: props => ({
        display: 'flex',
        flexDirection: 'column',
    }),
    /*board or avatar window*/
    sqr_item: props => ({
        '@media screen and (max-width: 960px)': {
            width: '42.5vw',
            height: '42.5vw',
            outline: `0.05rem solid ${themes[props.theme].outline}`,
        },
        '@media screen and (min-width: 960px)': {
            width: '14.333vw',
            height: '14.333vw',
            outline: `0.05rem solid ${themes[props.theme].outline}`,
        },
        '@media screen and (max-device-width: 460px)': {
            outline: `0.12rem solid ${themes[props.theme].outline}`,
        },
        backgroundColor: themes[props.theme].fill,
    }),
    sqr_item_header: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'center',
        '@media screen and (max-width: 960px)': {
            width: '42.5vw',
            height: '5vh',
            outline: `0.05rem solid ${themes[props.theme].outline}`,
        },
        '@media screen and (min-width: 960px)': {
            width: '14.333vw',
            height: '2vw',
            outline: `0.05rem solid ${themes[props.theme].outline}`,
        },
        '@media screen and (max-device-width: 460px)': {
            outline: `0.12rem solid ${themes[props.theme].outline}`,
        },
    }),
    sqr_item_title: props => ({
        '@media screen and (max-width: 960px)': {
            fontSize: '3.5vh',
        },
        '@media screen and (min-width: 960px)': {
            fontSize: '2.3vh',
        },
        color: themes[props.theme].text,
    }),
    item1: props => ({
        '@media screen and (max-width: 960px)': {
            marginTop: '2.5vw',
            marginBottom: '2.5vw',
        },
        '@media screen and (min-width: 960px)': {
            marginRight: '0.875vw',
        },
    }),
    item2: props => ({
        '@media screen and (max-width: 960px)': {
            marginTop: '2.5vw',
            marginBottom: '2.5vw',
        },
        '@media screen and (min-width: 960px)': {
            marginLeft: '0.875vw',
            marginRight: '0.875vw',
        },
    }),
    item3: props => ({
        '@media screen and (max-width: 960px)': {
            marginTop: '2.5vw',
            marginBottom: '2.5vw',

        },
        '@media screen and (min-width: 960px)': {
            marginLeft: '0.875vw',
        },
    }),
    profile_wb_drawer_item: props => ({
        fontSize: neighborWidth * 0.13333 * 0.65,
    }),
    drawer_item_margins: props => ({
        marginTop: '1.5em',
    }),
    range_analysis: props => ({
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
        '@media screen and (min-width: 960px)': {
            margin: 'auto',
            width: '25vw',
            height: '80vh',
            borderRadius: '0.65rem',
            border: `0.2rem solid ${themes[props.theme].odd_row}`,
        },
        backgroundColor: themes[props.theme].fill,
    }),
    x_icon_flexbox: props => ({
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'flex-end',
    }),
    close_icon: props => ({
        '@media screen and (min-width: 960px)': {
            width: '1vw',
            height: '1vw',
        },
    }),
}, {index: 1})