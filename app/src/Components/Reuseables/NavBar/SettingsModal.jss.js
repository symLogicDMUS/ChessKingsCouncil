import {themes} from "../../styles/themes.jss";
import {modal} from "../../helpers/modal.jss";
import {makeStyles} from "@material-ui/core/styles";
import {fontSize002} from "../../styles/fontSizes.jss";
import {availHeight, availWidth} from "../../helpers/windowMeasurments";
import {outline, root, text} from "../UserInput/MuiInput.jss";

const widths = {
    desktop: availWidth() * 0.333,
    mobile: availWidth()*0.98,
}

const heights = {
    desktop: availHeight() * 0.333,
    mobile: availHeight() * 0.45,
}

export const input_label = (theme) => ({
    color: themes[theme].text,
});

export const useStyles = makeStyles({
    modal: props => ({
       ...modal,
        zIndex: 8,
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
        fontSize: fontSize002,
        borderRadius: '0.3em',
        backgroundColor: themes[props.theme].fill,
        border: `0.05em solid ${themes[props.theme].outline}`,
    }),
    settings: props => ({
        '@media screen and (max-device-width: 1040px)': {
            width: widths.mobile*0.925,
            height: heights.mobile*0.87,
        },
        '@media screen and (min-device-width: 1040px)': {
            width: widths.desktop*0.925,
            height: heights.desktop*0.87,
        },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
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
        /*media query for phones/tablets (generalized)*/
        '@media screen and (max-device-width: 1040px)': {
            height: heights.mobile * 0.08,
        },
        '@media screen and (min-device-width: 1040px)': {
            height: heights.desktop*0.08,
        },
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    }),
}, {index: 1});
