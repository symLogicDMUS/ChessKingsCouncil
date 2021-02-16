import {fontSize002, fontSize0023, fontSizeW004} from "../../styles/fontSizes.jss";
import {availHeight, innerHeight} from "../../helpers/windowMeasurments";
import {appBarHeight} from "../../Reuseables/PersistentDrawer.jss";
import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    img_window: props => ({
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        backgroundColor: themes[props.theme].fill,
        '@media (max-aspect-ratio: 6/10)': {
            fontSize: (innerHeight()*0.4 - appBarHeight) -  (innerHeight()*0.4 - appBarHeight)*0.35,
            width: '1em',
            height: '1em',
            borderRadius: '0.035em',
            border: `0.0075em solid ${themes[props.theme].outline}`,
        },
        '@media (min-aspect-ratio: 6/10) and (max-aspect-ratio: 834/1194)': {
            fontSize: (innerHeight()*0.4 - appBarHeight) -  (innerHeight()*0.4 - appBarHeight)*0.35,
            width: "1em",
            height: "1em",
            borderRadius: '0.035em',
            border: `0.0075em solid ${themes[props.theme].outline}`,
        },
        '@media (min-aspect-ratio: 834/1194) and (max-aspect-ratio: 1/1)':{
            fontSize: (innerHeight()*0.35 - appBarHeight) -  (innerHeight()*0.35 - appBarHeight)*0.25,
            width: '1em',
            height: '1em',
            margin: 'auto',
            borderRadius: '0.035em',
            border: `0.005em solid ${themes[props.theme].outline}`,
        },
        '@media (min-aspect-ratio: 1001/1000)': {
            fontSize: fontSize002,
            width: "9em",
            height: "9em",
            border: "0.05em solid #2b2b2b",
            borderRadius: '0.2em',
        },
    }),
    img_label: props => ({
        // fontSize: fontSize002,
        display: 'flex',
        direction: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    }),
    icon: (props) => ({
        '@media (max-aspect-ratio: 6/10)': {
            fontSize: fontSize0023
        },
        "@media (min-aspect-ratio: 6/10) and (max-aspect-ratio: 834/1194)": {
            fontSize: fontSize0023
        },
        '@media (min-aspect-ratio: 834/1194) and (max-aspect-ratio: 1/1)':{
            fontSize: fontSizeW004,
        },
        '@media (min-aspect-ratio: 1001/1000)': {
            fontSize: fontSize002,
        },
        color: themes[props.theme].text,
        padding: 0,
    }),
    text: props => ({
        '@media (min-aspect-ratio: 6/10) and (max-aspect-ratio: 834/1194)': {
            fontSize: fontSize0023
        },
        '@media (min-aspect-ratio: 834/1194) and (max-aspect-ratio: 1/1)':{
            fontSize: fontSizeW004,
        },
        '@media (min-aspect-ratio: 1001/1000)': {
            fontSize: fontSize002,
        },
        color: themes[props.theme].text,
        fontFamily: 'Roboto-Light, Roboto',
        marginLeft: '0.1em',
        lineHeight: '0.7em',
    }),
});
