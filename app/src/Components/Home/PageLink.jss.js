import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../styles/themes.jss";
import {availHeight, availWidth} from "../helpers/windowMeasurments";
import {page_name} from "./MainMenuDesktop.jss";

export const icon = (fontSize) => ({
    width: availWidth() * 0.078,
    height: availWidth() * 0.078
});

export const useStyles = makeStyles({
    page_link: props => ({
        width: availWidth() * 0.078,
        height: availHeight() * 0.236,
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'space-between',
    }),
    page_name_normal: props => ({
        ...page_name(props.fontSize),
        color: themes[props.theme].page_link,
    }),
    page_name_hover: props => ({
        ...page_name(props.fontSize),
        color: themes[props.theme].page_link_hover,
    }),
    icon_normal: props => ({
        ...icon(props.fontSize),
        color: themes[props.theme].page_link,
    }),
    icon_hover: props => ({
       ...icon(props.fontSize),
       color: themes[props.theme].page_link_hover,
    }),
});