import makeStyles from "@material-ui/core/styles/makeStyles";
import {fontSize001725, fontSize002} from "../../styles/fontSizes.jss";
import {themes} from "../../styles/themes.jss";

const itemSizeDesktop = '16vw';
const itemMarginDesktop = '2.5vw';
const itemSizeMobile = '36.6vw';
const itemMarginMobile = '3vw';

/**
 * item_choice: box item goes in + name of item
 * item_container: (normal and selected) box item goes in
 */
export const useStyles = makeStyles({
    item_choice: props => ({
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'center',
        '@media screen and (max-width: 1040px)': {
            margin: itemMarginMobile,
            width: itemSizeMobile,
        },
        '@media screen and (min-width: 1040px)': {
            margin: itemMarginDesktop,
            width: itemSizeDesktop,
        },
    }),
    item_container: props => ({
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: fontSize002,
        borderRadius: '0.3em',
        '@media screen and (max-width: 1040px)': {
            width: itemSizeMobile,
            height: itemSizeMobile,
        },
        '@media screen and (min-width: 1040px)': {
            width: itemSizeDesktop,
            height: itemSizeDesktop,
        },
    }),
    item_unselected: props => ({
        backgroundColor: themes[props.theme].even_row,
        border: `0.018em solid ${themes[props.theme].outline}`,
    }),
    item_selected: props => ({
        backgroundColor: themes[props.theme].odd_row,
        border: `0.018em solid ${themes[props.theme].text_alt}`
    }),
    item_name: props => ({
        textAlign: 'center',
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].text,
        fontSize: fontSize002,
        width: '99%',
    }),
    tooltip: props => ({
        fontSize: fontSize001725
    }),
    item: props => ({
        '@media screen and (max-width: 1040px)': {
            margin: itemMarginMobile,
            width: itemSizeMobile,
            height: itemSizeMobile,
        },
        '@media screen and (min-width: 1040px)': {
            margin: itemMarginDesktop,
            width: itemSizeDesktop,
            height: itemSizeDesktop,
        },
    }),
    img: props => ({
        width: '95%',
        height: '95%',
    }),
}, {index: 1});