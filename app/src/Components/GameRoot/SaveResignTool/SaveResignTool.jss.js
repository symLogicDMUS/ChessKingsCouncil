import {
    fontSize002,
    fontSize00224,
    fontSize0025,
    fontSize0034
} from "../../styles/fontSizes.jss";
import {drawerItemWidth} from "../../NewGame/Customize/Customize.jss";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {themes} from "../../styles/themes.jss";
import {availHeight, availWidth} from "../../helpers/windowMeasurments";
import {appBarHeight} from "../../Reuseables/PersistentDrawer.jss";

export const useStyles = makeStyles({
    save_resign_tool: props => ({
        fontSize: fontSize002,
        display: 'flex',
        flexDirection: 'row',
        '@media (min-aspect-ratio: 16/9)': {
            width: drawerItemWidth,
            height: '5em',
            marginLeft: '1em',
            marginBottom: '1em',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            backgroundColor: themes[props.theme].fill,
        },
        '@media (max-aspect-ratio: 1/1)': {
            width: '100%',
            height: '100%',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
        },
        '@media (max-aspect-ratio: 1/2)': {
            fontSize: availWidth() * 0.25,
            flexDirection: 'column',
            alignItems: 'center',
            height: availHeight() - (availWidth() + appBarHeight*2),
        },
    }),
    option: props => ({
        '@media (min-aspect-ratio: 16/9)': {
            fontSize: fontSize002,
            width: '5em',
            height: '5em',
            border: '0.05em solid #2b2b2b',
        },
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: fontSize0034,
            width: '4em',
            height: '4em',
            border: '0.05em solid #2b2b2b',
        },
        '@media (max-aspect-ratio: 1/2)': {
            fontSize: availWidth() * 0.25,
            width: '1em',
            height: '1em',
            border: '0.005em solid #2b2b2b',
        },
        color: themes[props.theme].button_text,
    }),
    button: props => ({
        fontSize: fontSize002,
        marginTop: '0.3em',
        width: '4.95em',
        height: '4.95em',
        '&:hover': {
            background: 'none'
        },
    }),
    label: props => ({
        display: "flex",
        flexDirection: "column",
        border: 'black',
    }),
    icon: props => ({
        width: '82.5%',
        height: '82.5%',
        color: themes[props.theme].text,
    }),
    text: props => ({
        '@media (min-aspect-ratio: 16/9)': {
            fontSize: fontSize00224,
        },
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: fontSize0025,
        },
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].button_text,
        width: '4em',
    }),
})