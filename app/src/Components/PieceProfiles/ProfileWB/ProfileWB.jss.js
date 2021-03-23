import makeStyles from "@material-ui/core/styles/makeStyles";
import {neighborWidth} from "../../Reuseables/Drawers/PersistentDrawer.jss";
import {modal} from "../../helpers/modal.jss";
import {themes} from "../../styles/themes.jss";
import {headerWidthDesktop} from "../Header/ProfileHeader.jss";

export const useStyles = makeStyles({
    modal: props => ({
        ...modal,
        zIndex: 9,
    }),
    profile_wb: props => ({
        zIndex: 'inherit',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
        '@media screen and (min-width: 1040px)': {
            width: headerWidthDesktop,
            marginTop: '0.875vw',
            marginBottom: '0.875vw',
        },
    }),
    sqr_item_area: props => ({
        display: 'flex',
        flexDirection: 'column',
    }),
    /*board or avatar window*/
    sqr_item: props => ({
        '@media screen and (min-width: 1040px)': {
            width: '14.333vw',
            height: '14.333vw',
        },
        backgroundColor: themes[props.theme].fill,
        outline: `0.05rem solid ${themes[props.theme].outline}`,
    }),
    sqr_item_header: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'center',
        '@media screen and (min-width: 1040px)': {
            width: '14.333vw',
            height: '2vw',
            outline: `0.05rem solid ${themes[props.theme].outline}`,
        },
    }),
    sqr_item_title: props => ({
        '@media screen and (max-width: 1040px)': {
            fontSize: '4.25vw',
        },
        '@media screen and (min-width: 1040px)': {
            fontSize: '2.3vh',
        },
        color: themes[props.theme].text,
    }),
    item1: props => ({
        '@media screen and (min-width: 1040px)': {
            marginRight: '0.875vw',
        },
    }),
    item2: props => ({
        '@media screen and (min-width: 1040px)': {
            marginLeft: '0.875vw',
            marginRight: '0.875vw',
        },
    }),
    item3: props => ({
        '@media screen and (min-width: 1040px)': {
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
        '@media screen and (min-width: 1040px)': {
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
        '@media screen and (min-width: 1040px)': {
            width: '1vw',
            height: '1vw',
        },
    }),
}, {index: 1})