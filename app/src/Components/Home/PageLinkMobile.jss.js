import {themes} from "../styles/themes.jss";
import {makeStyles} from "@material-ui/core/styles";
import {viewHeight} from "../helpers/windowMeasurments";
import {appBarHeight} from "../Reuseables/PersistentDrawer.jss";

export const page_icon = () => ({
    /*tall phones*/
    '@media screen and (max-device-width: 412px)': {
        fontSize: (viewHeight() - (appBarHeight + viewHeight() * 0.075))*0.45*0.1,
    },
    /*short/medium height phones*/
    "@media screen and (min-device-width: 412px) and  (max-device-width: 767px)": {
        fontSize: (viewHeight() - (appBarHeight + viewHeight() * 0.075))*0.45*0.1,
    },
    /*tablets*/
    '@media screen and (min-device-width: 768px) and (max-device-width: 1040px)': {
        fontSize: (viewHeight() - (appBarHeight + viewHeight() * 0.075))*0.45*0.1,
    },
    width: '0.8em',
    height: '0.8em',
    marginRight: '0.5em',
});

export const useStyles = makeStyles({
    page_link: props => ({
        /*tall phones*/
        '@media screen and (max-device-width: 412px)': {
            fontSize: (viewHeight() - (appBarHeight + viewHeight() * 0.075))*0.45*0.1,
        },
        /*short/medium height phones*/
        "@media screen and (min-device-width: 412px) and  (max-device-width: 767px)": {
            fontSize: (viewHeight() - (appBarHeight + viewHeight() * 0.075))*0.45*0.1,
        },
        /*tablets*/
        '@media screen and (min-device-width: 768px) and (max-device-width: 1040px)': {
            fontSize: (viewHeight() - (appBarHeight + viewHeight() * 0.075))*0.45*0.1,
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
        /*tall phones*/
        '@media screen and (max-device-width: 412px)': {
            height: (viewHeight() - (appBarHeight + viewHeight() * 0.075))*0.45*0.1,
        },
        /*short/medium height phones*/
        "@media screen and (min-device-width: 412px) and  (max-device-width: 767px)": {
            height: (viewHeight() - (appBarHeight + viewHeight() * 0.075))*0.45*0.1,
        },
        /*tablets*/
        '@media screen and (min-device-width: 768px) and (max-device-width: 1040px)': {
            height: (viewHeight() - (appBarHeight + viewHeight() * 0.075))*0.45*0.1,
        },
    }),
});