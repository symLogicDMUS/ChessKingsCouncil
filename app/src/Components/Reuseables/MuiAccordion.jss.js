import {themes} from "../styles/themes.jss";
import {makeStyles} from "@material-ui/core/styles";
import {appBarHeight} from "./PersistentDrawer.jss";
import {viewHeight} from "../helpers/windowMeasurments";
import {fontSize0040} from "../styles/fontSizes.jss";

export const useStyles = makeStyles((theme) => ({
    root: props => ({
        width: '100%',
        backgroundColor: themes[props.theme].fill,
        borderTop: `0.025em solid ${themes[props.theme].outline}`,
        ...props.rootStyle,
    }),
    mui_global_css: props => ({
        '& .Mui-expanded .MuiAccordionSummary-content': {
            marginTop: '0.2em',
            marginBottom: '0.2em',
        },
        '& .MuiAccordionSummary-root':{
            minHeight: 'unset',
        },
        ...props.addedStyle,
    }),
    accordion_tab: props => ({
        width: '100%',
        color: themes[props.theme].text,
        backgroundColor: themes[props.theme].fill,
        border: themes[props.theme].outline,
    }),
    //when numTabs > 2
    accordion_summary: props => ({
        fontSize: (viewHeight() - (appBarHeight + props.neighborContentSize)) * 0.95 / props.numTabs,
        height: '1em',
    }),
    accordion_body: props => ({
        flexGrow: 10,
        backgroundColor: themes[props.theme].fill,
        ...props.style,
    }),
    //when numTabs > 2
    accordion_title: props => ({
        fontSize: (viewHeight() - (appBarHeight + props.neighborContentSize)) * 0.95 * 0.3 / props.numTabs,
        minHeight: 'unset',
    }),
    expand_icon: props => ({
        color: themes[props.theme].text,
        /*tablets*/
        '@media screen and (min-device-width: 768px) and (max-device-width: 1040px)': {
            fontSize: fontSize0040,
            width: '1em',
            height: '1em',
        },
    }),
}), {index: 1});