import {themes} from "../styles/themes.jss";
import {fontSize002} from "../styles/fontSizes.jss";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {sqrItemSizeLg, sqrItemSizeMd, sqrItemSizeSm
} from "./constants.jss";

export const useStyles = makeStyles({
    title_bar: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '1rem',
        paddingBottom: '1rem',
        color: themes[props.theme].text,
        borderBottom: `0.05em solid ${themes[props.theme].outline}`,
        '@media screen and (max-width: 960px)': {
            width: '90vw',
            marginLeft: '5vw',
        },
        '@media screen and (min-width: 960px)': {
            width: '46.25vw',
            marginLeft: '3.25%',
        },
    }),
    title: props => ({
       fontSize: fontSize002
    }),
    search: props => ({
        '@media screen and (max-width: 600px)': {
            width: sqrItemSizeSm,
        },
        '@media screen and (min-width: 600px) and (max-width: 960px)': {
            width: sqrItemSizeMd,
        },
        '@media screen and (min-width: 960px)': {
            width: sqrItemSizeLg,
        },
        height: '1.85rem',
    }),
}, {index: 1});