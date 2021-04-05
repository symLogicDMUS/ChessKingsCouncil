import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";

const windowSize = '30vw';
export const borderRadius = {borderRadius: '0.25rem'};
export const originTransform = {vertical: 'top', horizontal: 'right'};

export const useStyles = makeStyles({
    img_window: props => ({
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        backgroundColor: themes[props.theme].fill,
        '@media screen and (max-width: 960px)': {
            width: windowSize,
            height: windowSize,
            border: `0.02em solid ${themes[props.theme].outline}`,
        },
        '@media screen and (min-width: 960px)': {
            width: "10.625vw",
            height: "10.625vw",
            border: `0.005em solid ${themes[props.theme].outline}`,
        },
    }),
    white_window: props => ({
        '@media screen and (max-width: 960px)': {
            marginRight: '1.75vw',
            marginLeft: '3.5vw',
            marginTop: '1.75vw',
            marginBottom: '3.5vw',
        },
    }),
    black_window: props => ({
        '@media screen and (max-width: 960px)': {
            marginLeft: '1.75vw',
            marginRight: '3.5vw',
            marginTop: '1.75vw',
            marginBottom: '3.5vw',
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
