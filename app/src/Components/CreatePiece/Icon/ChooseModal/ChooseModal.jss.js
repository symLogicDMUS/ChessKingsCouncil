import {modal} from "../../../helpers/modal.jss";
import {themes} from "../../../styles/themes.jss";
import {fontSize0015, fontSize0016} from "../../../styles/fontSizes.jss";

export const styles = {
    modal: props => ({
        ...modal,
        zIndex: 6,
    }),
    title: props => ({
        fontSize: '2em',
        fontFamily: 'Roboto-Light, Roboto',
        lineHeight: '0.7em',
        marginRight: '0.25em',
        color: themes[props.theme].text,
    }),
    title_icon: props => ({
        '@media screen and (min-width: 768px)': {
            fontSize: fontSize0016,
        },
        '@media screen and (max-width: 767px)': {
            fontSize: fontSize0015,
        },
        height: '3em',
        width: '3em',
        marginLeft: '0.25em',
        color: themes[props.theme].text,
    }),
    title_box: props => ({
        width: '11em',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '12em',
    }),
};