import {themes} from "../../styles/themes.jss";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {fontSize0016, fontSize002} from "../../styles/fontSizes.jss";
import {availHeight} from "../../helpers/windowMeasurments";

export const useStyles = makeStyles({
    icon_tool: props => ({
        '@media screen and (min-width: 1040px)': {
            width: '93%',
            marginLeft: '3.5%',
        },
    }),
    img_windows_flexbox: props => ({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'nowrap',
    }),
    title: props => ({
        fontSize: availHeight() * 0.018,
        width: '100%',
        lineHeight: '1em',
        color: themes[props.theme].text,
        fontFamily: 'Roboto-Light, Roboto',
        marginBottom: '2%',
    }),
    buttons_and_img: props => ({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '60%'
    }),
    button_group: (props) => ({
        display: 'flex',
        flexDirection: 'column',
        fontSize: fontSize002,
        justifyContent: 'space-between',
        height: '5em',
    }),
    button: (props) => ({
        fontSize: fontSize0016,
        background: themes[props.theme].button_fill,
        color: themes[props.theme].button_text,
        width: '7.5em',
        height: '2.5em',
    }),
}, {index: 1});