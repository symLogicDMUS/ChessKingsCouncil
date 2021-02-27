import {themes} from "../../styles/themes.jss";
import {modal} from "../../helpers/modal.jss";
import { makeStyles } from "@material-ui/core/styles";
import {fontSize002} from "../../styles/fontSizes.jss";
import {availHeight, availWidth} from "../../helpers/windowMeasurments";
import {outline, root, text} from "../MuiInput.jss";

const widths = {
    desktop: availWidth() * 0.333,
    mobile: availWidth()*0.98,
}

const heights = {
    desktop: availHeight() * 0.333,
    mobile: availHeight() * 0.45,
}

export const useStyles = makeStyles({
    modal: props => ({
       ...modal,
    }),
    window: props => ({
        '@media screen and (max-device-width: 1040px)': {
            width: widths.mobile,
            height: heights.mobile,
        },
        '@media screen and (min-device-width: 1040px)': {
            width: widths.desktop,
            height: heights.desktop,
        },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        fontSize: fontSize002,
        borderRadius: '0.3em',
        backgroundColor: themes[props.theme].fill,
        border: `0.05em solid ${themes[props.theme].outline}`,
    }),
    settings: props => ({
        '@media screen and (max-device-width: 1040px)': {
            width: widths.mobile*0.95,
            height: heights.mobile*0.95,
        },
        '@media screen and (min-device-width: 1040px)': {
            width: widths.desktop*0.95,
            height: heights.desktop*0.95,
        },
        margin: 'auto',
    }),
    input: (props) => ({
        ...root(props.theme, props.style),
        ...outline(props.theme, props.style),
        ...text(props.theme, props.style),
        ...props.styleOverride,
    }),
    close_icon_flexbox: props => ({
        width: '100%',
        fontSize: fontSize002,
        height: '1.5em',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    }),
}, {index: 1});