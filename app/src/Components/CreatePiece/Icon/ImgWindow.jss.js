import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes/themes.jss";
import {miniVariantIconsColumnWidth} from "../../Reuseables/Drawers/MiniVariantDrawer.jss";

const windowSizeSm = '0.42em';
const windowSizeLg = "10.625vw";

/* sm */
const halfMargin = '0.025em';
const margin = '0.05em';

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
            fontSize: `calc(100vw - ${miniVariantIconsColumnWidth}px)`,
            border: `0.02rem solid ${themes[props.theme].outline}`,
        },
        '@media screen and (min-width: 960px)': {
            width: windowSizeLg,
            height: windowSizeLg,
            border: `0.005rem solid ${themes[props.theme].outline}`,
        },
    }),
    white_window: props => ({
        '@media screen and (max-width: 960px)': {
            marginRight: halfMargin,
            marginTop: halfMargin,
            marginLeft: margin,
            marginBottom: margin,
        },
    }),
    black_window: props => ({
        '@media screen and (max-width: 960px)': {
            marginLeft: halfMargin,
            marginTop: halfMargin,
            marginRight: margin,
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
        fontSize: '1.5rem',
        color: themes[props.theme].text,
        marginRight: '0.2rem',
    }),
    text: props => ({
        fontSize: '1.5rem',
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
