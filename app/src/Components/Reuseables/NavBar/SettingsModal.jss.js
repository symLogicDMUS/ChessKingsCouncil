import {themes} from "../../styles/themes.jss";
import {modal} from "../../helpers/modal.jss";
import {makeStyles} from "@material-ui/core/styles";
import {fontSize002} from "../../styles/fontSizes.jss";
import {availHeight, availWidth} from "../../helpers/windowMeasurments";

const widths = {
    wide: availWidth() * 0.333,
    thin: availWidth()*0.98,
}

const heights = {
    wide: availHeight() * 0.333,
    thin: availHeight() * 0.45,
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
        '@media screen and (max-width: 960px)': {
            width: widths.thin,
            height: heights.thin,
        },
        '@media screen and (min-width: 960px)': {
            width: widths.wide,
            height: heights.wide,
        },
        fontSize: fontSize002,
        borderRadius: '0.3em',
        backgroundColor: themes[props.theme].fill,
        border: `0.05em solid ${themes[props.theme].outline}`,
    }),
    settings: props => ({
        '@media screen and (max-width: 960px)': {
            width: widths.thin*0.925,
            height: heights.thin*0.87,
        },
        '@media screen and (min-width: 960px)': {
            width: widths.wide*0.925,
            height: heights.wide*0.87,
        },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        margin: 'auto',
    }),
    input: (props) => ({
        ...props.styleOverride,
    }),
    close_icon_flexbox: props => ({
        width: '100%',
        /*media query for phones/tablets (generalized)*/
        '@media screen and (max-width: 960px)': {
            height: heights.thin * 0.08,
        },
        '@media screen and (min-width: 960px)': {
            height: heights.wide*0.08,
        },
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    }),
}, {index: 1});
