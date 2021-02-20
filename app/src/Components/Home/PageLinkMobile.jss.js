import {themes} from "../styles/themes.jss";
import {makeStyles} from "@material-ui/core/styles";
import {innerHeight} from "../helpers/windowMeasurments";
import {appBarHeight} from "../Reuseables/PersistentDrawer.jss";

export const page_icon = () => ({
    '@media (max-aspect-ratio: 360/515)': {
        fontSize: (innerHeight() - (appBarHeight + innerHeight() * 0.075))*0.4*0.1,
        marginRight: '0.5em',
    },
    /*shortest phones*/
    "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 360/515) and (max-aspect-ratio: 1/1)":{
        fontSize: (innerHeight() - appBarHeight)*0.85*0.125*0.6,
        marginRight: '0.5em',
    },
    '@media screen and (min-device-width: 768px) and (max-device-width: 1080px) and (max-aspect-ratio: 1/1)': {
        fontSize: (innerHeight() - (appBarHeight + innerHeight() * 0.075))*0.4*0.18,
        marginRight: '0.75em',
    },
    width: '0.8em',
    height: '0.8em',
});

export const useStyles = makeStyles({
    page_link: props => ({
        '@media and (max-device-width: 767px) and (max-aspect-ratio: 360/515)':{
            fontSize: (innerHeight() - (appBarHeight + innerHeight() * 0.075))*0.45*0.1,
            marginBottom: '0.7em',
        },
        "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 360/515) and (max-aspect-ratio: 1/1)":{
            fontSize: (innerHeight() - (appBarHeight + innerHeight() * 0.075))*0.4*0.1,
            marginBottom: '0.5em',
        },
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        alignItems: 'baseline',
        justifyContent: 'flex-start',
    }),
    page_icon_normal: props => ({
        ...page_icon(),
        color: themes[props.theme].page_link,
    }),
    page_icon_hover: props => ({
        ...page_icon(),
        color: themes[props.theme].page_link_hover,
    }),
    page_name: props => ({
        '@media (max-aspect-ratio: 834/1194)': {
            height: (innerHeight() - (appBarHeight + innerHeight() * 0.075))*0.4*0.1,
        },
        "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 360/515) and (max-aspect-ratio: 1/1)":{
            height: (innerHeight() - appBarHeight)*0.85*0.125*0.6,
        },
        '@media screen and (min-device-width: 768px) and (max-device-width: 1080px) and (max-aspect-ratio: 1/1)': {
            height: (innerHeight() - (appBarHeight + innerHeight() * 0.075))*0.4*0.18,
        },
    }),
});