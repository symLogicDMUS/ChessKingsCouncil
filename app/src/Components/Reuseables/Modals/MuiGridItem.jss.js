import makeStyles from "@material-ui/core/styles/makeStyles";
import {fontSize001725, fontSize002} from "../../styles/fontSizes.jss";
import {themes} from "../../styles/themes.jss";

const itemSizeLg = '16vw';
const itemMarginLg = '2.5vw';
const itemSizeMd = '36.6vw';
const itemMarginMd = '3vw';

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
        '@media screen and (max-width: 960px)': {
            margin: itemMarginMd,
            width: itemSizeMd,
        },
        '@media screen and (min-width: 960px)': {
            margin: itemMarginLg,
            width: itemSizeLg,
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
        '@media screen and (max-width: 960px)': {
            width: itemSizeMd,
            height: itemSizeMd,
        },
        '@media screen and (min-width: 960px)': {
            width: itemSizeLg,
            height: itemSizeLg,
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
        '@media screen and (max-width: 960px)': {
            fontSize: '0.9rem',
        },
        '@media screen and (min-width: 960px)': {
            fontSize: '1.5vw',
        },
        textAlign: 'center',
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].text,
        width: '99%',
    }),
    tooltip: props => ({
        fontSize: fontSize001725
    }),
    item: props => ({
        '@media screen and (max-width: 960px)': {
            margin: itemMarginMd,
            width: itemSizeMd,
            height: itemSizeMd,
        },
        '@media screen and (min-width: 960px)': {
            margin: itemMarginLg,
            width: itemSizeLg,
            height: itemSizeLg,
        },
    }),
    img: props => ({
        width: '95%',
        height: '95%',
    }),
}, {index: 1});