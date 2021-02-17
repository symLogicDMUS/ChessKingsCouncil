import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../styles/themes.jss";
import {availHeight, availWidth} from "../helpers/windowMeasurments";

export const icon = () => ({
    width: availWidth() * 0.078,
    height: availWidth() * 0.078
});

export const useStyles = makeStyles({
    page_link: props => ({
        width: availWidth() * 0.078,
        height: availHeight() * 0.236,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }),
    page_name: props => ({
        width: '100%',
        height: (availHeight() * 0.236 - availWidth() * 0.078),
    }),
    icon_normal: props => ({
        ...icon(),
        color: themes[props.theme].page_link,
    }),
    icon_hover: props => ({
       ...icon(),
       color: themes[props.theme].page_link_hover,
    }),
});