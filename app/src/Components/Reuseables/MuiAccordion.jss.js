import {themes} from "../styles/themes.jss";
import {makeStyles} from "@material-ui/core/styles";
import {fontSize0040} from "../styles/fontSizes.jss";
import {availHeight, availWidth, innerHeight} from "../helpers/windowMeasurments";
import {addressBarHeight, appBarHeight} from "./PersistentDrawer.jss";

export const useStyles = makeStyles((theme) => ({
    root: props => ({
        width: '100%',
        backgroundColor: themes[props.theme].fill,
        borderTop: `0.025em solid ${themes[props.theme].outline}`,
        ...props.rootStyle,
    }),
    mui_global_css: props => ({
        ...props.addedStyle,
    }),
    accordion_tab: props => ({
        width: '100%',
        color: themes[props.theme].text,
        backgroundColor: themes[props.theme].fill,
        border: themes[props.theme].outline,
    }),
    //when numTabs > 2
    accordion_title: props => ({
        fontSize: (innerHeight() - (appBarHeight +  props.aboveContentHeight))*0.95*0.3 / props.numTabs,
        minHeight: 'unset',
    }),
    accordion_body: props => ({
        flexGrow: 10,
        backgroundColor: themes[props.theme].fill,
        ...props.style,
    }),
    //when numTabs > 2
    accordion_summary: props => ({
        fontSize: (innerHeight() - (appBarHeight +  props.aboveContentHeight))*0.95 / props.numTabs,
        height: '1em',
        minHeight: 'unset',
    }),
    accordion_summary_content: props => ({
        color: themes[props.theme].text,
    }),
    expand_icon: props => ({
        color: themes[props.theme].text,
        '@media screen and (min-device-width: 768px) and (max-device-width: 991px) and (max-aspect-ratio: 1/1)': {
            fontSize: fontSize0040,
            width: '1em',
            height: '1em',
        },
    }),
}));