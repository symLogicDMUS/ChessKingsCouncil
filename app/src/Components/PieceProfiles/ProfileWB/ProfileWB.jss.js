import makeStyles from "@material-ui/core/styles/makeStyles";
import {modal} from "../../helpers/modal.jss";
import {themes} from "../../styles/themes/themes.jss";
import {
    marginLg,
    marginMd,
    headerWidthLg,
    sqrItemSizeLg,
    sqrItemHeaderHeightLg,
    sqrItemHeaderHeightMd,
    sqrItemHeaderHeightSm,
    sqrItemSizeMd,
    sqrItemSizeSm,
} from "../constants.jss";


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
            width: headerWidthLg,
            marginTop: marginLg,
            marginBottom: marginLg,
        },
    }),
    profile_w: props => ({
        '@media screen and (max-width: 960px)': {
            marginLeft: 'auto',
            marginRight: marginMd,
        },
    }),
    profile_b: props => ({
        '@media screen and (max-width: 960px)': {
            marginLeft: marginMd,
            marginRight: 'auto'
        },
    }),
    sqr_item_area: props => ({
        display: 'flex',
        flexDirection: 'column',
    }),
    /*board or avatar window*/
    sqr_item: props => ({
        '@media screen and (max-width: 600px)': {
            width: sqrItemSizeSm,
            height: sqrItemSizeSm,
        },
        '@media screen and (min-width: 600px) and (max-width: 960px)': {
            width: sqrItemSizeMd,
            height: sqrItemSizeMd,
        },
        '@media screen and (min-width: 960px)': {
            width: sqrItemSizeLg,
            height: sqrItemSizeLg,
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
        '@media screen and (max-width: 600px)': {
            width: sqrItemSizeSm,
            height: sqrItemHeaderHeightSm,
        },
        '@media screen and (min-width: 600px) and (max-width: 960px)': {
            width: sqrItemSizeMd,
            height: sqrItemHeaderHeightMd,
        },
        '@media screen and (min-width: 960px)': {
            width: sqrItemSizeLg,
            height: sqrItemHeaderHeightLg,
        },
        outline: `0.05rem solid ${themes[props.theme].outline}`,
    }),
    sqr_item_title: props => ({
        '@media screen and (max-width: 600px)': {
            fontSize: '0.75rem',
        },
        '@media screen and (min-width: 600px) and (max-width: 960px)': {
            fontSize: '2.5vw',
        },
        '@media screen and (min-width: 960px)': {
            fontSize: '1.2vw',
        },
        color: themes[props.theme].text,
    }),
    item1: props => ({
        '@media screen and (max-width: 960px)': {
            marginTop: marginMd,
            marginBottom: marginMd,
        },
        '@media screen and (min-width: 960px)': {
            marginRight: marginLg,
        },
    }),
    item2: props => ({
        '@media screen and (max-width: 960px)': {
            marginTop: marginMd,
            marginBottom: marginMd,
        },
        '@media screen and (min-width: 960px)': {
            marginLeft: marginLg,
            marginRight: marginLg,
        },
    }),
    item3: props => ({
        '@media screen and (max-width: 960px)': {
            marginTop: marginMd,
            marginBottom: marginMd,
        },
        '@media screen and (min-width: 960px)': {
            marginLeft: marginLg,
        },
    }),
    close_area: props => ({
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