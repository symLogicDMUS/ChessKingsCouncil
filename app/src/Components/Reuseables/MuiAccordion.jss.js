import {themes} from "../styles/themes.jss";
import {makeStyles} from "@material-ui/core/styles";
import {fontSize00301, fontSize0032, fontSize0036, fontSize0040, fontSize00435} from "../styles/fontSizes.jss";
import {availHeight, availWidth, innerHeight} from "../helpers/windowMeasurments";
import {addressBarHeight, appBarHeight} from "./PersistentDrawer.jss";

export const useStyles = makeStyles((theme) => ({
    root: props => ({
        width: '100%',
        backgroundColor: themes[props.theme].fill,
        borderTop: `0.025em solid ${themes[props.theme].outline}`,
        /*shortest phones*/
        "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 360/515) and (max-aspect-ratio: 1/1)":{
            width: props.aboveContentHeight * 0.35,
        },
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
    accordion_summary: props => ({
        fontSize: (innerHeight() - (appBarHeight + props.aboveContentHeight)) * 0.95 / props.numTabs,
        "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 360/515) and (max-aspect-ratio: 1/1)":{
            fontSize: props.aboveContentHeight / props.numTabs,
        },
        height: '1em',
        minHeight: 'unset',
    }),
    accordion_body: props => ({
        flexGrow: 10,
        backgroundColor: themes[props.theme].fill,
        ...props.style,
    }),
    //when numTabs > 2
    accordion_title: props => ({
        fontSize: (innerHeight() - (appBarHeight + props.aboveContentHeight)) * 0.95 * 0.3 / props.numTabs,
        "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 360/515) and (max-aspect-ratio: 1/1)":{
            fontSize: props.aboveContentHeight * 0.16/ props.numTabs,
            width: props.aboveContentHeight * 0.2,
        },
        minHeight: 'unset',
    }),
    expand_icon: props => ({
        color: themes[props.theme].text,
        '@media screen and (min-device-width: 768px) and (max-device-width: 1080px) and (max-aspect-ratio: 1/1)': {
            fontSize: fontSize0040,
            width: '1em',
            height: '1em',
        },
        /*shortest phones*/
        "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 360/515) and (max-aspect-ratio: 1/1)":{
            fontSize: fontSize00435,
            width: '1em',
            height: '1em',
        },
    }),
}));