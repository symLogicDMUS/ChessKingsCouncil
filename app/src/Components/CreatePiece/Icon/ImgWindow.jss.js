import {fontSize002, fontSize0023, fontSizeW004} from "../../styles/fontSizes.jss";
import {drawerWidth} from "../../Reuseables/Drawers/PermanentDrawer.jss";
import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";

const windowSize = '35vw';

export const useStyles = makeStyles({
    img_window: props => ({
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        backgroundColor: themes[props.theme].fill,
        '@media screen and (max-width: 960px)':{
            fontSize: '10vw',
            margin: '3.5vw',
            width: windowSize,
            height: windowSize,
            borderRadius: '0.08em',
            border: `0.02em solid ${themes[props.theme].outline}`,
        },
        '@media screen and (min-width: 960px)': {
            fontSize: '2.125vw',
            width: "10.625vw",
            height: "10.625vw",
            border: "0.005em solid #2b2b2b",
            borderRadius: '0.35rem',
        },
    }),
    white_window: props => ({
       '@media screen and (max-width: 960px)': {
           marginRight: '1vw',
       },
    }),
    black_window: props => ({
        '@media screen and (max-width: 960px)': {
            marginLeft: '1vw',
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
        /*tall phones*/
        '@media screen and (max-width: 412px)': {
            fontSize: fontSize0023,
        },
        /*medium phones*/
        "@media screen and (min-width: 412px) and  (max-width: 767px)": {
            fontSize: fontSize0023,
        },
        /*tablets*/
        '@media screen and (min-width: 768px) and (max-width: 960px)':{
            fontSize: fontSizeW004,
        },
        /*wide*/
        '@media screen and (min-width: 960px)': {
            fontSize: fontSize002,
        },
        color: themes[props.theme].text,
        padding: 0,
    }),
    text: props => ({
        /*medium phones*/
        '@media screen and (min-width: 412px) and  (max-width: 767px)': {
            fontSize: fontSize0023
        },
        /*tablets*/
        '@media screen and (min-width: 768px) and (max-width: 960px)':{
            fontSize: fontSizeW004,
        },
        /*wide*/
        '@media screen and (min-width: 960px)': {
            fontSize: fontSize002,
        },
        color: themes[props.theme].text,
        fontFamily: 'Roboto-Light, Roboto',
        marginLeft: '0.1em',
        lineHeight: '0.7em',
    }),
}, {index: 1});
