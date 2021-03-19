import {modal} from "../helpers/modal.jss";
import {themes} from "../styles/themes.jss";
import {fontSize002} from "../styles/fontSizes.jss";
import {makeStyles} from "@material-ui/core/styles";

export const sqrTextCheckbox = {
    marginLeft: 0,
    flexDirection: 'row-reverse',
};


export const styles = {
    modal: {
        ...modal,
    },
    save_animation: {
        width: '33.333%',
    },
    box: props => ({
        fontSize: fontSize002,
        display: 'flex',
    }),
};

export const appBarTitle = {
    fontSize: fontSize002,
    marginLeft: '1.5vw',
    fontWeight: 450,
}

export const useStyles = makeStyles({
    button: props => ({
        '@media screen and (max-width: 1040px)': {
            width: '15vw',
            height: '15vw',
            fontSize: '4.5vw',
        },
        '@media screen and (min-width: 1040px)': {
            fontSize: fontSize002,
            margin: 'unset',
            width: '3.5em',
            height: '3.5em',
        },
        minWidth: 0,
        minHeight: 0,
        color: themes[props.theme].text,
        borderRadius: '0.25em',
    }),
    tool_flexbox: props => ({
        width: '93%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: '3.5%',
        alignItems: 'center',
        justifyContent: 'space-between',
    }),
    tool_title: props => ({
        width: '100%',
        fontSize: '1.8vh',
        lineHeight: '1em',
        color: themes[props.theme].text,
        fontFamily: 'Roboto-Light, Roboto',
        marginBottom: '2.5%',
    }),
    tool_buttons: props => ({
        width: '100%',
        outline: '1px dashed red',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-between',
    }),
}, {index: 1});