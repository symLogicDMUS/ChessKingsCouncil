import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../styles/themes.jss";
import {fontSize00184, fontSize002, fontSize0095} from "../styles/fontSizes.jss";
import {availHeight, availWidth} from "../helpers/windowMeasurments";
import {appBarHeight} from "./PersistentDrawer.jss";

export const useStyles = makeStyles((theme) => ({
    root: props => ({
        width: '100%',
        fontSize: fontSize0095,
        backgroundColor: themes[props.theme].fill,
        borderTop: `0.025em solid ${themes[props.theme].outline}`,
        ...props.rootStyle,
    }),
    heading: props => ({
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    }),
    accordion_tab: props => ({
        fontSize: fontSize0095,
        color: themes[props.theme].text,
        backgroundColor: themes[props.theme].fill,
        border: themes[props.theme].outline,
        '@media (min-aspect-ratio: 320/568) and (max-aspect-ratio: 1/1)': {
            fontSize: (availHeight() - (availWidth() + appBarHeight)) / props.numTabs,
            height: '1em',
            '& .Mui-expanded': {
                marginTop: '-5%',
                marginBottom: 0,
                height: '0.5em',
                backgroundColor: themes[props.theme].fill,
            },
        },
    }),
    accordion_body: props => ({
        fontSize: fontSize0095,
        marginTop: '-0.25em',
        height: availHeight() - (availWidth() + appBarHeight),
        backgroundColor: themes[props.theme].fill,
        flexGrow: 10,
        '@media (min-aspect-ratio: 320/568) and (max-aspect-ratio: 1/1)': {
            marginTop: 0,
        },
        ...props.style, // keep as last thing in object
    }),
    accordion_summary: props => ({
        '@media (min-aspect-ratio: 320/568) and (max-aspect-ratio: 1/1)':{
            fontSize: fontSize00184,
            marginTop: '-1.75em',
        }
    }),
    expand_icon: props => ({
        color: themes[props.theme].text,
        '@media (min-aspect-ratio: 320/568) and (max-aspect-ratio: 1/1)': {
            fontSize: fontSize00184,
            marginTop: '-2.75em',
            width: '0.5em',
            height: '0.5em',
        },
    }),
}));
