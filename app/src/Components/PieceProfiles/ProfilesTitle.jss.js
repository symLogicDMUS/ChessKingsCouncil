import {themes} from "../styles/themes/themes.jss";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {
    marginMd,
    headerMarginSm,
    sqrItemSizeLg,
    sqrItemSizeMd,
    sqrItemSizeSm,
    headerWidthMd,
    headerWidthSm,
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
        '@media screen and (max-width: 600px)': {
            width: headerWidthSm,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: headerMarginSm,
        },
        '@media screen and (min-width: 600px) and (max-width: 960px)': {
            width: headerWidthMd,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: marginMd,
            marginBottom: marginMd,
        },
        '@media screen and (min-width: 960px)': {
            width: '46.25vw',
            marginLeft: '3.25%',
        },
    }),
    title: props => ({
        fontSize: '2vh'
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
    icon: props => ({
        marginLeft: '0.5rem',
        fontSize: '1.25rem',
    }),
}, {index: 1});