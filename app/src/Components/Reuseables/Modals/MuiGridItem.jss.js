import makeStyles from "@material-ui/core/styles/makeStyles";
import {fontSize001725, fontSize002} from "../../styles/fontSizes.jss";
import {themes} from "../../styles/themes.jss";

const itemSizewide = '16vw';
const itemMarginwide = '2.5vw';
const itemSizethin = '36.6vw';
const itemMarginthin = '3vw';

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
            margin: itemMarginthin,
            width: itemSizethin,
        },
        '@media screen and (min-width: 960px)': {
            margin: itemMarginwide,
            width: itemSizewide,
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
            width: itemSizethin,
            height: itemSizethin,
        },
        '@media screen and (min-width: 960px)': {
            width: itemSizewide,
            height: itemSizewide,
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
        '@media screen and (max-width: 960px)': {
            margin: itemMarginthin,
            width: itemSizethin,
            height: itemSizethin,
        },
        '@media screen and (min-width: 960px)': {
            margin: itemMarginwide,
            width: itemSizewide,
            height: itemSizewide,
        },
    }),
    img: props => ({
        width: '95%',
        height: '95%',
    }),
}, {index: 1});