import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";

const windowSizeSm = '30vw';
const windowSizeLg = "10.625vw";

/* Sm */
const halfMargin = '1.75vw';
const margin = '3.5vw';

export const borderRadius = {borderRadius: '0.25rem'};
export const originTransform = {vertical: 'top', horizontal: 'right'};


export const useStyles = makeStyles({
    img_window: props => ({
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        backgroundColor: themes[props.theme].fill,
        '@media screen and (max-width: 960px)': {
            width: windowSizeSm,
            height: windowSizeSm,
            border: `0.02em solid ${themes[props.theme].outline}`,
        },
        '@media screen and (min-width: 960px)': {
            width: windowSizeLg,
            height: windowSizeLg,
            border: `0.005em solid ${themes[props.theme].outline}`,
        },
    }),
    white_window: props => ({
        '@media screen and (max-width: 960px)': {
            marginRight: halfMargin,
            marginLeft: margin,
            marginTop: '1vw',
            marginBottom: margin,
        },
    }),
    black_window: props => ({
        '@media screen and (max-width: 960px)': {
            marginLeft: halfMargin,
            marginRight: margin,
            marginTop: '1vw',
            marginBottom: margin,
        },
    }),
    img_label: props => ({
        display: 'flex',
        direction: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    }),
    icon: (props) => ({
        fontSize: 'inherit',
        color: themes[props.theme].text,
        marginRight: '0.2rem',
    }),
    text: props => ({
        fontSize: '2.85vh',
        color: themes[props.theme].text,
    }),
    borderRadius: props => ({
        '@media screen and (max-width: 960px)': {
            borderRadius: '0.035rem',
        },
        '@media screen and (min-width: 960px)': {
            borderRadius: '0.25rem',
        },
    }),
    img_upload_option: props => ({
        backgroundColor: 'unset',
    }),
    menu_item: props => ({
        padding: 0,
    }),
}, {index: 1});
